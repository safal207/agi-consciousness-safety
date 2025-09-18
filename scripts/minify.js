import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function minifyCss(source) {
    const withoutComments = source.replace(/\/\*[\s\S]*?\*\//g, '');
    const collapsedWhitespace = withoutComments.replace(/\s+/g, ' ');
    const tightened = collapsedWhitespace
        .replace(/\s*([{}:;,])\s*/g, '$1')
        .replace(/;}/g, '}')
        .trim();
    return tightened;
}

function minifyJs(source) {
    const withoutComments = source
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|[^:])\/\/.*$/gm, '$1');

    let output = '';
    let lastChar = '';

    const commit = char => {
        output += char;
        lastChar = char;
    };

    for (let i = 0; i < withoutComments.length; i += 1) {
        const char = withoutComments[i];

        if (char === '\"' || char === '\'' || char === '`') {
            const quote = char;
            commit(char);
            i += 1;
            for (; i < withoutComments.length; i += 1) {
                const innerChar = withoutComments[i];
                commit(innerChar);
                if (innerChar === '\\') {
                    i += 1;
                    if (i < withoutComments.length) {
                        commit(withoutComments[i]);
                    }
                    continue;
                }
                if (innerChar === quote) {
                    break;
                }
            }
            continue;
        }

        if (/\s/.test(char)) {
            const nextChar = withoutComments.slice(i + 1).match(/\S/);
            const next = nextChar ? nextChar[0] : '';
            if (!lastChar || /\s/.test(lastChar)) {
                continue;
            }
            if (/[_$\w]/.test(lastChar) && /[_$\w]/.test(next)) {
                commit(' ');
            }
            continue;
        }

        if ('{}()[\];,:'.includes(char)) {
            if (output.endsWith(' ')) {
                output = output.slice(0, -1);
            }
            commit(char);
            while (withoutComments[i + 1] === ' ') {
                i += 1;
            }
            continue;
        }

        if ('=+-*/%&|<>!'.includes(char)) {
            if (output.endsWith(' ')) {
                output = output.slice(0, -1);
            }
            commit(char);
            while (withoutComments[i + 1] === ' ') {
                i += 1;
            }
            continue;
        }

        commit(char);
    }

    return output.replace(/;}/g, '}').trim();
}

function writeMinified(sourcePath, targetPath, transformer) {
    const absoluteSource = resolve(__dirname, '..', sourcePath);
    const absoluteTarget = resolve(__dirname, '..', targetPath);
    const contents = readFileSync(absoluteSource, 'utf8');
    const minified = transformer(contents);
    writeFileSync(absoluteTarget, minified, 'utf8');
}

writeMinified('assets/css/styles.css', 'assets/css/styles.min.css', minifyCss);
writeMinified('assets/js/app.js', 'assets/js/app.min.js', minifyJs);

console.log('Minified assets written to assets/css/styles.min.css and assets/js/app.min.js');
