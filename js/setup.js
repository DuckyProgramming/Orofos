function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    //resetState(0)
    for(a=0,la=combatants.length;a<la;a++){
        //this.combatants[a].id=floor(random(9,types.combatant.length))
    }
    for(a=0,la=combatants.length;a<la;a++){
        //this.combatants[a].weapon=floor(random(0,types.weapon.length))
    }

    for(g=1;g<9;g++){
        types.combatant[g].life=round(types.combatant[g].life*1.2)
    }
    for(g=1;g<9;g++){
        types.combatant[g].life=round(types.combatant[g].life*1.2)
    }
    types.combatant[1].attacks.push(28)
    types.combatant[2].attacks.push(31)
    types.combatant[3].attacks.push(34)
    types.combatant[6].attacks.push(44)

    types.combatant[1].attacks.push(29)
    types.combatant[2].attacks.push(32)
    types.combatant[3].attacks.push(35)
    types.combatant[4].attacks.push(38)
    types.combatant[5].attacks.push(42)
    types.combatant[6].attacks.push(45)
    types.combatant[8].attacks.push(14)

    current=new battle(graphics.main,combatants)
    //resetState(1)
    current.set(stage.scene)
    current.setupStack()
    //current.cut.setup(1)
    run={fore:[entities.particles]}
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}