class cut{
    constructor(layer,battle){
        this.layer=layer
        this.battle=battle
        this.type=0
        this.timer=0
        this.trigger=false
        this.count=0
        this.speed=1
        this.list=[]
        this.purchase={weapon:[],uses:[],trigger:false,select:0}
    }
    setup(type){
        this.type=type
        this.count=0
        this.timer=0
        this.trigger=true
        this.battle.characters=[]
        switch(this.type){
            case 1:
                this.battle.story=1
                this.battle.characters.push(new combatant(this.layer,1050,450,89,0,1,100))
                this.battle.characters.push(new combatant(this.layer,50,450,89,0,0,101))
                this.battle.characters.push(new combatant(this.layer,850,450,91,0,1,102))
                this.battle.characters.push(new combatant(this.layer,1050,450,90,0,0,103))
                this.battle.characters.push(new combatant(this.layer,1350,450,89,0,1,104))
                this.battle.characters.push(new combatant(this.layer,1550,450,90,0,0,105))
                this.battle.characters.push(new combatant(this.layer,2200,450,92,0,1,106))
                this.battle.characters.push(new combatant(this.layer,2300,450,98,0,1,107))
            break
            case 2:
                this.battle.story=2
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 3:
                this.battle.story=3
                this.battle.combatants[4]=new combatant(this.layer,1050,450,9,0,1,4)
            break
            case 4:
                this.battle.story=4
                this.battle.combatants[4]=new combatant(this.layer,1050,450,9,0,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,9,41,1,4)
            break
            case 5:
                this.list=[0,1,3,12,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(9,12)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(9,12)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
            break
            case 6:
                this.list=[0,1,3,12,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
            break
            case 7:
                this.list=[0,1,3,12,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
            break
            case 8:
                this.list=[0,1,3,12,38,41]
                this.battle.story=5
                this.battle.combatants[4]=new combatant(this.layer,1050,450,67,1,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,12,21,1,4)
            break
            case 9:
                this.battle.story=6
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
        }
    }
    convertBattle(){
        switch(this.type){
            case 8:
                this.battle.story=5
                this.battle.combatants[4]=new combatant(this.layer,0,450,10,1,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,11,1,1,4)
                this.battle.combatants[6]=new combatant(this.layer,0,450,12,1,1,4)
                this.battle.combatants[7]=new combatant(this.layer,0,450,67,21,1,4)
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
                this.battle.combatants[e].updateSpeech()
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
                case 2:
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
                                this.battle.characters[g].speech.text='Cobalt Ridge is located directly below\nProximity Asir, you can see it in the sky there.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==95){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='Orofosian atmosphere is quite dusty, but you\nwill always be able to use the stars as a guide.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==155){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='Relatively few travelers go near here.\nThe Bulwarks keep others out of the perimeter.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=215&&this.timer<335){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=10
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=10
                        }
                    }else if(this.timer>=335){
                        this.trigger=false
                    }
                break
                case 3:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='Free money!'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=95&&!transition.trigger&&transition.anim>0){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].fade=0
                            }
                        }
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 4:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='Another victim ahead.'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==65){
                        this.battle.combatants[5].speech.text='Grab him!'
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==125){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=125&&!transition.trigger&&transition.anim>0){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].fade=0
                            }
                        }
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 5: case 6: case 7:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=35&&!transition.trigger&&transition.anim>0){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].fade=0
                            }
                        }
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 8:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='What is this?'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=95&&!transition.trigger&&transition.anim>0){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].fade=0
                            }
                        }
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 9:
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
                                this.battle.characters[g].speech.text='Yes, we Wipers are prepared to offer\nservices to travelers on the road.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==95){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='But for a fee, of course.\nOur resources are never unlimited.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                        this.purchase.weapon[0]=23
                        this.purchase.uses=[1,1,1,1]
                    }else if(this.timer==155){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='Is there anything you would like?'
                                this.battle.characters[g].speech.time=15
                            }
                        }
                        this.layer.strokeWeight(4)
                        if(this.purchase.trigger){
                            this.layer.stroke(100,85,60)
                            this.layer.fill(125,105,75)
                            this.layer.rect(170,90,300,40)
                            this.layer.fill(0)
                            this.layer.noStroke()
                            this.layer.textSize(20)
                            this.layer.text('Select',170,90)
                            g=0
                            while(this.battle.combatants[this.purchase.select].life<=0&&g<4){
                                g++
                                this.purchase.select=(this.purchase.select+1)%4
                            }
                            for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                                if(this.battle.combatants[g].infoFade<1&&g==this.purchase.select){
                                    this.battle.combatants[g].infoFade+=0.1
                                }else if(this.battle.combatants[g].infoFade>0&&g!=this.purchase.select){
                                    this.battle.combatants[g].infoFade-=0.1
                                }
                            }
                        }else{
                            for(g=0,lg=4;g<lg;g++){
                                if(this.purchase.uses[g]<=0){
                                    this.layer.stroke(60)
                                    this.layer.fill(75)
                                }else{
                                    this.layer.stroke(100,85,60)
                                    this.layer.fill(125,105,75)
                                }
                                this.layer.rect(170,90+g*50,300,40)
                            }
                            this.layer.fill(0)
                            this.layer.noStroke()
                            this.layer.textSize(20)
                            this.layer.text('Heal',145,90)
                            this.layer.text('Supply',145,140)
                            this.layer.text(types.weapon[this.purchase.weapon[0]].name,145,190)
                            this.layer.text('$100',295,90)
                            this.layer.text('$25',295,140)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[0]].cost,295,190)
                            this.layer.text('Exit',170,240)
                        }
                        this.timer--
                    }else if(this.timer>=170&&this.timer<290){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=10
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=10
                        }
                    }else if(this.timer>=335){
                        this.trigger=false
                    }
                break
            }
            this.count--
            this.timer++
        }
        if(!this.purchase.trigger){
            for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                if(this.battle.combatants[g].infoFade>0){
                    this.battle.combatants[g].infoFade-=0.1
                }
            }
        }
    }
    onClick(){
        switch(this.type){
            case 9:
                if(this.timer==155){
                    if(this.purchase.trigger){
                        if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90},width:300,height:40})){
                            this.purchase.trigger=false
                            this.battle.combatants[this.purchase.select].weapon=this.purchase.weapon[0]
                        }
                        for(g=0;g<4;g++){
                            if(pointInsideBox({position:inputs.rel},{position:{x:this.battle.combatants[g].position.x,y:this.battle.combatants[g].position.y-this.battle.combatants[g].height/2},width:72,height:144})&&this.battle.combatants[g].life>0){
                                this.purchase.select=g
                            }
                        }
                    }else{
                        for(g=0;g<4;g++){
                            if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+g*50},width:300,height:40})&&this.purchase.uses[g]>0){
                                this.purchase.uses[g]--
                                if(g==0&&this.battle.currency.money>=100){
                                    this.battle.currency.money-=100
                                    for(h=0,lh=this.battle.combatants.length;h<lh;h++){
                                        if(this.battle.combatants[h].team==0){
                                            this.battle.combatants[h].life=this.battle.combatants[h].base.life
                                        }
                                    }
                                    for(h=0,lh=this.battle.characters.length;h<lh;h++){
                                        if(this.battle.characters[h].id==100){
                                            entities.particles.push(new particle(this.layer,this.battle.characters[h].position.x,this.battle.characters[h].position.y,6,0,2,1,[255,225,0]))
                                            entities.particles[entities.particles.length-1].value='-$100'
                                        }
                                    }
                                }else if(g==1&&this.battle.currency.money>=25){
                                    this.battle.currency.money-=25
                                    for(h=0,lh=this.battle.combatants.length;h<lh;h++){
                                        if(this.battle.combatants[h].team==0){
                                            for(i=0,li=this.battle.combatants[h].uses.length;i<li;i++){
                                                this.battle.combatants[h].uses[i]=types.attack[this.battle.combatants[h].attacks[i]].uses
                                            }
                                        }
                                    }
                                    for(h=0,lh=this.battle.characters.length;h<lh;h++){
                                        if(this.battle.characters[h].id==100){
                                            entities.particles.push(new particle(this.layer,this.battle.characters[h].position.x,this.battle.characters[h].position.y,6,0,2,1,[255,225,0]))
                                            entities.particles[entities.particles.length-1].value='-$25'
                                        }
                                    }
                                }else if(g==2&&this.battle.currency.money>=types.weapon[this.purchase.weapon[0]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[0]].cost
                                    this.purchase.trigger=true
                                    for(h=0,lh=this.battle.characters.length;h<lh;h++){
                                        if(this.battle.characters[h].id==100){
                                            entities.particles.push(new particle(this.layer,this.battle.characters[h].position.x,this.battle.characters[h].position.y,6,0,2,1,[255,225,0]))
                                            entities.particles[entities.particles.length-1].value='-$'+types.weapon[this.purchase.weapon[0]].cost
                                        }
                                    }
                                }else if(g==3){
                                    this.timer++
                                }
                            }
                        }
                    }
                }
            break
        }
    }
}