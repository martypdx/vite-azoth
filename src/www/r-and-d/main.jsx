import { fetchEmojis } from './fetchEmojis.js';
import { multiplex } from './multiplex.js';
import './RawHtml.jsx';
// import { click, mouseup } from 'delegates';
import './style.css';

function Cat({ name, lives }) {
    this.name = name;
    this.lives = lives;
    return {
        dom: <article>
            {name} ({lives})
        </article>,
        source: this,
    };
}

const felix = { name: 'felix', lives: 9 };
// console.log(Cat(felix));
console.log(new Cat(felix));

class MyClass {
    constructor({ name, lives }) {
        this.name = name;
        this.lives = lives;
    }
}

const myObject = { ...felix };

function myFunction(cat) {
    return cat;
}

function myThis({ name, lives }) {
    this.name = name;
    this.lives = lives;
}


// analyze('function', myFunction);
// analyze('class', MyClass);
// analyze('object', myObject);

// function analyze(type, value) {
//     console.log('\n****', type);
//     console.dir(value);
//     console.log('type: >>', typeof value, '<<');
//     console.log('instanceOf Function: >>', value instanceof Function, '<<');
//     console.log('instanceOf Object: >>', value instanceof Object, '<<');
//     console.log('constructor.name: >>', value.constructor.name, '<<');
//     console.log('.toString(): >>', value.toString(), '<<');
//     console.dir('new value: >>', new value, '<<');
//     console.dir('new value(): >>', new value(), '<<');
// }

console.log(myFunction(felix));
console.log(new myFunction(felix));
// console.log(myThis(felix));
console.log(new myThis(felix));
console.log(new MyClass(felix));
console.log(myObject);


