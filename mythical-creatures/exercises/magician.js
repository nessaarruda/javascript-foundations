const pryjs = require("pryjs");

class Magician {
    constructor(hash){
        this.name = `The Great ${hash.name}`;
        this.assistant = hash.assistant
        this.favoriteAccessory = hash.clothing || 'top hat'
        this.confidencePercentage = 10
    }

    favoriteAccessory(){
        console.log(`here ${this.clothing}`)
        if (this.clothing === undefined){
            return 'top hat'
        } else {
            return this.clothing
        }
    }
    performIncantation(incantation){
        return `${incantation}!`.toUpperCase()
    }

    performTrick(){
       
        if(this.favoriteAccessory === 'top hat'){
            this.confidencePercentage += 10
            return 'PULL RABBIT FROM TOP HAT'
        }else {
            this.confidencePercentage += 10
            return 'PULL DOVE FROM SLEEVE'
        }
    }

    performShowStopper(){
        if(this.confidencePercentage >= 100 && this.assistant === true){
            return 'WOW! The magician totally just sawed that person in half!'
        }else  {
            return 'Oh no, this trick is not ready!'
        }
    }
}

module.exports = Magician