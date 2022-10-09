function mouseClicked(){
    updateMouse(graphics.main)
    if(current.attack.trigger&&current.attack.timer<=0){
        if(pointInsideBox({position:inputs.rel},{position:{x:50,y:110},width:80,height:80})){
            current.attack.set()
        }
        switch(types.attack[current.attack.type].target){
            case 0:
                for(a=0;a<4;a++){
                    if(pointInsideBox({position:inputs.rel},{position:{x:550+a*100,y:400},width:72,height:144})){
                        current.attack.target[0]=a
                    }
                }
            break;
        }
    }
    else if(current.stack[0].type<4&&!current.stacking.use){
        for(a=0,la=current.combatants[current.stack[0].type].attacks.length;a<la;a++){
            if(pointInsideBox({position:inputs.rel},{position:{x:50+a*90,y:110},width:80,height:80})){
                current.attack.trigger=true
                current.attack.damage=types.attack[current.combatants[current.stack[0].type].attacks[a]].damage*current.combatants[current.stack[0].type].damage
                current.attack.type=current.combatants[current.stack[0].type].attacks[a]
            }
        }
    }
}