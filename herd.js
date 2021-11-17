const Dino = require("./dinoClasses/dino");
const Raptor = require("./dinoClasses/raptor");

class Herd {
    constructor(){
       
    }

    populate(){
        let teamList = [];
        let randomNum = 0;

        for(let i = 0; i < 3; i++){
            randomNum = Math.floor(Math.random() * (2 - 1) + 1);
            switch(randomNum){
                case 1:
                    teamList.push(new Raptor());
                    break;
                //case 2:
                    
            }
        }
        return teamList;
    }
}

module.exports = Herd;