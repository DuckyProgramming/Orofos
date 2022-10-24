class cut{
    constructor(layer,battle){
        this.layer=layer
        this.battle=battle
        this.type=0
        this.timer=0
        this.trigger=false
        this.count=0
        this.speed=1
    }
    setup(type){
        this.type=type
        this.count=0
        this.timer=0
        this.trigger=true
        this.battle.characters=[]
        switch(this.type){
            case 1:
                this.battle.characters.push(new combatant(this.layer,1050,450,89,0,1,100))
                this.battle.characters.push(new combatant(this.layer,50,450,89,0,0,101))
                this.battle.characters.push(new combatant(this.layer,850,450,91,0,1,102))
                this.battle.characters.push(new combatant(this.layer,1050,450,90,0,0,103))
                this.battle.characters.push(new combatant(this.layer,1350,450,89,0,1,104))
                this.battle.characters.push(new combatant(this.layer,1550,450,90,0,0,105))
                this.battle.characters.push(new combatant(this.layer,2200,450,92,0,1,106))
                this.battle.characters.push(new combatant(this.layer,2300,450,93,0,1,107))
            break
        }
    }
    update(){
        this.count+=this.speed
        while(this.count>0){
            for(e=0,le=this.battle.characters.length;e<le;e++){
                this.battle.characters[e].updateSpeech()
            }
            for(e=0,le=this.battle.combatants.length;e<le;e++){
                if(this.battle.combatants[e].team==0){
                    this.battle.combatants[e].updateSpeech()
                }
            }
            switch(this.type){
                case 0:
                    if(this.timer<30){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }
                break
                case 1:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='Boss wants to see you right now.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==95){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='A messenger from the\nWipers just arrived.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=155&&this.timer<305){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=10
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100&&this.timer<250){
                                this.battle.characters[g].rate[0]+=10
                                this.battle.characters[g].flip=1
                            }else{
                                this.battle.characters[g].position.x-=10
                            }
                        }
                    }else if(this.timer==305){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].speech.text='I have a quest for you to go on.\nThis Wiper tell you the rest.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=365&&this.timer<485){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].rate[0]+=10
                                this.battle.characters[g].position.x-=10
                            }
                        }
                        if(this.timer==365){
                            for(g=0,lg=this.battle.characters.length;g<lg;g++){
                                if(this.battle.characters[g].id==107){
                                    this.battle.characters[g].speech.text='Our boss is hosting an\nauction for the other gangs.'
                                    this.battle.characters[g].speech.time=60
                                }
                            }
                        }else if(this.timer==425){
                            for(g=0,lg=this.battle.characters.length;g<lg;g++){
                                if(this.battle.characters[g].id==107){
                                    this.battle.characters[g].speech.text='Our associates have acquired a\ncertain object up for sale there.'
                                    this.battle.characters[g].speech.time=60
                                }
                            }
                        }
                    }else if(this.timer==485){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==107){
                                this.battle.characters[g].speech.text='They have given us... a woman.\nThe only one on the planet.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==545){
                        this.battle.combatants[2].speech.text='You actually got one?'
                        this.battle.combatants[2].speech.time=60
                    }else if(this.timer==555){
                        this.battle.combatants[0].speech.text="That's not... possible."
                        this.battle.combatants[0].speech.time=60
                    }else if(this.timer==565){
                        this.battle.combatants[1].speech.text="I've never seen a woman..."
                        this.battle.combatants[1].speech.time=60
                    }else if(this.timer==575){
                        this.battle.combatants[3].speech.text="I can't believe it."
                        this.battle.combatants[3].speech.time=60
                    }else if(this.timer==635){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==107){
                                this.battle.characters[g].speech.text='Yes. I have some pictures here.\nShe has... a certain appeal.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==695){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==107){
                                this.battle.characters[g].speech.text='As your boss told me, you Bulwarks\nhave plenty to offer in return.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==755){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==107){
                                this.battle.characters[g].speech.text='The auction will be held on Cobalt Ridge.\nIt starts when all representatives arrive.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==815){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==107){
                                this.battle.characters[g].speech.text='All of the Wipers are prepared to\nassist you in reaching the location.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==875){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==107){
                                this.battle.characters[g].speech.text='Anyway, I must head for the Scrapper Base.\nSee you boys later.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=935&&this.timer<1055){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].flip=-1
                                this.battle.characters[g].rate[0]+=10
                                this.battle.characters[g].position.x+=10
                            }
                            if(this.battle.characters[g].id==107){
                                this.battle.characters[g].rate[0]+=10
                                this.battle.characters[g].position.x-=10
                            }
                        }
                        if(this.timer==935){
                            this.battle.combatants[2].speech.text='We could actually receive the girl?'
                            this.battle.combatants[2].speech.time=60
                        }else if(this.timer==945){
                            this.battle.combatants[0].speech.text='The boss has a payment method planned?'
                            this.battle.combatants[0].speech.time=60
                        }else if(this.timer==955){
                            this.battle.combatants[1].speech.text='It would feel real good\nto finally be able to...'
                            this.battle.combatants[1].speech.time=60
                        }else if(this.timer==965){
                            this.battle.combatants[3].speech.text='Is she still in a decent state by now?'
                            this.battle.combatants[3].speech.time=60
                        }
                    }else if(this.timer==1055){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].speech.text="We have big plans for what we'll do with\nher. We could set up a place...\nfor others to enjoy themselves."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==1115){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].speech.text="I have a payment that the Wiper\nBoss will accept without condition.\nIt's a data cube, obtained from Konai."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==1175){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].speech.text="His rebel associates will pay greatly for\nthis intel on early Management dealings."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==1235){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].speech.text='Bring us the girl.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=1295&&this.timer<1415){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=10
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==106){
                                this.battle.characters[g].rate[0]+=10
                                this.battle.characters[g].position.x-=10
                            }
                            this.battle.characters[g].position.x-=10
                        }
                    }else if(this.timer>=1415){
                        this.trigger=false
                    }
                break
            }
            this.count--
            this.timer++
        }
    }
}