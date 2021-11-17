const Dino = require("./dinoClasses/dino");

class Herd {
    constructor(){
       
    }

    populate(){
        let teamList = [];
        let randomNum = 0;

        for(let i = 0; i < 3; i++){
            randomNum = Math.floor(Math.random() * (1 - 1) + 1);
            switch(randomNum){
                case 1:
                    teamList.push(new Dino());
            }
        }
        return teamList;
    }
}

module.exports = Herd;