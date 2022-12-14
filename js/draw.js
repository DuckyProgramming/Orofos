function draw(){
    background(195,165,115)
    switch(stage.scene){
        case 'battle':
            graphics.main.background(200,170,120)
            graphics.main.image(graphics.backgrounds[0],0,0)
            current.display()
            current.update()
            for(a=0,la=run.fore.length;a<la;a++){
                for(b=0,lb=run.fore[a].length;b<lb;b++){
                    run.fore[a][b].display()
                    run.fore[a][b].update()
                    if(current.speed>0){
                        run.fore[a][b].update()
                    }
                    if(run.fore[a][b].remove){
                        run.fore[a].splice(b,1)
                        b--
                        lb--
                    }
                }
            }
        break
        case 'walk':
            graphics.main.background(200,170,120)
            graphics.main.image(graphics.backgrounds[0],(-current.totalMoved/2)%1600-800,0)
            graphics.main.image(graphics.backgrounds[0],(-current.totalMoved/2)%1600+800,0)
            current.display()
            current.update()
            for(a=0,la=run.fore.length;a<la;a++){
                for(b=0,lb=run.fore[a].length;b<lb;b++){
                    run.fore[a][b].display()
                    run.fore[a][b].update()
                    if(current.speed>0){
                        run.fore[a][b].update()
                    }
                    if(run.fore[a][b].remove){
                        run.fore[a].splice(b,1)
                        b--
                        lb--
                    }
                }
            }
        break
        case 'end':
            displayEnd(graphics.main)
        break
        case 'menu':
            displayMenu(graphics.main)
        break
    }
    stage.scale=min(width/graphics.main.width,height/graphics.main.height)
    displayTransition(graphics.main,transition)
    image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
    updateMouse(graphics.main)
}