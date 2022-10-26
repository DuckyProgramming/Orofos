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
        this.purchase={weapon:[],uses:[],trigger:false,select:0,choice:0}
        this.firstAlive=-1
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
                this.battle.combatants[5]=new combatant(this.layer,1150,450,9,41,1,5)
            break
            case 5:
                this.list=[0,1,3,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(9,12)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(9,12)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 6:
                this.list=[0,1,3,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 7:
                this.list=[0,1,3,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(9,13)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 8:
                this.battle.story=5
                this.battle.combatants[4]=new combatant(this.layer,1050,450,67,1,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,12,21,1,5)
            break
            case 9:
                this.battle.story=6
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 10:
                this.battle.story=7
                this.battle.combatants[4]=new combatant(this.layer,1050,450,18,41,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,18,41,1,5)
            break
            case 11:
                this.list=[0,1,2,4,12,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(18,21)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(18,21)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 12:
                this.list=[0,1,2,4,12,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(18,22)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(18,22)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(18,22)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 13:
                this.list=[0,1,2,4,12,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(18,22)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(18,22)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(18,22)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(18,22)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 14:
                this.battle.story=8
                this.battle.combatants[4]=new combatant(this.layer,1050,450,69,23,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,21,39,1,5)
            break
            case 15:
                this.battle.story=9
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 16:
                this.list=[0,12,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,15,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,15,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 17:
                this.list=[0,12,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,15+floor(random(0,1.5))*62,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,15+floor(random(0,1.5))*62,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,15+floor(random(0,1.5))*62,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1250,450,15+floor(random(0,1.5))*62,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 18:
                this.battle.story=10
                this.battle.combatants[4]=new combatant(this.layer,1050,450,15,3,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,68,22,1,5)
            break
            case 19:
                this.battle.story=11
                for(i=0;i<12;i++){
                    this.battle.characters.push(new combatant(this.layer,1050+i*50,450,30,0,1,100+i))
                }
                this.battle.characters.push(new combatant(this.layer,1750,450,72,0,1,112))
                this.battle.characters.push(new combatant(this.layer,1850,450,33,0,1,113))
                this.battle.characters.push(new combatant(this.layer,1900,450,33,0,1,114))
                this.battle.characters.push(new combatant(this.layer,-950,450,33,0,0,115))
                this.battle.characters.push(new combatant(this.layer,-1000,450,33,0,0,116))
            break
            case 20:
                this.battle.story=12
                this.battle.combatants[4]=new combatant(this.layer,1050,450,9,1,1,4)
            break
            case 21:
                this.battle.story=13
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 22:
                this.battle.story=14
                this.battle.combatants[4]=new combatant(this.layer,1050,450,49,13,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,49,13,1,5)
            break
            case 23:
                this.list=[0,1,2,23,34,35]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(63,66)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(63,66)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 24:
                this.list=[0,1,2,23,34,35]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(63,67)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(63,67)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(63,67)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 25:
                this.list=[0,1,2,23,34,35]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(63,67)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(63,67)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(63,67)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(63,67)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 26:
                this.battle.story=15
                this.battle.combatants[4]=new combatant(this.layer,1050,450,87,0,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,66,16,1,5)
            break
            case 27:
                this.battle.story=16
                if(this.battle.combatants[0].type==0){
                    this.battle.combatants[0]=new combatant(this.layer,1050,450,8,4,1,0)
                }else if(this.battle.combatants[0].type==1){
                    this.battle.combatants[1]=new combatant(this.layer,1150,450,8,4,1,1)
                }else if(this.battle.combatants[0].type==2){
                    this.battle.combatants[2]=new combatant(this.layer,1250,450,8,4,1,2)
                }else if(this.battle.combatants[0].type==3){
                    this.battle.combatants[3]=new combatant(this.layer,1350,450,8,4,1,3)
                }
                this.battle.combatants[4]=new combatant(this.layer,1050,450,42,5,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,43,2,1,5)
            break
            case 28:
                this.battle.story=17
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 29:
                this.list=[2,23,35,37]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(22,25)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(22,25)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 30:
                this.list=[2,23,35,37]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(22,26)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(22,26)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(22,26)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 31:
                this.list=[2,23,35,37]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(22,26)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(22,26)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(22,26)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(22,26)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 32:
                this.battle.story=18
                this.battle.combatants[4]=new combatant(this.layer,1050,450,70,7,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,24,43,1,5)
            break
            case 33:
                this.battle.story=19
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 34:
                this.list=[2,6,7,15,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(38,40)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(38,40)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 35:
                this.list=[2,6,7,15,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(38,42)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(38,42)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(38,42)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 36:
                this.list=[2,6,7,15,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(38,42)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(38,42)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(38,42)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(38,42)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 37:
                this.battle.story=20
                this.battle.combatants[4]=new combatant(this.layer,1050,450,74,2,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,75,2,1,5)
            break
            case 38:
                this.battle.story=21
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 39:
                this.battle.story=22
                this.battle.combatants[4]=new combatant(this.layer,1050,450,49,13,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,50,8,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,51,2,1,6)
            break
            case 40:
                this.battle.story=23
                for(i=0;i<12;i++){
                    this.battle.characters.push(new combatant(this.layer,-150-i*50,450,30,0,0,100+i))
                }
                this.battle.characters.push(new combatant(this.layer,1750,450,72,0,1,112))
                this.battle.characters.push(new combatant(this.layer,1850,450,33,0,1,113))
                this.battle.characters.push(new combatant(this.layer,1900,450,33,0,1,114))
                this.battle.characters.push(new combatant(this.layer,-950,450,33,0,0,115))
                this.battle.characters.push(new combatant(this.layer,-1000,450,33,0,0,116))
            break
            case 41:
                this.battle.story=24
                this.battle.combatants[4]=new combatant(this.layer,1050,450,9,2,1,4)
            break
            case 42:
                this.battle.story=25
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 43:
                this.list=[0,12,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,47,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,47,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 44:
                this.list=[0,12,38,41]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,47+floor(random(0,1.5))*31,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,47+floor(random(0,1.5))*31,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,47+floor(random(0,1.5))*31,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1250,450,47+floor(random(0,1.5))*31,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 45:
                this.battle.story=26
                this.battle.combatants[4]=new combatant(this.layer,1050,450,80,37,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,78,2,1,5)
            break
            case 46:
                this.battle.story=27
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
        }
    }
    convertBattle(){
        switch(this.type){
            case 8:
                this.battle.combatants[4]=new combatant(this.layer,0,450,10,1,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,11,1,1,5)
                this.battle.combatants[6]=new combatant(this.layer,0,450,12,1,1,6)
                this.battle.combatants[7]=new combatant(this.layer,0,450,67,21,1,7)
            break
            case 14:
                this.battle.combatants[4]=new combatant(this.layer,0,450,19,39,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,20,39,1,5)
                this.battle.combatants[6]=new combatant(this.layer,0,450,21,39,1,6)
                this.battle.combatants[7]=new combatant(this.layer,0,450,69,23,1,7)
            break
            case 18:
                this.battle.combatants[4]=new combatant(this.layer,0,450,15,3,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,15,4,1,5)
                this.battle.combatants[6]=new combatant(this.layer,0,450,15,16,1,6)
                this.battle.combatants[7]=new combatant(this.layer,0,450,68,22,1,7)
            break
            case 26:
                this.battle.combatants[4]=new combatant(this.layer,0,450,64,0,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,65,0,1,5)
                this.battle.combatants[6]=new combatant(this.layer,0,450,66,16,1,6)
                this.battle.combatants[7]=new combatant(this.layer,0,450,87,0,1,7)
            break
            case 32:
                this.battle.combatants[4]=new combatant(this.layer,0,450,22,43,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,23,43,1,5)
                this.battle.combatants[6]=new combatant(this.layer,0,450,24,43,1,6)
                this.battle.combatants[7]=new combatant(this.layer,0,450,70,7,1,7)
            break
            case 37:
                this.battle.combatants[4]=new combatant(this.layer,0,450,40,1,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,41,1,1,5)
                this.battle.combatants[6]=new combatant(this.layer,0,450,74,2,1,6)
                this.battle.combatants[7]=new combatant(this.layer,0,450,75,2,1,7)
            break
            case 45:
                this.battle.combatants[4]=new combatant(this.layer,0,450,78,2,1,4)
                this.battle.combatants[5]=new combatant(this.layer,0,450,78,2,1,5)
                this.battle.combatants[6]=new combatant(this.layer,0,450,78,2,1,6)
                this.battle.combatants[7]=new combatant(this.layer,0,450,80,37,1,7)
            break
        }
    }
    update(){
        this.count+=this.speed
        this.firstAlive=3
        while(this.battle.combatants[this.firstAlive].life<=0&&this.firstAlive>=0){
            this.firstAlive--
        }
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
                case 3: case 20: case 41:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        if(this.type==20){
                            this.battle.combatants[4].speech.text='You look...weak.'
                        }else if(this.type==41){
                            this.battle.combatants[4].speech.text="This'll be easy!"
                        }else{
                            this.battle.combatants[4].speech.text='Free money!'
                        }
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=95&&!transition.trigger&&transition.anim>0){
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
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 5: case 6: case 7: case 11: case 12: case 13: case 16: case 17: case 23: case 24: case 25: case 29: case 30: case 31: case 34: case 35: case 36: case 43: case 44:
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
                        this.battle.end()
                        this.trigger=false
                        for(g=0;g<4;g++){
                            if(this.battle.combatants[g].team==0){
                                this.battle.combatants[g].life=round(this.battle.combatants[g].life*1.2)
                                this.battle.combatants[g].base.life=this.battle.combatants[g].life
                                this.battle.combatants[g].collect.life=this.battle.combatants[g].life
                            }
                        }
                        for(g=1;g<9;g++){
                            types.combatant[g].life=round(types.combatant[g].life*1.2)
                        }
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
                        this.purchase.weapon[0]=34
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
                            for(g=0;g<4;g++){
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
                    }else if(this.timer>=290){
                        this.trigger=false
                    }
                break
                case 10:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="So, what are you doing around here?\nDon't you know this is bouncer territory?"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[this.firstAlive].speech.text="We're heading for the auction,\njust like everyone else here."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[5].speech.text="Well, maybe, but the Wipers really\ndon't know how to protect their business."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[4].speech.text="They won't stop us from killing you,\njust watch."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=275&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 14:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[5].speech.text="More of my our have been killed...\nWe'll find the ones responsible"
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[5].speech.text='It is crucial to Bounce\nsecurity that they be found-'
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 15: case 28: case 33: case 38:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                        if(this.type==15){
                            this.purchase.weapon=[4,13]
                        }else if(this.type==28){
                            this.purchase.weapon=[2,15]
                        }else if(this.type==33){
                            this.purchase.weapon=[37,43]
                        }else if(this.type==38){
                            this.purchase.weapon=[6,14]
                        }
                        this.purchase.uses=[1,1,1,1,1]
                    }else if(this.timer==35){
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
                            for(g=0;g<5;g++){
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
                            this.layer.text(types.weapon[this.purchase.weapon[1]].name,145,240)
                            this.layer.text('$100',295,90)
                            this.layer.text('$25',295,140)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[0]].cost,295,190)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[1]].cost,295,240)
                            this.layer.text('Exit',170,290)
                        }
                        this.timer--
                    }else if(this.timer>=50&&this.timer<170){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=10
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=10
                        }
                    }else if(this.timer>=170){
                        this.trigger=false
                    }
                break
                case 18:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[5].speech.text="When the Duck Faction began,\nit was unimaginably strong.\nBut my commanders abandoned me."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[5].speech.text='The few surviving ducks must be\nprotected to defend the species!'
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        types.combatant[1].attacks.push(28)
                        types.combatant[2].attacks.push(31)
                        types.combatant[3].attacks.push(34)
                        types.combatant[6].attacks.push(44)
                        for(i=0,li=this.battle.combatants.length;i<li;i++){
                            if(this.battle.combatants[i].team==0){
                                this.battle.combatants[i].startAttacks()
                            }
                        }
                        this.trigger=false
                    }
                break
                case 19:
                    if(this.timer<70){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].type==30||this.timer<35){
                                this.battle.characters[g].position.x-=30*(this.battle.characters[g].team*2-1)
                                this.battle.characters[g].rate[0]+=30
                            }
                        }
                    }
                    if(this.timer==35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==0){
                                this.battle.combatants[g].life=1
                            }
                        }
                    }else if(this.timer==70){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='Another easy victory.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==130){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='You can take them away now.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=190&&this.timer<220){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>112){
                                this.battle.characters[g].position.x-=10*(this.battle.characters[g].team*2-1)
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }
                    if(this.timer>=220&&this.timer<340){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>112){
                                this.battle.characters[g].flip=-1
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                        for(g=0;g<3;g++){
                            this.battle.combatants[g].position.x-=10
                            this.battle.combatants[g].rate[0]+=10
                        }
                    }else if(this.timer==340){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='I will not lie. I want to see all\nof you annexed into our union,\nas collectivized citizens.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==400){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='But we cannot provide for all of you.\nSo I will offer you a choice.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==460){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='Who should I take from you?'
                                this.battle.characters[g].speech.time=15
                            }
                        }
                        this.layer.strokeWeight(4)
                        this.layer.stroke(100,85,60)
                        this.layer.fill(125,105,75)
                        for(g=0;g<3;g++){
                            this.layer.rect(170,90+g*50,300,40)
                        }
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        for(g=0;g<3;g++){
                            this.layer.text(this.battle.combatants[g].name,170,90+g*50)
                        }
                        this.timer--
                    }else if(this.timer==475){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='I like how you think.\nBring them back.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=505&&this.timer<625){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>112){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                        for(g=0;g<3;g++){
                            this.battle.combatants[g].position.x+=10
                            this.battle.combatants[g].rate[0]+=10
                        }
                    }else if(this.timer==625){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='We will see each other again, '+this.battle.combatants[3].name+'.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=685&&this.timer<745){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>=112){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer>=745){
                        this.trigger=false
                    }
                break
                case 21: case 42:
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
                                if(this.type==42){
                                    this.battle.characters[g].speech.text="Those Reds did this, didn't they?\nThey own this area of Orofos."
                                }else{
                                    this.battle.characters[g].speech.text="Woah, what happened to you?\nWe can't be having this happen..."
                                }
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==95){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                if(this.type==42){
                                    this.battle.characters[g].speech.text="Their boss is one of the most\npowerful people on the planet.\nNot much we can do, I'm afraid."
                                }else{
                                    this.battle.characters[g].speech.text="Here's a heal, on the house.\nYou'll need it."
                                }
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=155&&this.timer<275){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=10
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=10
                        }
                    }else if(this.timer>=275){
                        this.trigger=false
                    }
                    if(this.timer==95){
                        this.healParty()
                    }
                break
                case 22:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Heh, look right there.\nThat's our next score."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=95&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 26:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="I know you expected me to say\nsomething in particular, but here,"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="Let's cut to the chase."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 27:
                    if(this.timer<75){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].type==8){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }
                    if(this.timer>=30&&this.timer<65){
                        this.battle.combatants[4].position.x-=10
                        this.battle.combatants[4].rate[0]+=10
                        this.battle.combatants[5].position.x-=10
                        this.battle.combatants[5].rate[0]+=10
                    }
                    if(this.timer==45){
                        this.battle.combatants[4].speech.text='Get back here duck!'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==105){
                        this.battle.combatants[4].speech.text="We're not done with you yet!"
                        this.battle.combatants[4].speech.time=60
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].type==8){
                                this.battle.combatants[g].team=0
                                this.battle.combatants[g].flip=1
                            }
                        }
                    }else if(this.timer==165){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=165&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 32:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Looks like we found our mark."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=95&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 37:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="We understand our gang may\nbe one of the weakest..."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[5].speech.text='But this is our one chance\nto finally score a victory.'
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                        for(g=0;g<4;g++){
                            if(this.battle.combatants[g].team==0){
                                this.battle.combatants[g].life=round(this.battle.combatants[g].life*1.2)
                                this.battle.combatants[g].base.life=this.battle.combatants[g].life
                                this.battle.combatants[g].collect.life=this.battle.combatants[g].life
                            }
                        }
                        for(g=1;g<9;g++){
                            types.combatant[g].life=round(types.combatant[g].life*1.2)
                        }
                    }
                break
                case 39:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="You look pretty rich,\nlet's change that."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[5].speech.text="This is a very profitable oppurtunity."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 40:
                    if(this.timer<70){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].type==30||this.timer<35){
                                this.battle.characters[g].position.x-=30*(this.battle.characters[g].team*2-1)
                                this.battle.characters[g].rate[0]+=30
                            }
                        }
                    }
                    if(this.timer==35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==0){
                                this.battle.combatants[g].life=1
                            }
                        }
                    }else if(this.timer==70){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='Not much of a challenge,\nare you?'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==130){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='You must be getting\npretty frustrated now.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=190&&this.timer<220){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>112){
                                this.battle.characters[g].position.x-=10*(this.battle.characters[g].team*2-1)
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }
                    if(this.timer>=220&&this.timer<340){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>112){
                                this.battle.characters[g].flip=-1
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                        for(g=0;g<3;g++){
                            this.battle.combatants[g].position.x-=10
                            this.battle.combatants[g].rate[0]+=10
                        }
                    }else if(this.timer==340){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='We need more of you. And we will keep\ndoing so until we have all of you.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==400){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text="I think you know where this is going."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==460){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='Who will it be, then?'
                                this.battle.characters[g].speech.time=15
                            }
                        }
                        this.layer.strokeWeight(4)
                        this.layer.stroke(100,85,60)
                        this.layer.fill(125,105,75)
                        for(g=0;g<4;g++){
                            this.layer.rect(170,90+g*50,300,40)
                        }
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        for(g=0;g<3;g++){
                            this.layer.text(this.battle.combatants[g].name,170,90+g*50)
                        }
                        this.layer.text("No",170,240)
                        this.timer--
                    }else if(this.timer==475){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text='I know you hate me for this,\nbut do not worry.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=505&&this.timer<625){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>112){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                        for(g=0;g<3;g++){
                            this.battle.combatants[g].position.x+=10
                            this.battle.combatants[g].rate[0]+=10
                        }
                    }else if(this.timer==625){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text="It'll be over before you know it."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=685&&this.timer<745){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id>=112){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer>=745&&this.timer<1000){
                        this.trigger=false
                    }
                    if(this.timer>=1000&&this.timer<1007){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer>=1007&&this.timer<1022){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].anim[0]+=1/15
                            }
                        }
                    }else if(this.timer>=1022&&this.timer<1037){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].anim[0]-=1/15
                            }
                        }
                    }else if(this.timer>=1037&&this.timer<1044){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }
                    if(this.timer==1022){
                        this.battle.combatants[3].life=0
                    }
                    if(this.timer==1044){
                        this.battle.combatants[3].type=0
                        this.timer=460
                    }
                break
                case 45:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="The Quack Brigade has weakened\nto its final breaking point."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text='This may very wel be its last\nbattle before its dissolution.'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 46:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                        if(this.type==46){
                            this.purchase.weapon=[18,19,32,43,44]
                        }
                        this.purchase.uses=[1,1,1,1,1]
                    }else if(this.timer==35){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="This have become quite chaotic.\nJust up the hill, there was\na huge convoy battle."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==95){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='I picked up all the leftover pieces.\nWe could surely use them.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
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
                            for(g=0;g<8;g++){
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
                            this.layer.text(types.weapon[this.purchase.weapon[1]].name,145,240)
                            this.layer.text(types.weapon[this.purchase.weapon[2]].name,145,290)
                            this.layer.text(types.weapon[this.purchase.weapon[3]].name,145,340)
                            this.layer.text(types.weapon[this.purchase.weapon[4]].name,145,390)
                            this.layer.text('$100',295,90)
                            this.layer.text('$25',295,140)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[0]].cost,295,190)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[1]].cost,295,240)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[2]].cost,295,290)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[3]].cost,295,340)
                            this.layer.text('$'+types.weapon[this.purchase.weapon[4]].cost,295,390)
                            this.layer.text('Exit',170,440)
                        }
                        this.timer--
                    }else if(this.timer>=170&&this.timer<290){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=10
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=10
                        }
                    }else if(this.timer>=290){
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
                                    this.healParty()
                                    this.spendParticle('-$100')
                                }else if(g==1&&this.battle.currency.money>=25){
                                    this.battle.currency.money-=25
                                    this.refillParty()
                                    this.spendParticle('-$25')
                                }else if(g==2&&this.battle.currency.money>=types.weapon[this.purchase.weapon[0]].cost){
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[0]].cost)
                                }else if(g==3){
                                    this.timer++
                                }
                            }
                        }
                    }
                }
            break
            case 15: case 28: case 33: case 38:
                if(this.timer==35){
                    if(this.purchase.trigger){
                        if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90},width:300,height:40})){
                            this.purchase.trigger=false
                            this.battle.combatants[this.purchase.select].weapon=this.purchase.weapon[this.purchase.choice]
                        }
                        for(g=0;g<4;g++){
                            if(pointInsideBox({position:inputs.rel},{position:{x:this.battle.combatants[g].position.x,y:this.battle.combatants[g].position.y-this.battle.combatants[g].height/2},width:72,height:144})&&this.battle.combatants[g].life>0){
                                this.purchase.select=g
                            }
                        }
                    }else{
                        for(g=0;g<5;g++){
                            if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+g*50},width:300,height:40})&&this.purchase.uses[g]>0){
                                this.purchase.uses[g]--
                                if(g==0&&this.battle.currency.money>=100){
                                    this.battle.currency.money-=100
                                    this.healParty()
                                    this.spendParticle('-$100')
                                }else if(g==1&&this.battle.currency.money>=25){
                                    this.battle.currency.money-=25
                                    this.refillParty()
                                    this.spendParticle('-$25')
                                }else if(g==2&&this.battle.currency.money>=types.weapon[this.purchase.weapon[0]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[0]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=0
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[0]].cost)
                                }else if(g==3&&this.battle.currency.money>=types.weapon[this.purchase.weapon[1]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[1]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=1
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[1]].cost)
                                }else if(g==4){
                                    this.timer++
                                }
                            }
                        }
                    }
                }
            break
            case 19: case 40:
                if(this.timer==460){
                    if(pointInsideBox({position:inputs.rel},{position:{x:170,y:240},width:300,height:40})&&this.type==40){
                        this.timer=1000
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==112){
                                this.battle.characters[g].speech.text="That's how it is, then?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    for(g=0;g<3;g++){
                        if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+g*50},width:300,height:40})){
                            this.battle.combatants[g].type=0
                            this.timer++
                        }
                    }
                }
            break
            case 46:
                if(this.timer==35){
                    if(this.purchase.trigger){
                        if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90},width:300,height:40})){
                            this.purchase.trigger=false
                            this.battle.combatants[this.purchase.select].weapon=this.purchase.weapon[this.purchase.choice]
                        }
                        for(g=0;g<4;g++){
                            if(pointInsideBox({position:inputs.rel},{position:{x:this.battle.combatants[g].position.x,y:this.battle.combatants[g].position.y-this.battle.combatants[g].height/2},width:72,height:144})&&this.battle.combatants[g].life>0){
                                this.purchase.select=g
                            }
                        }
                    }else{
                        for(g=0;g<8;g++){
                            if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+g*50},width:300,height:40})&&this.purchase.uses[g]>0){
                                this.purchase.uses[g]--
                                if(g==0&&this.battle.currency.money>=100){
                                    this.battle.currency.money-=100
                                    this.healParty()
                                    this.spendParticle('-$100')
                                }else if(g==1&&this.battle.currency.money>=25){
                                    this.battle.currency.money-=25
                                    this.refillParty()
                                    this.spendParticle('-$25')
                                }else if(g==2&&this.battle.currency.money>=types.weapon[this.purchase.weapon[0]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[0]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=0
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[0]].cost)
                                }else if(g==3&&this.battle.currency.money>=types.weapon[this.purchase.weapon[1]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[1]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=1
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[1]].cost)
                                }else if(g==4&&this.battle.currency.money>=types.weapon[this.purchase.weapon[2]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[2]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=0
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[2]].cost)
                                }else if(g==5&&this.battle.currency.money>=types.weapon[this.purchase.weapon[3]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[3]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=1
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[3]].cost)
                                }else if(g==6&&this.battle.currency.money>=types.weapon[this.purchase.weapon[4]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[4]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=1
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[4]].cost)
                                }else if(g==7){
                                    this.timer++
                                }
                            }
                        }
                    }
                }
            break
        }
    }
    spendParticle(value){
        for(h=0,lh=this.battle.characters.length;h<lh;h++){
            if(this.battle.characters[h].id==100){
                entities.particles.push(new particle(this.layer,this.battle.characters[h].position.x,this.battle.characters[h].position.y,6,0,2,1,[255,225,0]))
                entities.particles[entities.particles.length-1].value=value
            }
        }
    }
    healParty(){
        for(h=0,lh=this.battle.combatants.length;h<lh;h++){
            if(this.battle.combatants[h].team==0){
                this.battle.combatants[h].life=this.battle.combatants[h].base.life
            }
        }
    }
    refillParty(){
        for(h=0,lh=this.battle.combatants.length;h<lh;h++){
            if(this.battle.combatants[h].team==0){
                for(i=0,li=this.battle.combatants[h].uses.length;i<li;i++){
                    this.battle.combatants[h].uses[i]=types.attack[this.battle.combatants[h].attacks[i]].uses
                }
            }
        }
    }
}