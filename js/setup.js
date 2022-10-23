function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    for(a=0,la=combatants.length;a<la;a++){
        //this.combatants[a].id=floor(random(9,types.combatant.length))
    }
    for(a=0,la=combatants.length;a<la;a++){
        //this.combatants[a].weapon=floor(random(0,types.weapon.length))
    }
    current=new battle(graphics.main,combatants)
    current.set(stage.scene)
    current.setupStack()
    run={fore:[entities.particles]}
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}