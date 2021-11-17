const prompt = require("prompt-sync")();
const Herd = require("./herd");
const Fleet = require("./fleet");

class Battlefield{

    constructor(){
        this.player01 = [];
        this.ai = [];
        this.herd = new Herd();
        this.fleet = new Fleet();
    }

    runGame(){
        this.intro();
        this.selectTeam();
        this.aiSelectTeam();
        this.battle();
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
                this.player01 = this.fleet.populate();
                break;
            case 2:
                console.log("You selected Dinos!");
                this.player01 = this.herd.populate();
                break;
            default:
                console.log("Invalid Input!");
                this.selectTeam();
                break;
        }
    }

    //AI selects thier Team.
    aiSelectTeam(){
        let team = Math.floor(Math.random() * (2 - 1) + 1);

        switch(team){
            case 1:
                console.log("Player Two selected Robots!");
                this.player02 = this.fleet.populate();
                break;
            case 2:
                console.log("Player Two selected Dinos!");
                this.player02 = this.herd.populate();
                break;
        }
    }
}

module.exports = Battlefield;