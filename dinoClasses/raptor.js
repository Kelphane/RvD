const Dino = require("./dino");

class Raptor {
    constructor(){
        super();
        this.type = "Raptor";
        this.health = 80;
        this.energy = 100;
        this.attackPower = 20;
    }
}

module.exports = Raptor;
