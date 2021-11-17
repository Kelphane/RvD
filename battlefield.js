const prompt = require("prompt-sync")();
const Herd = require("./herd");
const Fleet = require("./fleet");

class Battlefield{

    constructor(){
        this.player01 = [];
        this.ai = [];
        this.herd = new Herd();
        this.fleet = new Fleet();
        this.isGameOver = false;
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
        
        while(!this.isGameOver){
            if(!this.isTeamAlive(this.player01) || !this.isTeamAlive(this.player02)){
                this.isGameOver = true;
            }else{
                let fighter = parseInt(prompt("Please Select Fighter: 0, 1, 2"));
                fighter = this.isValid(this.player01, fighter);

                let aiFighter = Math.floor(Math.random() * (2 - 0) + 0);
                aiFighter = isAiValid(this.player02, aiFighter);

                fighter = this.isAlive(this.player01, fighter);
                aiFighter = this.aiIsAlive(this.player02, aiFighter);

                //Player One Attacks Player Two:
                this.player02[aiFighter].health -= this.player01[fighter].attackPower;
                aiFighter = this.aiIsAlive(this.player02, aiFighter);

                //Player Two Attacks Player One:
                this.player01[fighter].health -= this.player02[aiFighter].attackPower;
                fighter = this.isAlive(this.player01, fighter);
            }
        }
        
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

   //Checks if Team is Alive:
   isTeamAlive(player){
        let counter = 0;

        for(let i = 0; i < player.length; i++){
            if(player[i].health > 0){
                counter++;
            }
        }

        if(counter > 0){
            return true;
        }else{
            return false;
        }
   }

   //Validates User Input:
   isValid(player, fighter){
        if(fighter >= 0 && fighter < player.length){
            return fighter;
        }else{
            console.log("Invalid Input! Please try again!");
            fighter = parseInt(prompt("Please Select Fighter: 0, 1, 2"));
            this.isValid(player, fighter);
        }
   }

   //Validates AI Input:
   isAiValid(player, fighter){
        if(fighter >= 0 && fighter < player.length){
            return fighter;
        }else{
            fighter = Math.floor(Math.random() * (2 - 0) + 0);
            this.isAiValid(player, fighter);
        }

    }
}

module.exports = Battlefield;