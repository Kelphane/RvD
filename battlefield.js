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

    //Player One and Player Two Battle until one Wins.
    battle(){
        let fighter = parseInt(prompt("Please Select Fighter: 0, 1, 2"));
        let aiFighter = Math.floor(Math.random() * (2 - 0) + 0);

        fighter = this.isAlive(this.player01, fighter);
        aiFighter = this.aiIsAlive(this.player02, aiFighter);

        
        
    }

    //BATTLE HELPER METHODS/////////////

    //Checks to see if Player One Fighter is Alive:
   isAlive(player, fighter){
        if(player[fighter].health <= 0){
            console.log("Fighter is Dead! Please Select Another!");
            fighter = parseInt(prompt("Please Select Fighter: 0, 1, 2"));
            this.isAlive(player, fighter);
        }else{
            return fighter;
        }
   }

   //Checks to see is AI Fighter is Alive:
   aiIsAlive(player, fighter){
    if(player[fighter].health <= 0){
        fighter = Math.floor(Math.random() * (2 - 0) + 0);
        this.aiIsAlive(player, fighter);
    }else{
        return fighter;
    }
   }

}

module.exports = Battlefield;