const prompt = require("prompt-sync")();
const Herd = require("./herd");

class Battlefield{

    constructor(){
        this.player01 = [];
        this.ai = [];
        this.herd = new Herd();
    }

    runGame(){
        this.intro();
        this.selectTeam();
    }

    //Intro:
    intro(){
        console.log("Welcome to Robots Vs Dinos!");
    }

    //Player selects their Team:
    selectTeam(){
        let team = parseInt(prompt("Please Select: (Robots: 1), (Dinos: 2)"));

        switch(team){
            case 1:
                console.log("You selected Robots!");
                this.player01 = 
                break;
            case 2:
                console.log("You selected Dinos!");
                this.player01 = this.herd.populate();
                break;
        }
    }
}

module.exports = Battlefield;