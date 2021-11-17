const Robot = require("./robotClasses/robot");

class Fleet {
    constructor(){

    }

    populate(){
        let teamList = [];
        let randomNum = 0;

        for(let i = 0; i < 3; i++){
            randomNum = Math.floor(Math.random() * (1 - 1) + 1);
            switch(randomNum){
                case 1:
                    teamList.push(new Robot());
            }
        }
        return teamList;
    }
}

module.exports = Fleet;