class Translator{

    constructor(texToTranslate, methodOfTranslate){
        this.textToTranslate = texToTranslate;
        this.methodOfTranslate = methodOfTranslate;
    }

    translate(){
       return this.methodOfTranslate(this.textToTranslate);
    }
}


class Translations{

    static toPigLatin(text){
        let translatedText = text.split(' ').map((element) => {
            return this.wordToPigLatin(element);
        });

        return translatedText.join(' ');
    }

    static wordToPigLatin(wordToTranslate){
    
        let vowels = ['a','e','i','o','u'];

        let getWord = wordToTranslate.toLowerCase();
        let firstChar = getWord.charAt(0);
        let newWord;

        if(vowels.includes(firstChar)){

            newWord = getWord + 'way';

        }else if(!vowels.includes(firstChar)){

            newWord = getWord.slice(1) + firstChar + 'ay';

        }
        return newWord;
    }

    static reverseToPigLatin(text){
        let trnaslatedWord = text.split(' ').map((element) => {
            return this.reverseWordToPigLatin(element)
        })
        return trnaslatedWord.join(' ')
    }

    static reverseWordToPigLatin(wordToTranslate){

        let getWord = wordToTranslate.toLowerCase();
        let vowels = ['a','e','i','o','u'];

        let firstChar = getWord.charAt(0)
        let getOfEnd = getWord.slice(getWord.length - 3)

        let newWord = getWord.split('');

        if(getOfEnd === 'way' && vowels.includes(firstChar)){

            for(let i = 0; i < 3; i++){
                newWord.pop();
            }
            return newWord = newWord.join('')

        }else if(getOfEnd !== 'way'){

            for(let i= 0; i < 2; i++){
                newWord.pop();
            }

            let takeLastLetter = newWord.pop();
            newWord.unshift(takeLastLetter);
            let fixedWord = newWord.join('');
            
            return fixedWord
        }


    }

}

let translateToPigLatin = new Translator('The', Translations.toPigLatin);


let result2 = Translations.toPigLatin('The quick brown fox')
console.log(result2)

let result3 = Translations.reverseToPigLatin('Hetay uickqay rownbay oxfay')
console.log(result3)

// let result = translateToPigLatin.translate() // Błąd wywołania funkcji z klasy Translator!!

