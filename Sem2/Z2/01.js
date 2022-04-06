"use strict";

const morseaCode = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/"
};


class Translator {

    constructor(textToTranslate, methodToTranslate, objectWithMorseaCode) {
        this.textToTranslate = textToTranslate;
        this.methodToTranslate = methodToTranslate;
        this.objectWithMorseaCode = objectWithMorseaCode;
    }

    translate() {
        return this.methodToTranslate(this.textToTranslate, this.objectWithMorseaCode);
    }
}

class Translations {

    static translateToMorseaCode(text, objectWithMorseaCode) {
        let getText = text.toLowerCase();
        let newText = "";
        getText.split('').forEach((element) => {

            if (objectWithMorseaCode[element]) {

                newText += ' ' + objectWithMorseaCode[element];
            }
        })
        return newText;
    }

    static changeObjectMorseaCode(objectWithMorseaCode) {
        let newObject = {};

        for (let i = 0; i < 37; i++) {
            let newValues = Object.keys(objectWithMorseaCode)[i];
            let newKeys = Object.values(objectWithMorseaCode)[i];
            newObject[newKeys] = newValues;
        }
        return newObject;
    }

    static reverseTranslate(text, objectWithMorseaCode) {

        let createObject = Translations.changeObjectMorseaCode(objectWithMorseaCode);
        let newText = '';
        text.split(' ').forEach((element) => {
            if (createObject[element]) {
                newText += createObject[element];
            }
        })
        return newText;
    }
}

let translateToMorsea = new Translator("Hello World", Translations.translateToMorseaCode, morseaCode);
let result = translateToMorsea.translate();

let revereseTranslate = new Translator(".... . .-.. .-.. --- / .-- --- .-. .-.. -..", Translations.reverseTranslate, morseaCode);
let result_2 = revereseTranslate.translate();

console.log(result);
console.log(result_2);


