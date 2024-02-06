import { test } from 'vitest';
import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import '../test-utils/with-resolvers-polyfill.js';
import { JSONParseTransformStream } from './streaming-json-data-parser.js';
import { NodeStreamToReadableStream, TestWritableStream } from './streaming-test-utils.js';

test('streams a json file', async ({ expect }) => {
    const jsonPath = resolve(__dirname, './test-data-root.json');
    const nodeStream = createReadStream(jsonPath);
    const testWriter = new TestWritableStream();

    new NodeStreamToReadableStream(nodeStream)
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new JSONParseTransformStream(null, 100))
        .pipeTo(testWriter);

    return testWriter.promise.then(result => {
        expect(result).toMatchInlineSnapshot(`
          [
            [
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128512;",
                ],
                "name": "grinning face",
                "unicode": [
                  "U+1F600",
                ],
              },
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128513;",
                ],
                "name": "grinning face with smiling eyes",
                "unicode": [
                  "U+1F601",
                ],
              },
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128514;",
                ],
                "name": "face with tears of joy",
                "unicode": [
                  "U+1F602",
                ],
              },
            ],
          ]
        `);
    });
});

test('finds array by path', async ({ expect }) => {
    const jsonPath = resolve(__dirname, './test-data-path.json');
    const nodeStream = createReadStream(jsonPath);
    const testWriter = new TestWritableStream();

    new NodeStreamToReadableStream(nodeStream)
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new JSONParseTransformStream('data', 100))
        .pipeTo(testWriter);

    const result = await testWriter.promise;

    expect(result).toMatchInlineSnapshot(`
          [
            [
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128512;",
                ],
                "name": "grinning face",
                "unicode": [
                  "U+1F600",
                ],
              },
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128513;",
                ],
                "name": "grinning face with smiling eyes",
                "unicode": [
                  "U+1F601",
                ],
              },
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128514;",
                ],
                "name": "face with tears of joy",
                "unicode": [
                  "U+1F602",
                ],
              },
            ],
          ]
    `);

});

test.only('finds array by more complex path', async ({ expect }) => {

    const jsonPath = resolve(__dirname, './test-data-multi-path.json');
    const nodeStream = createReadStream(jsonPath);
    const testWriter = new TestWritableStream();

    new NodeStreamToReadableStream(nodeStream)
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(new JSONParseTransformStream('response/data', 100))
        .pipeTo(testWriter);

    return testWriter.promise.then(result => {
        expect(result).toMatchInlineSnapshot(`
          [
            [
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128512;",
                ],
                "name": "grinning face",
                "unicode": [
                  "U+1F600",
                ],
              },
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128513;",
                ],
                "name": "grinning face with smiling eyes",
                "unicode": [
                  "U+1F601",
                ],
              },
              {
                "category": "smileys and people",
                "group": "face positive",
                "htmlCode": [
                  "&#128514;",
                ],
                "name": "face with tears of joy",
                "unicode": [
                  "U+1F602",
                ],
              },
            ],
          ]
        `);
    });
}, 60_000);

test.todo('errors and cancels');
