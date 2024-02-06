
export class JSONParseTransformStream extends TransformStream {
    constructor(dataPath, batchSize) {
        super(new Transform(dataPath, batchSize));

    }
}

export class Transform {
    stack = [];
    context = '';
    buffer = '';
    count = 0;
    batchSize = 1;
    key = '';
    dataPath = null;

    constructor(path, batchSize = 1) {
        if(path) {
            const split = path.split(/[^\w]/);
            this.dataPath = split.filter(s => s).reverse();
        }

        if(batchSize) {
            this.batchSize = batchSize;
        }
    }

    raiseError(char, i, chunk, message = '') {
        throw new Error(`Unexpected JSON token "${char}" at ${i} of ${chunk}. ${message}`);
    }

    flush(controller) {
        if(this?.buffer?.length) {
            this.buffer += ']';
            controller.enqueue(JSON.parse(this.buffer));
        }
    }

    transform(chunk, controller) {
        const { dataPath, stack } = this;

        for(let i = 0; i < chunk.length; i++) {
            const { context, key } = this;
            if(context === 'END') break;

            const char = chunk[i];
            let addToBuffer = true;
            let newContext = char;

            if(context === '""') {
                if(char === '"') {
                    this.context = '"';
                }
                // short-circuit addToBuffer
                continue;
            }

            if(context === '"') {
                // TODO: oh noes! what if escape is split across chunks?
                if(char === '\\' && chunk[i + 1] === '"') {
                    i++;
                }
                else if(char === '"') {
                    // close
                    if(key === dataPath.at(-1)) {
                        dataPath.pop();
                    }
                    // else {
                    //     this.ignore = true
                    // }
                    this.key = '';
                    this.context = stack.pop();
                }
                else {
                    this.key += char;
                }

                // short-circuit addToBuffer
                continue;
            }

            switch(char) {
                case '[': {
                    switch(context) {
                        case '$':
                            this.raiseError(
                                char, i, chunk,
                                `Sub-array not supported as child of data array, ${char} at ${i} of ${chunk}`
                            );
                        case '': {
                            if(!dataPath?.length) {
                                addToBuffer = false;
                                this.buffer += '[';
                                newContext = '$';
                            }
                            else {
                                this.raiseError(
                                    char, i, chunk,
                                    `Arrays not supported as part of path to data array, ${char} at ${i} of ${chunk}`
                                );
                            }
                        }
                        case '${':
                        case '{':
                        case '[':
                            stack.push(context);
                            this.context = newContext;
                    }
                    break;
                }
                case '{': {
                    switch(context) {
                        case '': {
                            if(!dataPath?.length) {
                                this.raiseError(
                                    char, i, chunk,
                                    `Data array expected at root of JSON`
                                );
                            }
                            stack.push(context);
                            this.context = '""';
                            addToBuffer = false;
                            break;
                        }
                        case '$':
                            if(this.count) this.buffer += ',';
                            newContext = '${';
                        case '${':
                        case '{':
                        case '[':
                            stack.push(context);
                            this.context = newContext;
                    }
                    break;
                }
                case ']': {
                    switch(context) {
                        case '$':
                            addToBuffer = false;
                            stack.pop();
                            this.context = 'END';
                            break;
                        case '[':
                            this.context = stack.pop();
                            break;
                        case '':
                        case '${':
                        case '{':
                            this.raiseError(char, i, chunk);
                    }
                    break;
                }
                case '}': {
                    switch(context) {
                        case '${':
                            addToBuffer = false;
                            this.buffer += char;
                            this.count++;
                            if(this.count >= this.batchSize) {
                                this.buffer += ']';
                                controller.enqueue(JSON.parse(this.buffer));

                                this.count = 0;
                                this.buffer = '[';
                            }
                        case '{':
                            this.context = stack.pop();
                            break;
                        case '[':
                        case '$':
                        case '':
                            this.raiseError(char, i, chunk);
                        default:
                            continue;
                    }
                    break;
                }
                default: {
                    switch(context) {
                        case '${':
                        case '{':
                        case '[':
                            break;
                        case '$':
                        case '':
                        case '""':
                        case '"':
                            addToBuffer = false;
                    }
                }
            }

            if(addToBuffer) this.buffer += char;
        }
    }
}