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
        let secondChar = getWord.charAt(1);
        let newWord;

        if(vowels.includes(firstChar)){

            newWord = getWord + 'way';

        }else if(!vowels.includes(firstChar) && vowels.includes(secondChar)){

            newWord = getWord.slice(1) + firstChar + 'ay';

        }else{

            newWord = getWord.slice(2) + firstChar + secondChar + 'ay';
        }
        return newWord;
    }

    static reverseToPigLatin(){

    }

    static reverseWordToPigLatin(wordToTranslate){

        let getWord = wordToTranslate.toLowerCase();
        let vowels = ['a','e','i','o','u'];

        let firstChar = getWord.charAt(0)
        let getOfEnd = getWord.slice(getWord.length - 3)

        if(getOfEnd === 'way' && vowels.includes(firstChar)){

            let newWord = getWord.split('')
            for(let i = 0; i < 3; i++){
                newWord.pop();
            }
            console.log(newWord = newWord.join(''));
            // return newWord = newWord.join('')
        }else if(getOfEnd !== 'way'){
            let newWord = getWord.split('')
            console.log('op')
            console.log(newWord)
            for(let i= 0; i < 2; i++){
                newWord.pop();
            }

        
        }


    }

}

let translateToPigLatin = new Translator('The', Translations.toPigLatin);


// let result2 = Translations.toPigLatin('The quick brown fox')
// console.log(result2)


let op = Translations.reverseWordToPigLatin('Awesomeay')


// let result = translateToPigLatin.translate()

// console.log(Translations.wordToPigLatin('The'))
