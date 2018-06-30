// prettier-ignore
alphabet = {
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-',
    'y': '-.--',  'z': '--..',  '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.', '0': '-----',
    '.': '.-.-.-', ',': '––..––',
}

function run(morseToEnglish, textToTranslate) {
    if (
        morseToEnglish &&
        hasValidSpacing(textToTranslate) &&
        textToTranslate.length > 0
    ) {
        return toEnglish(textToTranslate);
    } else if (!morseToEnglish && textToTranslate.length > 0) {
        return toMorse(textToTranslate);
    } else {
        return 'Invalid Morse Code Or Spacing';
    }
}

function toMorse(textToTranslate) {
    let messageConverted = [];
    textToTranslate
        .toLowerCase()
        .split(' ')
        .map((word) => {
            word.split('').map((letter) => {
                messageConverted.push(alphabet[letter]);
            });
            messageConverted.push(' ');
        });
    messageConverted.splice(-1, 1);
    return messageConverted.join(' ');
}

function toEnglish(textToTranslate) {
    let messageConverted = [];
    let morseCode = swapKeyValues(alphabet);
    textToTranslate.split('   ').map((word) => {
        word.split(' ').map((letter) => {
            messageConverted.push(morseCode[letter]);
        });
        messageConverted.push(' ');
    });
    messageConverted.splice(-1, 1);
    return messageConverted.join('');
}

function hasValidSpacing(textToTranslate) {
    regex = /[^\S\r\n]{4,}/;
    let output = regex.test(textToTranslate);
    return (output = !output);
}

function swapKeyValues(hash) {
    let newHash = {};
    for (var key in hash) {
        newHash[hash[key]] = key;
    }
    return newHash;
}
