
class Robot {
    /* Robot to have a name, health, power level, 
    and a Weapon with a type (i.e. sword) and attack power */

    constructor(){
        this.name = "Robot";
        this.health = 100;
        this.powerLevel = 100;
        this.weapon = "sword";
        this.attackPower = 10;
    }
}

module.exports = Robot;