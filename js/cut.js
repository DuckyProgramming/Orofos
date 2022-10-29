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
        this.give=0
        this.ending=0
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
            case 47:
                this.battle.story=28
                this.battle.characters.push(new combatant(this.layer,1150,450,73,0,1,100))
                this.battle.characters.push(new combatant(this.layer,1000,450,34,0,1,101))
                this.battle.characters.push(new combatant(this.layer,1050,450,37,0,1,102))
                this.battle.characters.push(new combatant(this.layer,1100,450,35,0,1,103))
                this.battle.characters.push(new combatant(this.layer,1400,450,36,0,1,104))
                this.battle.combatants[4]=new combatant(this.layer,950,450,4,0,1,105)
                this.battle.combatants[5]=new combatant(this.layer,1050,450,5,0,1,106)
            break
            case 48:
                this.battle.story=29
                this.battle.combatants[4]=new combatant(this.layer,1050,450,52,13,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,52,13,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1150,450,52,13,1,6)
            break
            case 49:
                this.list=[13,15,23,35,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(111,114)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(111,114)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 50:
                this.list=[13,15,23,35,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(111,115)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(111,115)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(111,115)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 51:
                this.list=[13,15,23,35,39]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(111,115)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(111,115)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(111,115)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(111,115)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 52:
                this.battle.story=30
                this.battle.combatants[4]=new combatant(this.layer,1050,450,115,6,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,111,39,1,5)
            break
            case 53:
                this.battle.story=31
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 54:
                this.battle.story=32
                this.battle.combatants[4]=new combatant(this.layer,-150,450,89,6,1,4)
                this.battle.combatants[5]=new combatant(this.layer,-250,450,90,6,1,5)
                this.battle.combatants[6]=new combatant(this.layer,-350,450,91,6,1,6)
            break
            case 55:
                this.list=[0,1,2,3,4,7,12,15]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(57,60)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(57,60)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 56:
                this.list=[0,1,2,3,4,7,12,15]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(57,61)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(57,61)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(57,61)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 57:
                this.list=[0,1,2,3,4,7,12,15]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(57,61)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(57,61)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(57,61)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(57,61)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 58:
                this.battle.story=33
                this.battle.combatants[4]=new combatant(this.layer,1050,450,84,1,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,58,15,1,5)
            break
            case 59:
                this.battle.story=34
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 60:
                this.list=[4,18,38]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(26,29)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(26,29)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 61:
                this.list=[4,18,38]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(26,30)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(26,30)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(26,30)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 62:
                this.list=[4,18,38]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(26,30)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(26,30)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(26,30)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(26,30)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 63:
                this.battle.story=35
                this.battle.combatants[4]=new combatant(this.layer,1050,450,71,25,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,28,18,1,5)
            break
            case 64:
                this.battle.story=36
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 65:
                this.battle.combatants[4]=new combatant(this.layer,1050,450,48,20,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,48,20,1,5)
            break
            case 66:
                g=floor(random(0,1.5))
                this.battle.combatants[4]=new combatant(this.layer,1050,450,48+g*31,20+g*8,1,4)
                g=floor(random(0,1.5))
                this.battle.combatants[5]=new combatant(this.layer,1150,450,48+g*31,20+g*8,1,5)
                g=floor(random(0,1.5))
                this.battle.combatants[6]=new combatant(this.layer,1250,450,48+g*31,20+g*8,1,6)
                g=floor(random(0,1.5))
                this.battle.combatants[7]=new combatant(this.layer,1250,450,48+g*31,20+g*8,1,7)
            break
            case 67:
                this.battle.story=37
                this.battle.combatants[4]=new combatant(this.layer,1050,450,81,29,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,79,28,1,5)
            break
            case 68:
                this.battle.story=38
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 69:
                this.battle.story=39
                this.battle.combatants[4]=new combatant(this.layer,1050,450,49,13,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,50,8,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,51,2,1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,52,6,1,7)
            break
            case 70:
                this.list=[2,5,6,7,8,13]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(42,45)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(42,45)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 71:
                this.list=[2,5,6,7,8,13]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(42,46)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(42,46)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(42,46)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 72:
                this.list=[2,5,6,7,8,13]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(42,46)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(42,46)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(42,46)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(42,46)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 73:
                this.battle.story=40
                this.battle.combatants[4]=new combatant(this.layer,1050,450,76,27,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,45,5,1,5)
            break
            case 74:
                this.battle.story=41
                this.battle.characters.push(new combatant(this.layer,1050,450,93,0,1,100))
            break
            case 75:
                this.battle.story=42
                this.battle.characters.push(new combatant(this.layer,-150,450,98,0,0,100))
            break
            case 76:
                this.battle.story=43
                this.list=[9,10,11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,63,64,65,66,77,78,79,85,93,94,95,96,100,10,102,103,106,107,108,109,111,112,113,114,116,117,118,119]
                graphics.character=[]
                graphics.character.push(createGraphics(1200,600))
                graphics.character.push(createGraphics(1200,600))
                setupLayer(graphics.character[0])
                setupLayer(graphics.character[1])
                graphics.characters=[]
                for(h=0;h<25;h++){
                    graphics.characters.push(new combatant(graphics.character[0],50+h*15,450,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],0,0,100+h))
                }
                for(h=0;h<25;h++){
                    graphics.characters.push(new combatant(graphics.character[1],425+h*15,450,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],0,0,100+h))
                }
                this.battle.characters.push(new combatant(this.layer,1150,250,97,0,1,150))
                this.battle.characters.push(new combatant(this.layer,1150,250,99,0,1,153))
                this.battle.characters.push(new combatant(this.layer,1050,250,93,0,1,151))
                this.battle.characters.push(new combatant(this.layer,1250,250,93,0,1,152))
                for(h=0;h<4;h++){
                    this.battle.characters.push(new combatant(this.layer,100+h*100+floor(h/2)*100,350,0,0,1,200+h))
                }
            break
            case 77:
                this.battle.story=44
                this.battle.combatants[4]=new combatant(this.layer,1050,450,63,1,1,4)
                this.battle.combatants[4].life/=2
                this.battle.combatants[5]=new combatant(this.layer,1250,450,22,15,1,5)
            break
            case 78:
                this.battle.story=45
                this.battle.combatants[4]=new combatant(this.layer,1050,450,15,44,1,4)
            break
            case 79:
                this.list=[5,6,18,19]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(30,33)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(30,33)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 80:
                this.list=[5,6,18,19]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(30,34)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(30,34)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(30,34)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 81:
                this.list=[5,6,18,19]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(30,34)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(30,34)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(30,34)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(30,34)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 82:
                this.battle.story=46
                this.battle.combatants[4]=new combatant(this.layer,1050,450,72,26,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,this.give,8,1,5)
            break
            case 83:
                this.battle.story=47
                this.genDead()
            break
            case 84:
                this.battle.story=48
                this.battle.combatants[4]=new combatant(this.layer,1050,200,7,24,0,4)
                for(g=0;g<4;g++){
                    this.battle.combatants[g].life=max(1,this.battle.combatants[g].life)
                }
            break
            case 85:
                this.list=[8,15,42,44,45]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(116,119)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(116,119)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 86:
                this.list=[8,15,42,44,45]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(116,120)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(116,120)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(116,120)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 87:
                this.list=[8,15,42,44,45]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(116,120)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(116,120)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(116,120)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(116,120)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 88:
                this.battle.story=49
                this.battle.combatants[4]=new combatant(this.layer,1050,450,120,37,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,119,42,1,5)
            break
            case 89:
                this.battle.story=50
                this.genDead()
            break
            case 90:
                this.battle.story=51
                this.battle.combatants[4]=new combatant(this.layer,-150,450,98,2,0,4)
                this.battle.combatants[4].life*=0.25
            break
            case 91:
                this.list=[5,6,8,14,24,43]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,62,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,62,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 92:
                this.list=[5,6,8,14,24,43]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,62+floor(random(0,1.5))*23,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,62+floor(random(0,1.5))*23,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,62+floor(random(0,1.5))*23,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1250,450,62+floor(random(0,1.5))*23,this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 93:
                this.battle.story=52
                this.battle.combatants[4]=new combatant(this.layer,1050,450,86,36,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,85,43,1,5)
            break
            case 94:
                this.battle.story=53
                this.genDead()
            break
            case 95:
                this.battle.story=54
                this.battle.combatants[4]=new combatant(this.layer,1050,450,57,35,1,4)
                this.battle.combatants[4].life=1
            break
            case 96:
                this.list=[2,5,13,15,28]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(49,52)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(49,52)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 97:
                this.list=[2,5,13,15,28]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(49,53)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(49,53)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(49,53)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 98:
                this.list=[2,5,13,15,28]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(49,53)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(49,53)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(49,53)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(49,53)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 99:
                this.battle.story=55
                this.battle.combatants[4]=new combatant(this.layer,1050,450,82,17,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,52,28,1,5)
            break
            case 100:
                this.battle.story=56
                this.genDead()
            break
            case 101:
                this.battle.story=57
                this.battle.combatants[4]=new combatant(this.layer,1050,450,89,5,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,90,5,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,91,5,1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,92,5,1,7)
            break
            case 102:
                this.list=[2,5,6,8,24]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(34,37)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(34,37)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 103:
                this.list=[2,5,6,8,24]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(34,38)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(34,38)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(34,38)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 104:
                this.list=[2,5,6,8,24]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(34,38)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(34,38)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(34,38)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(34,38)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 105:
                this.battle.story=58
                this.battle.combatants[4]=new combatant(this.layer,1050,450,73,2,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,37,6,1,5)
            break
            case 106:
                this.battle.story=59
                this.genDead()
            break
            case 107:
                this.battle.story=60
                this.battle.combatants[4]=new combatant(this.layer,1050,450,90,6,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,91,6,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,92,6,1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,92,6,1,7)
            break
            case 108:
                this.battle.story=61
                this.battle.combatants[4]=new combatant(this.layer,1050,450,67,1,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1100,450,68,22,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1150,450,69,23,1,6)
            break
            case 109:
                this.list=[8,14,15,23,44]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(53,56)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(53,56)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 110:
                this.list=[8,14,15,23,44]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(53,57)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(53,57)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(53,57)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 111:
                this.list=[8,14,15,23,44]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(53,57)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(53,57)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(53,57)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(53,57)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 112:
                this.battle.story=62
                this.battle.combatants[4]=new combatant(this.layer,1050,450,83,5,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,56,44,1,5)
            break
            case 113:
                this.battle.story=63
                this.genDead()
            break
            case 114:
                this.battle.story=64
                this.battle.combatants[4]=new combatant(this.layer,1050,450,92,2,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,92,2,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,92,2,1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,92,2,1,7)
            break
            case 115:
                this.battle.story=65
                this.battle.combatants[4]=new combatant(this.layer,1050,450,96,21,1,4)
                this.battle.combatants[4].life*=2/3
            break
            case 116:
                this.battle.story=66
                this.battle.combatants[4]=new combatant(this.layer,1050,450,16,2,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,16,2,1,5)
            break
            case 117:
                this.battle.story=67
                this.battle.combatants[4]=new combatant(this.layer,1050,450,16,2,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,16,2,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,16,2,1,6)
            break
            case 118:
                this.battle.story=68
                this.battle.combatants[4]=new combatant(this.layer,1050,450,16,2,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,16,2,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,16,2,1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,17,2,1,7)
            break
            case 119:
                this.battle.story=69
                this.battle.combatants[4]=new combatant(this.layer,1050,450,105,9,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,17,2,1,5)
            break
            case 120:
                this.battle.story=70
                this.genDead()
            break
            case 121:
                this.battle.story=71
                this.battle.combatants[4]=new combatant(this.layer,1050,450,98,2,1,4)
                this.battle.combatants[4].life*=0.75
            break
            case 122:
                this.battle.story=72
                this.battle.combatants[4]=new combatant(this.layer,1050,450,15,44,1,4)
                this.battle.combatants[4].life*=4
                this.battle.combatants[4].base.life*=4
                this.battle.combatants[4].collect.life*=4
                this.battle.combatants[4].damage*=4
                this.battle.combatants[4].name='Broken Duck'
            break
            case 123:
                this.list=[14,32,45]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(106,109)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(106,109)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
            break
            case 124:
                this.list=[14,32,45]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(106,110)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(106,110)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(106,110)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
            break
            case 125:
                this.list=[14,32,45]
                this.battle.combatants[4]=new combatant(this.layer,1050,450,floor(random(106,110)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,floor(random(106,110)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,floor(random(106,110)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,floor(random(106,110)),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],1,7)
            break
            case 126:
                this.battle.story=73
                this.battle.combatants[4]=new combatant(this.layer,1050,450,110,33,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,109,45,1,5)
            break
            case 127:
                this.battle.story=74
            break
            case 128:
                this.battle.story=75
                this.battle.combatants[4]=new combatant(this.layer,1050,450,93,0,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,94,0,1,5)
                this.battle.combatants[4].life*=0.2
                this.battle.combatants[5].life*=0.2
            break
            case 129:
                this.battle.story=76
                this.battle.combatants[4]=new combatant(this.layer,1050,450,95,0,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,96,0,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,94,0,1,6)
                this.battle.combatants[4].life*=0.2
                this.battle.combatants[5].life*=0.2
                this.battle.combatants[6].life*=0.2
            break
            case 130:
                this.battle.story=77
                this.battle.combatants[4]=new combatant(this.layer,1050,450,94,0,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,96,0,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,95,0,1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,93,0,1,7)
                this.battle.combatants[4].life*=0.2
                this.battle.combatants[5].life*=0.2
                this.battle.combatants[6].life*=0.2
                this.battle.combatants[7].life*=0.2
            break
            case 131:
                this.battle.story=78
                this.battle.combatants[4]=new combatant(this.layer,1050,450,96,0,1,4)
                this.battle.combatants[5]=new combatant(this.layer,1150,450,93,0,1,5)
                this.battle.combatants[6]=new combatant(this.layer,1250,450,94,0,1,6)
                this.battle.combatants[7]=new combatant(this.layer,1350,450,95,0,1,7)
                this.battle.combatants[4].life*=0.2
                this.battle.combatants[5].life*=0.2
                this.battle.combatants[6].life*=0.2
                this.battle.combatants[7].life*=0.2
            break
            case 132:
                this.battle.story=79
                this.battle.combatants[5]=new combatant(this.layer,-150,450,98,2,0,5)
            break
        }
    }
    convertBattle(){
        switch(stage.scene){
            case 'battle':
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
                    case 52:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,112,23,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,113,35,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,114,39,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,115,6,1,7)
                    break
                    case 54:
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].flip=1-this.battle.combatants[g].team*2
                        }
                    break
                    case 58:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,58,1,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,59,2,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,60,16,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,84,15,1,7)
                    break
                    case 67:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,48,20,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,48,20,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,79,28,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,81,29,1,7)
                    break
                    case 73:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,43,7,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,44,6,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,45,5,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,76,27,1,7)
                    break
                    case 82:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,31,18,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,32,19,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,this.give,8,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,72,26,1,7)
                    break
                    case 88:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,117,45,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,118,44,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,119,42,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,120,37,1,7)
                    break
                    case 93:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,62,14,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,62,24,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,85,43,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,86,36,1,7)
                    break
                    case 99:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,50,13,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,51,5,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,52,28,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,82,17,1,7)
                    break
                    case 105:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,35,24,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,36,5,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,37,6,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,73,2,1,7)
                    break
                    case 112:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,54,15,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,55,23,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,56,44,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,83,5,1,7)
                    break
                    case 119:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,16,2,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,16,2,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,17,2,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,105,9,1,7)
                    break
                    case 126:
                        this.battle.combatants[4]=new combatant(this.layer,0,450,107,14,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,0,450,108,32,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,0,450,109,45,1,6)
                        this.battle.combatants[7]=new combatant(this.layer,0,450,110,33,1,7)
                    break
                    case 132:
                        if(this.timer>=7000&&this.timer<8000){
                            this.battle.combatants[4]=new combatant(this.layer,0,450,46,10,1,4)
                            this.battle.combatants[5]=new combatant(this.layer,0,450,46,10,1,5)
                            this.battle.combatants[6]=new combatant(this.layer,0,450,46,10,1,6)
                            this.battle.combatants[7]=new combatant(this.layer,0,450,46,10,1,7)
                        }else if(this.timer>=8000&&this.timer<9000){
                            this.battle.combatants[4]=new combatant(this.layer,0,450,13,9,1,4)
                            this.battle.combatants[5]=new combatant(this.layer,0,450,13,9,1,5)
                            this.battle.combatants[6]=new combatant(this.layer,0,450,13,9,1,6)
                            this.battle.combatants[7]=new combatant(this.layer,0,450,13,9,1,7)
                        }else if(this.timer>=9000&&this.timer<10000){
                            this.battle.combatants[4]=new combatant(this.layer,0,450,61,9,1,4)
                            this.battle.combatants[5]=new combatant(this.layer,0,450,61,9,1,5)
                            this.battle.combatants[6]=new combatant(this.layer,0,450,14,10,1,6)
                            this.battle.combatants[7]=new combatant(this.layer,0,450,88,30,1,7)
                        }
                    break
                }
            break
            case 'end':
                setupEnd(this.ending)
            break
        }
    }
    update(){
        this.count+=this.speed
        if(this.type!=132){
            this.firstAlive=3
            while(this.battle.combatants[this.firstAlive].life<=0&&this.firstAlive>=0){
                this.firstAlive--
            }
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
                case 5: case 6: case 7: case 11: case 12: case 13: case 16: case 17: case 23: case 24: case 25: case 29: case 30: case 31: case 34: case 35: case 36: case 43: case 44: case 49:
                case 50: case 51: case 55: case 56: case 57: case 60: case 61: case 62: case 65: case 66: case 70: case 71: case 72: case 79: case 80: case 81: case 85: case 86: case 87: case 91:
                case 92: case 96: case 97: case 98: case 102: case 103: case 104: case 109: case 110: case 111: case 116: case 117: case 118: case 123: case 124: case 125: case 128: case 129: case 130: case 131:
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
                case 15: case 28: case 33: case 38: case 53: case 59: case 64: case 68: case 74:
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
                        }else if(this.type==53){
                            this.purchase.weapon=[23,35]
                        }else if(this.type==59){
                            this.purchase.weapon=[5,7]
                        }else if(this.type==64){
                            this.purchase.weapon=[20,28]
                        }else if(this.type==68){
                            this.purchase.weapon=[24,42]
                        }else if(this.type==74){
                            this.purchase.weapon=[21,22]
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
                case 22: case 48: case 69:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35&&this.type==22){
                        this.battle.combatants[4].speech.text="Heh, look right there.\nThat's our next score."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==35&&this.type==48){
                        this.battle.combatants[4].speech.text="Let's get our share of the profits!\nTime to get paid."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==35&&this.type==69){
                        this.battle.combatants[4].speech.text="They shouldn't be much trouble.\nLet's collect our rewards."
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
                        this.purchase.uses=[1,1,1,1,1,1,1,1]
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
                case 47:
                    if(this.timer<30){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=10
                            this.battle.characters[g].rate[0]+=10
                        }
                        for(g=4,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x-=5/3
                        }
                    }
                    if(this.timer<40){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x-=5
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=5
                        }
                    }else if(this.timer==40){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='Look here, at these two\ngood friends travelling together.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==100){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="They shouldn've messed with\nthe Reichswehr, now should've they?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==160){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='I was going to kill them both,\nbut now that you arrived...'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==220){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='Who dies?'
                                this.battle.characters[g].speech.time=15
                            }
                        }
                        this.layer.strokeWeight(4)
                        this.layer.stroke(100,85,60)
                        this.layer.fill(125,105,75)
                        for(g=0;g<2;g++){
                            this.layer.rect(170,90+g*50,300,40)
                        }
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        for(g=0;g<2;g++){
                            this.layer.text(this.battle.combatants[4+g].name,170,90+g*50)
                        }
                        this.timer--
                    }else if(this.timer==235){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text='That is what happens when\nyou defy the Reichswehr, '+this.battle.combatants[5-this.purchase.choice].name+'.'
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=295&&this.timer<325){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].flip=1
                            this.battle.characters[g].position.x+=10
                            this.battle.characters[g].rate[0]+=10
                        }
                        for(g=4,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x+=5/3
                        }
                    }else if(this.timer==335){
                        if(this.battle.combatants[0].type==0){
                            this.battle.combatants[0]=new combatant(this.layer,1050,450,5-this.purchase.choice,6-this.purchase.choice,1,0)
                        }else if(this.battle.combatants[0].type==1){
                            this.battle.combatants[1]=new combatant(this.layer,1150,450,5-this.purchase.choice,6-this.purchase.choice,1,1)
                        }else if(this.battle.combatants[0].type==2){
                            this.battle.combatants[2]=new combatant(this.layer,1250,450,5-this.purchase.choice,6-this.purchase.choice,1,2)
                        }else if(this.battle.combatants[0].type==3){
                            this.battle.combatants[3]=new combatant(this.layer,1350,450,5-this.purchase.choice,6-this.purchase.choice,1,3)
                        }
                        this.battle.combatants[4].type=0
                        this.battle.combatants[5].type=0
                    }else if(this.timer>=335&&this.timer<410){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].type==5-this.purchase.choice){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==410){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].type==5-this.purchase.choice){
                                this.battle.combatants[g].team=0
                                this.battle.combatants[g].flip=1
                            }
                        }
                        this.trigger=false
                    }
                    if(this.timer>=295&&this.timer<335){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x+=5
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x+=5
                        }
                    }
                    if(this.timer>=1000&&this.timer<1017){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer>=1017&&this.timer<1032){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].anim[0]+=1/15
                            }
                        }
                    }else if(this.timer>=1032&&this.timer<1047){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].anim[0]-=1/15
                            }
                        }
                    }else if(this.timer>=1047&&this.timer<1064){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }
                    if(this.timer==1032){
                        this.battle.combatants[4].life=0
                    }
                    if(this.timer==1064){
                        this.battle.combatants[4].type=0
                        this.timer=220
                    }
                    if(this.timer>=2000&&this.timer<2007){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].position.x-=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer>=2007&&this.timer<2022){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].anim[0]+=1/15
                            }
                        }
                    }else if(this.timer>=2022&&this.timer<2037){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].anim[0]-=1/15
                            }
                        }
                    }else if(this.timer>=2037&&this.timer<2044){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==104){
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }
                    if(this.timer==2022){
                        this.battle.combatants[5].life=0
                    }
                    if(this.timer==2044){
                        this.battle.combatants[5].type=0
                        this.timer=220
                    }
                break
                case 52:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="I'm the boss of the Shielders,\nand I must protect my men."
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
                case 54:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x+=10
                                this.battle.combatants[g].rate[0]+=10
                                this.battle.combatants[g].flip=1
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='We have a message from the boss.'
                        this.battle.combatants[4].speech.time=60
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==0){
                                this.battle.combatants[g].flip=-1
                            }
                        }
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="Your mission is canceled,\nfor being too risky.\nTime to return to base."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[this.firstAlive].speech.text="We spend all this time getting here,\nand now you tell us to give up\nand quit? We're close."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[4].speech.text="No, you're heading back.\nCome on, we need to go."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        this.battle.combatants[this.firstAlive].speech.text="We're going to the auction,\nwhether the Bulwark leaderhsip\nwants to or not."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==335){
                        this.battle.combatants[4].speech.text="You still have our\ndata cube with you.\nIf you'll leave, we want it back."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==395){
                        this.battle.combatants[this.firstAlive].speech.text="We need it to pay at the auction.\nYou won't get anything."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==455){
                        this.battle.combatants[4].speech.text="I guess that settles it, then."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==515){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=515&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                    }
                    if(this.timer==515){
                        this.battle.combatants[this.firstAlive].speech.text="Well, looks like we\njust angered our old bosses."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==575){
                        this.battle.combatants[this.firstAlive].speech.text="But even with the Bulwarks after us,\nwe can still get to the auction."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer>=635){
                        this.trigger=false
                    }
                break
                case 58:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='Need more... good stuff...'
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
                case 63:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='You will quickly become...\na liability...'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=95&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                        types.combatant[1].attacks.push(29)
                        types.combatant[2].attacks.push(32)
                        types.combatant[3].attacks.push(35)
                        types.combatant[4].attacks.push(38)
                        types.combatant[5].attacks.push(42)
                        types.combatant[6].attacks.push(45)
                        types.combatant[8].attacks.push(14)
                        for(i=0,li=this.battle.combatants.length;i<li;i++){
                            if(this.battle.combatants[i].team==0){
                                this.battle.combatants[i].startAttacks()
                            }
                        }
                    }
                break
                case 67:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='Beat them up!'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=95&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 73:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='Our allies did a\npoor job with you.'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="You're stronger than\nthey gave you credit for."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="But right now,\nit's time to finish the job."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=215&&!transition.trigger&&transition.anim>0){
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
                case 75:
                    if(this.timer<85){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==85){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].flip=-1
                                this.battle.characters[g].speech.text="Good to finally be back here,\nthe auction's just ahead."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==145){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="There's been an awful lot\nof carnage back there,\nhopefully most people made it."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==205){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Your boss said he had\nsomething great to pay with,\nguess we'll see what it is soon."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==265){
                        this.battle.combatants[this.firstAlive].speech.text='I guess so... he was quite\ngenerous with his offer.'
                        this.battle.combatants[this.firstAlive].speech.time=60
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].life=max(this.battle.combatants[g].life,1)
                        }
                    }else if(this.timer==325){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="This'll probably be the last\ntime we see each other.\nEnjoy the auction, I guess."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=385&&this.timer<420){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].position.x+=10
                                this.battle.characters[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer>=420){
                        this.trigger=false
                    }
                break
                case 76:
                    if(this.timer<50){
                        graphics.characters[this.timer].display()
                    }
                    this.layer.image(graphics.character[0],max(-100,900-this.timer*10)+max(0,this.timer-1050)*-10,0)
                    this.layer.image(graphics.character[1],max(-100,900-this.timer*10)+max(0,this.timer-1050)*10,0)
                    if(this.timer<40){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x-=5
                        }
                    }else if(this.timer>=40&&this.timer<140){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150||this.battle.characters[g].id==151||this.battle.characters[g].id==152){
                                this.battle.characters[g].position.x-=4
                                this.battle.characters[g].rate[0]+=4
                            }
                        }
                    }else if(this.timer>=240&&this.timer<340){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==151||this.battle.characters[g].id==152){
                                this.battle.characters[g].position.x+=4
                                this.battle.characters[g].rate[0]-=4
                            }
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].position.x-=0.5
                                this.battle.characters[g].rate[0]+=0.5
                            }
                        }
                    }else if(this.timer>=340&&this.timer<440){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].position.x-=0.5
                                this.battle.characters[g].rate[0]+=0.5
                            }
                        }
                    }else if(this.timer>=500&&this.timer<600){
                        if(this.timer==500){
                            for(g=0,lg=this.battle.characters.length;g<lg;g++){
                                if(this.battle.characters[g].id==151){
                                    this.battle.characters[g].position.x+=50
                                }else if(this.battle.characters[g].id==152){
                                    this.battle.characters[g].position.x-=50
                                }
                            }
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==151||this.battle.characters[g].id==152||this.battle.characters[g].id==153){
                                this.battle.characters[g].position.x-=4
                                this.battle.characters[g].rate[0]+=4
                            }
                        }
                    }else if(this.timer>=615&&this.timer<625){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].position.x-=2
                                this.battle.characters[g].rate[0]-=2
                                this.battle.characters[g].anim[0]+=1/10
                            }
                        }
                    }else if(this.timer>=625&&this.timer<650){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152||this.battle.characters[g].id==153){
                                this.battle.characters[g].position.x-=2
                                this.battle.characters[g].rate[0]+=2
                            }else if(this.battle.characters[g].id==151){
                                this.battle.characters[g].position.x+=4
                                this.battle.characters[g].rate[0]+=4
                            }
                        }
                    }else if(this.timer>=650&&this.timer<660){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].position.x+=2
                                this.battle.characters[g].rate[0]+=2
                                this.battle.characters[g].anim[0]-=1/10
                            }else if(this.battle.characters[g].id==153){
                                this.battle.characters[g].anim[5]-=1/10
                            }
                        }
                    }
                    if(this.timer>=625&&this.timer<635){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==153){
                                this.battle.characters[g].anim[5]+=1/10
                            }
                        }
                    }else if(this.timer>=680&&this.timer<690||this.timer>=780&&this.timer<790||this.timer>=880&&this.timer<890){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].position.x-=2
                                this.battle.characters[g].rate[0]-=2
                                this.battle.characters[g].anim[0]+=1/10
                            }else if(this.battle.characters[g].id==153){
                                this.battle.characters[g].anim[floor(this.timer/100)]+=1/10
                            }
                        }
                    }else if(this.timer>=690&&this.timer<700||this.timer>=790&&this.timer<800||this.timer>=890&&this.timer<900){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].position.x+=2
                                this.battle.characters[g].rate[0]+=2
                                this.battle.characters[g].anim[0]-=1/10
                            }
                        }
                    }else if(this.timer>=940&&this.timer<950){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].position.x-=2
                                this.battle.characters[g].rate[0]-=2
                                this.battle.characters[g].anim[0]+=1/10
                            }
                        }
                    }else if(this.timer>=950&&this.timer<1020){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==151||this.battle.characters[g].id==152||this.battle.characters[g].id==153){
                                this.battle.characters[g].position.x+=4
                                this.battle.characters[g].rate[0]+=4
                                if(this.battle.characters[g].id==151){
                                    this.battle.characters[g].flip=1
                                }
                            }
                        }
                    }
                    if(this.timer==600){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==153){
                                this.battle.characters[g].speech.text="Stop, please!"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==610){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==153){
                                this.battle.characters[g].speech.text="Be quiet."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==690){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==153){
                                this.battle.characters[g].speech.text="Get off me!"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==700){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].speech.text="Can't, boss's orders."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==790){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==153){
                                this.battle.characters[g].speech.text="Why would you do this?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==800){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].speech.text="I don't think you\nneed to know."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==890){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==153){
                                this.battle.characters[g].speech.text="Please, I can't go on any longer.\nYou can just let me go on,\nI won't cause you any problems,\nI'll give you anything..."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==900){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==152){
                                this.battle.characters[g].speech.text="Look, just shut up already.\nNobody is listening."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    if(this.timer==120){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==200){
                                this.battle.characters[g].speech.text="Wow. I never thought we could\nall come together like this."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==180){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==201){
                                this.battle.characters[g].speech.text="Good to know that there\nare no monsters on Orofos."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==240){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==200){
                                this.battle.characters[g].speech.text="What do you mean? There's never\nbeen any monsters, only people."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==300){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==201){
                                this.battle.characters[g].speech.text="You probably get\nwhat I mean now."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    if(this.timer==150){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==202){
                                this.battle.characters[g].speech.text="Do you think she's like\nwhat they say she is?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==210){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==203){
                                this.battle.characters[g].speech.text="I hope so. I killed six\npeople just to get here."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==270){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==202){
                                this.battle.characters[g].speech.text="Wow. I thought we were all\nhere to gather peacefully,\nnot to fight each other."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==330){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==203){
                                this.battle.characters[g].speech.text="Well, what do we know."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    if(this.timer==540){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==200){
                                this.battle.characters[g].speech.text="Well, there she is.\nA little underwhelming,\nwouldn't you agree?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==600){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==201){
                                this.battle.characters[g].speech.text="Underwhelming? This is your\none chance to enjoy\nlife and it's underwhelming?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==660){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==200){
                                this.battle.characters[g].speech.text="She just looks...weak.\nLike she'd never put up a fight.\nToo easy to pacify."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==720){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==201){
                                this.battle.characters[g].speech.text="Is that not what you want?\nYou shouldn't want any trouble,\nyou want things to go...smoothly."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    if(this.timer==570){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==202){
                                this.battle.characters[g].speech.text="Well, she doesn't exactly\nmeet my standards. I\nwouldn't invest too heavily."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==630){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==203){
                                this.battle.characters[g].speech.text="But it's your only chance.\nFail now, you may never feel\nthe embrace of a woman again."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==690){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==202){
                                this.battle.characters[g].speech.text="Stop teasing me. You had\na family too before we\nended up in this dump, remember?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==750){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==203){
                                this.battle.characters[g].speech.text="I try my best to forget."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    if(this.timer==140){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="Hello everybody!\nWelcome to the auction. Make yourselves\ncomfortable, this could take a while."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==200){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="My men are getting the\nlots right now, but I want\nto set out some ground rules."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==260){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="I understand money is rare\naround here, so any objects\nwith considerable value are usable."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==320){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="And my off-planet\nassociates would certainly pay\ngreatly for outside information."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==380){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="After all, we're just a\nbunch of former criminals.\nAnd we all have connections."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==440){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="But it looks like the lots\nfor today are ready.\nBring her in, men!"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==660){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="This entire operation\nhas come at my expense,\nso I hope that we'll act honorably."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==720){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="None of us would like to see someone like\nher go to waste, now would we?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==780){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="We'll get to her, of course.\nBut let's start with something else."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==840){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="You see, my associates have\nbrought in a lot more\nthan just this little flower."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==900){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="Rare Management technology,\nsome of the best in the galaxy.\nI'm sure we can put it to good use."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==960){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="I expect that all of you will maintain\nthe peace here, wouldn't want those\nweapons used against each other."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==1020){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].speech.text="Let us begin with-"
                                this.battle.characters[g].speech.time=30
                                entities.particles.push(new particle(this.layer,this.battle.characters[g].position.x-900,this.battle.characters[g].position.y-this.battle.characters[g].height,3,90,10,30,[100,50,100]))
                                entities.particles[entities.particles.length-1].end=30
                            }
                        }
                    }else if(this.timer==1035){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==150){
                                this.battle.characters[g].life=0
                            }else if(this.battle.characters[g].id==200){
                                this.battle.characters[g].speech.text="What just happened?"
                                this.battle.characters[g].speech.time=60
                            }else if(this.battle.characters[g].id==203){
                                this.battle.characters[g].speech.text="Run!"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==1080){
                        this.battle.combatants[0].speech.text="We need to get moving.\nThey're all over the place now.\nWe can't survive near here."
                        this.battle.combatants[0].speech.time=60
                    }else if(this.timer==1140){
                        this.battle.combatants[1].speech.text="We still need to find the girl.\nWhere did they take her?"
                        this.battle.combatants[1].speech.time=60
                    }else if(this.timer==1200){
                        this.battle.combatants[2].speech.text="Forward, somewhere. Those\nWipers took her behind the rock.\nReally, we don't know."
                        this.battle.combatants[2].speech.time=60
                    }else if(this.timer==1260){
                        this.battle.combatants[3].speech.text="Let's just get of here,\nwe don't want to get killed."
                        this.battle.combatants[3].speech.time=60
                    }else if(this.timer>=1320){
                        this.trigger=false
                    }
                break
                case 77:
                    if(this.timer<140){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }
                    if(this.timer==40){
                        this.battle.combatants[5].speech.text="Get back here, I'm not done with you!"
                        this.battle.combatants[5].speech.time=60
                    }
                    if(this.timer>=140){
                        this.trigger=false
                    }
                break
                case 78:
                    if(this.timer<35||this.timer>=215&&this.timer<335){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="I wouldn't head forward if I\nwere you. The Wipers got\nambushed and a huge fight began."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[this.firstAlive].speech.text="Aren't you going to fight us?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="I'm not insane. I\nknow any battle I can't win.\nIt comes with experience."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=335){
                        this.trigger=false
                    }
                break
                case 82:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text='We know each other. That much is\ncertain. But this man behind\nme...you know him as well.'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="Because as much damage as\nyou've caused me. I known\nhow this all ends."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="You can kill me and destroy\nmy ideology, but you will\nnever repair your broken minds."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=215&&!transition.trigger&&transition.anim>0){
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
                case 83: case 89: case 94: case 100: case 106: case 113: case 120:
                    if(this.timer<90){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].rate[0]+=10
                            }else{
                                this.battle.combatants[g].position.x-=10
                            }
                        }
                        if(this.type==83){
                            this.purchase.weapon=[8,45]
                        }else if(this.type==89){
                            this.purchase.weapon=[27,42]
                        }else if(this.type==94){
                            this.purchase.weapon=[25,26]
                        }else if(this.type==100){
                            this.purchase.weapon=[1,34]
                        }else if(this.type==106){
                            this.purchase.weapon=[14,32]
                        }else if(this.type==113){
                            this.purchase.weapon=[13,15]
                        }else if(this.type==120){
                            this.purchase.weapon=[2,9]
                        }
                        this.purchase.uses=[1,1,1,1,1]
                    }else if(this.timer==90){
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
                            this.layer.text('Loot Healing',170,90)
                            this.layer.text('Loot Supply',170,140)
                            this.layer.text('Loot '+types.weapon[this.purchase.weapon[0]].name,170,190)
                            this.layer.text('Loot '+types.weapon[this.purchase.weapon[1]].name,170,240)
                            this.layer.text('Exit',170,290)
                        }
                        this.timer--
                    }else if(this.timer>=90&&this.timer<180){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].rate[0]+=10
                            }else{
                                this.battle.combatants[g].position.x-=10
                            }
                        }
                    }else if(this.timer>=180){
                        this.trigger=false
                    }
                break
                case 84:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].rate[0]+=10
                            }else{
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].flip=-1
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Hey, you!\nI need some help over here,\njust to get out of this jam!"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="The bars supporting cage are weak,\nbut I can't reach them from here.\nHelp me out!"
                        this.battle.combatants[4].speech.time=60
                    }
                    this.layer.noStroke()
                    this.layer.fill(100,(2000-this.timer)/15)
                    this.layer.rect(this.battle.combatants[4].position.x,this.battle.combatants[4].position.y+125,6,250)
                    this.layer.rect(this.battle.combatants[4].position.x-20,this.battle.combatants[4].position.y+125,6,250)
                    this.layer.rect(this.battle.combatants[4].position.x+20,this.battle.combatants[4].position.y+125,6,250)
                    this.layer.fill(100,(2020-this.timer)/15)
                    this.layer.rect(this.battle.combatants[4].position.x-15,this.battle.combatants[4].position.y-this.battle.combatants[4].height/2-10,10,100)
                    this.layer.rect(this.battle.combatants[4].position.x+15,this.battle.combatants[4].position.y-this.battle.combatants[4].height/2-10,10,100)
                    this.layer.rect(this.battle.combatants[4].position.x-45,this.battle.combatants[4].position.y-this.battle.combatants[4].height/2-10,10,100)
                    this.layer.rect(this.battle.combatants[4].position.x+45,this.battle.combatants[4].position.y-this.battle.combatants[4].height/2-10,10,100)
                    this.layer.rect(this.battle.combatants[4].position.x,this.battle.combatants[4].position.y-this.battle.combatants[4].height/2-60,100,10)
                    this.layer.rect(this.battle.combatants[4].position.x,this.battle.combatants[4].position.y-this.battle.combatants[4].height/2+40,100,10)
                    if(this.timer==155){
                        this.layer.strokeWeight(4)
                        this.layer.stroke(100,85,60)
                        this.layer.fill(125,105,75)
                        for(g=0;g<5;g++){
                            this.layer.rect(170,90+g*50,300,40)
                        }
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        for(g=0;g<4;g++){
                            this.layer.text('Use '+this.battle.combatants[g].name,170,90+g*50)
                        }
                        this.layer.text('No',170,290)
                        this.timer--
                    }else if(this.timer>=155&&this.timer<245){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].rate[0]+=10
                            }else{
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].flip=-1
                            }
                        }
                    }else if(this.timer>=245&&this.timer<1000){
                        this.trigger=false
                    }
                    if(this.timer>=1000&&this.timer<1040-this.purchase.choice*10){
                        this.battle.combatants[this.purchase.choice].position.x+=10
                        this.battle.combatants[this.purchase.choice].rate[0]+=10
                    }else if(this.timer>=1040-this.purchase.choice*10&&this.timer<1055-this.purchase.choice*10){
                        this.battle.combatants[this.purchase.choice].anim[0]+=1/15
                    }else if(this.timer>=1055-this.purchase.choice*10&&this.timer<1070-this.purchase.choice*10){
                        this.battle.combatants[this.purchase.choice].anim[0]-=1/15
                    }else if(this.timer>=1070-this.purchase.choice*10&&this.timer<2000){
                        this.timer=2000
                    }
                    if(this.timer>=2000&&this.timer<2020){
                        this.battle.combatants[4].position.y+=25/2
                    }else if(this.timer==2020){
                        this.battle.combatants[this.purchase.choice].life=0
                    }
                    if(this.timer>=2035&&this.timer<2045){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g>=4){
                                this.battle.combatants[g].rate[0]+=10
                                this.battle.combatants[g].position.x+=10
                            }
                        }
                    }else if(this.timer==2060){
                        this.battle.combatants[4].speech.text="Uhhh, I didn't think\nthat would happen."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==2120){
                        this.battle.combatants[4].speech.text="Is there some way I can\nrepay you for your loss?"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==2180){
                        this.battle.combatants[4].speech.text="I don't have money,\nso I guess I'll join you."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=2240&&this.timer<2290-this.purchase.choice*10){
                        this.battle.combatants[4].rate[0]+=10
                        this.battle.combatants[4].position.x-=10
                    }else if(this.timer>=2290-this.purchase.choice*10){
                        this.battle.storage=[this.battle.combatants[this.purchase.choice],this.battle.combatants[4]]
                        this.battle.combatants[this.purchase.choice]=this.battle.storage[1]
                        this.battle.combatants[this.purchase.choice].flip=1
                        this.battle.combatants[4]=this.battle.storage[0]
                        this.trigger=false
                    }
                break
                case 88:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Yeah, I didn't think\nthis would happen, so I\ndon't have a speech prepared."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="But just because I didn't plan\nfor this, it doesn't\nmean we can't achieve victory!"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 90:
                    if(this.timer<85){
                        this.battle.combatants[4].position.x+=10
                        this.battle.combatants[4].rate[0]+=10
                    }else if(this.timer==85){
                        this.battle.combatants[4].flip=-1
                        this.battle.combatants[4].speech.text="Finally made it here. There was a lot\nof fighting near the auction,\nthe Wipers are scattering."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==145){
                        this.battle.combatants[4].speech.text="Gotta go right now.\nSurviving Wipers are trying\nto regroup around our base."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==205){
                        this.battle.combatants[4].speech.text="All the gangs smell our blood in\nthe water. It's going to be\na bloodbath unless we reorganize."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==265){
                        this.battle.combatants[this.firstAlive].speech.text="We'll try our best to stay safe.\nJust don't do anything dumb.\nYou're in no shape to fight."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==325){
                        this.battle.combatants[4].speech.text="We could both die today,\nfriend. Let's hope we\nboth survive until tomorrow."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==385){
                        this.battle.combatants[this.firstAlive].speech.text="Wait, one more thing.\nDo you know where the girl is?\nWhich faction has her?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==445){
                        this.battle.combatants[4].speech.text="Those guards got ambushed by a\nsquad of Hiders on the way out.\nThey're your best chance."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=505&&this.timer<540){
                        this.battle.combatants[4].flip=1
                        this.battle.combatants[4].position.x+=10
                        this.battle.combatants[4].rate[0]+=10
                    }else if(this.timer>=540){
                        this.trigger=false
                    }
                break
                case 93:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Forward, my Ducks! We have\nour enemy in a position\nwhere they cannot withdraw!"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="This is our chance\nto win the battle we\ncoveted for so long..."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=155&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 95:
                    if(this.timer<35||this.timer>=335&&this.timer<455){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="I...I just wanted to have a good\ntime...just once. One last\ntime before this planet kills me."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[this.firstAlive].speech.text="What happened to you?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="Those Hiders...they have the girl.\nI asked for one last chance,\nand they didn't give it me one."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[this.firstAlive].speech.text="Do they still have her?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==275){
                        this.battle.combatants[4].speech.text="I don't know, but they seem to be\nholding on to her quite hard.\nWouldn't give her up without a fight."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=455){
                        this.trigger=false
                    }
                break
                case 99:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[5].speech.text="It's all over. We have no supplies,\nwe've lost most of our members,\nwe can't do anything about it."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="Maybe the declining sharks\ncan enjoy one last victory?"
                        this.battle.combatants[4].speech.time=60
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
                case 101:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="You."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="You betrayed us.\nTook our resources, and left.\nKilled our messenger, as well."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="You were never really\nwith us out of loyalty.\nYou just wanted free protection."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[4].speech.text="You got protection from us.\nAnd now, you're going to pay for it."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=275&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 105:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="I know you. You're the\nmorons I gave a buddy to.\nI see what's happened since."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="I was going to kill you\nwith them on the spot,\nbut I relented. A mistake."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="But you are a lot weaker\nthan you think you are.\nUp there, they remain supreme."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=215&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 107:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Accept it. You never were\nworth anything to us.\nYou were but a freeloader."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="You destroyed our entire\nbusiness. The rich kids never\ngo to Orofosian markets anymore."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="The only thing we can still\ndo is to carry on our\nwork of protection and murder."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[4].speech.text="And that murder can\nonly start with you."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=275&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 108:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="This is the end of\nthe road for you."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[5].speech.text="We're here on the behalf of all\nwho have died in the last week."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[6].speech.text="Can you not see the destruction\nyou've wrought? How many\nyou've killed in your path?"
                        this.battle.combatants[6].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[4].speech.text="And what has it all been\nfor? One last oppurtunity to\nenjoy yourself at a girl's expense?"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        this.battle.combatants[5].speech.text="For the good of all of\nus, who want to keep\nthe relative peace on Orofos..."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==335){
                        this.battle.combatants[6].speech.text="There's no question about it.\nSomebody has to deal with you\nbefore you ruin the planet."
                        this.battle.combatants[6].speech.time=60
                    }else if(this.timer==395){
                        this.battle.combatants[4].speech.text="And with the strongest men\naround here all dead, only\nwe can act to save everybody."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==455){
                        this.battle.combatants[5].speech.text="It's ok, we all know\nwhat type of people this\nplace creates. This is a kindness."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==515){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=515&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.timer=1000
                        this.battle.combatants[4]=new combatant(this.layer,700,450,67,1,1,4)
                        this.battle.combatants[5]=new combatant(this.layer,750,450,68,22,1,5)
                        this.battle.combatants[6]=new combatant(this.layer,800,450,69,23,1,6)
                        this.battle.combatants[4].life=1
                        this.battle.combatants[5].life=1
                        this.battle.combatants[6].life=1
                    }else if(this.timer==1060){
                        this.battle.combatants[4].speech.text="You may think it's over now,\nbut heed our warnings..."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==1120){
                        this.battle.combatants[5].speech.text="You're planning to assault\nthe Hider base and take\nyour prize from them, but..."
                        this.battle.combatants[5].speech.time=60
                        this.battle.combatants[4].life=0
                    }else if(this.timer==1180){
                        this.battle.combatants[6].speech.text="You will never surpass the Ma-"
                        this.battle.combatants[6].speech.time=30
                        this.battle.combatants[5].life=0
                    }else if(this.timer>=1210){
                        this.battle.combatants[6].life=0
                        this.trigger=false
                    }
                    if(this.timer>=900&&this.timer<1000){
                        this.timer=900
                    }
                break
                case 112:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Might need some backup here.\nThey've arrived.\nEvacuate all facilities if possible."
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
                case 114:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="You can't be stopped, can you?\nThere's no end to what you'll do."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="Can you imagine what you've\ndestroyed? All the bodies...\nthey should be giving you nightmares."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="But that's not how you work,\nis it? You don't care about all\nthose lives. Just obstacles."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[4].speech.text="You can still stop.\nThat girl isn't even that-whatever.\nDamn it, this isn't going to work."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=275&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 115:
                    if(this.timer<35||this.timer>=335&&this.timer<455){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="It's over. We all failed.\nThis is the end of the Wipers.\nOur last moments."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[this.firstAlive].speech.text="What happened at the meetup?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="Desert Control Raid.\nWe got absolutely demolished.\nThey're going after the Hiders next."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[this.firstAlive].speech.text="Desert Control?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==275){
                        this.battle.combatants[4].speech.text="Former Management Soldiers.\nThey're crazy powerful. You\nshould turn around right here."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=455){
                        this.trigger=false
                    }
                break
                case 119:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="You know, the other factions,\nthey have one fatal weakness.\nTheir greatest mistake."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[4].speech.text="They forget their past. How they\ngot here. Why now they reside\non a desolate ball of dirt and sand."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="The Desert Control, Management\ndeserters hiding from the almighty\nhand of Managemental Discipline."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[4].speech.text="The Communists, or the Reds, exiled\nin the wake of their defeat during\nthe Human Empire Civil War."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        this.battle.combatants[4].speech.text="The Bulwarks, mercenaries outlawed by\nthe Management, who retreated to the\nlast safe place for their business."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==305){
                        this.battle.combatants[this.firstAlive].speech.text="They never told us about that..."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==335){
                        this.battle.combatants[4].speech.text="The Imperialists, or the Reichswehr,\npast supporters of a military coup\nin the High Corporate Conglomerate."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==395){
                        this.battle.combatants[4].speech.text="The Cartel, the only faction\nwith means to leave, trapped\nin their old ways for eternity."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==455){
                        this.battle.combatants[4].speech.text="The Scrappers, deported following the\ndissolution of the Originian guilds,\nalong with others sent to Alicu."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==515){
                        this.battle.combatants[4].speech.text="The Ducks, united since their escape\nfrom genocide, but unable to\nmaintain allegiance in their ranks."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==575){
                        this.battle.combatants[4].speech.text="And the Wipers, in disguise,\nbut always, the remains of\nDark Star! THE ONES WHO GOT\nUS ALL HERE IN THE FIRST PLACE!"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==635){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=635&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 121:
                    if(this.timer<25||this.timer>=265&&this.timer<275||this.timer>=755&&this.timer<840){
                        this.battle.combatants[4].position.x-=10
                        this.battle.combatants[4].rate[0]+=10
                    }else if(this.timer==25){
                        this.battle.combatants[4].speech.text="It's over.\nThe ambush...it's over."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==85){
                        this.battle.combatants[4].speech.text="There's no Wiper coordination left.\nThe faction has essentially\njust disbanded. It's a massacre."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==145){
                        this.battle.combatants[4].speech.text="There's a lot of us left,\nof course, but we can't\norganize ourselves anymore."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==205){
                        this.battle.combatants[4].speech.text="I need to go.\nThere's nothing left,\nfrom when we were powerful."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==275){
                        this.battle.combatants[this.firstAlive].speech.text="Wait, stop."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==335){
                        this.battle.combatants[this.firstAlive].speech.text="The Commandant said something\nabout the Wipers and Dark Star."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==395){
                        this.battle.combatants[4].speech.text="Guess the secret's\nout now, huh?"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==455){
                        this.battle.combatants[4].speech.text="Yes, we're former pirates,\ndefeated by the Management.\nThis was the only place to go."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==515){
                        this.battle.combatants[4].speech.text='The "associates" are pirates who\nstill roam the depths of space.'
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==575){
                        this.battle.combatants[this.firstAlive].speech.text="What's up ahead?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==635){
                        this.battle.combatants[4].speech.text="The Bombers.\nThey're preparing to attack the Hiders.\nProbably won't see you coming."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==695){
                        this.battle.combatants[this.firstAlive].speech.text="Thanks. Don't die just yet.\nWe could always use a friend like you."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer>=840){
                        this.trigger=false
                    }
                break
                case 122:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="You remember me, don't you?\nHow I said I wasn't going to fight you?"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==95){
                        this.battle.combatants[this.firstAlive].speech.text="You didn't want to."
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==155){
                        this.battle.combatants[4].speech.text="Times since then have\nchanged. You have to stop.\nYou can't keep doing this."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==215){
                        this.battle.combatants[this.firstAlive].speech.text="Doing what?"
                        this.battle.combatants[this.firstAlive].speech.time=60
                    }else if(this.timer==275){
                        this.battle.combatants[4].speech.text="I know I can't win. But if I do,\nI will have saved the world."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==335){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=335&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.trigger=false
                    }
                break
                case 126:
                    if(this.timer<35){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(this.battle.combatants[g].team==1){
                                this.battle.combatants[g].position.x-=10
                                this.battle.combatants[g].rate[0]+=10
                            }
                        }
                    }else if(this.timer==35){
                        this.battle.combatants[4].speech.text="Well, look who just arrived.\nGuess it's time to finish this."
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
                case 127:
                    if(this.timer==0){
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].life=max(this.battle.combatants[g].life,this.battle.combatants[g].base.life)
                        }
                    }else if(this.timer==5){
                        this.battle.combatants[0].speech.text="That's the Bombers taken care of.\nNow it's just the Hiders left."
                        this.battle.combatants[0].speech.time=60
                    }else if(this.timer==65){
                        this.battle.combatants[3].speech.text="Well, looking ahead, not quite."
                        this.battle.combatants[3].speech.time=60
                    }else if(this.timer>=125){
                        this.trigger=false
                    }
                break
                case 132:
                    if(this.timer<85){
                        this.battle.combatants[5].position.x+=10
                        this.battle.combatants[5].rate[0]+=10
                    }else if(this.timer==85){
                        this.battle.combatants[5].flip=-1
                        this.battle.combatants[5].speech.text="Well, here we are.\nReady to take on the\nHiders and claim your prize?"
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==145){
                        this.battle.combatants[5].speech.text="I'm not in much shape to fight,\nbut I'll help you out right now."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==205){
                        this.battle.combatants[5].speech.text="Go on, finish off the Hiders.\nI won't be far behind."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer>=265&&this.timer<445){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].rate[0]+=5
                            }else if(g==5){
                                this.battle.combatants[g].position.x-=5
                            }
                        }
                    }else if(this.timer>=445&&this.timer<1645){
                        if(this.timer%30==15&&this.timer<1345){
                            this.battle.characters.push(new combatant(this.layer,1050+random(-50,50),450+random(0,10),floor(random(100,104)),0,1,100))
                            this.battle.characters[this.battle.characters.length-1].die()
                        }else if(this.timer==1405){
                            this.battle.characters.push(new combatant(this.layer,1050+random(-50,50),450+random(0,10),104,0,1,100))
                            this.battle.characters[this.battle.characters.length-1].die()
                            this.battle.combatants[4]=new combatant(this.layer,950,450,99,31,1,4)
                            this.battle.combatants[4].flip=1
                        }else if(this.timer==600){
                            this.battle.combatants[3].speech.text="They're all dead.\nSo many of them, all killed."
                            this.battle.combatants[3].speech.time=60
                        }else if(this.timer==900){
                            this.battle.combatants[3].speech.text="This is a massacre."
                            this.battle.combatants[3].speech.time=60
                        }
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].rate[0]+=5
                            }
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].position.x-=5
                            if(this.battle.characters[g].position.x<-150){
                                this.battle.characters.splice(g,1)
                                g--
                                lg--
                            }
                        }
                    }else if(this.timer>=1645&&this.timer<1725){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x-=5/2
                        }
                    }
                    if(this.timer>=175&&this.timer<190){
                        this.battle.combatants[5].anim[0]+=1/15
                    }else if(this.timer>=190&&this.timer<205){
                        this.battle.combatants[5].anim[0]-=1/15
                    }
                    if(this.timer==190){
                        this.healParty()
                        this.refillParty()
                    }else if(this.timer==265){
                        this.battle.combatants[5].flip=1
                    }else if(this.timer==1725){
                        this.battle.combatants[4].speech.text="Wait...stop, please."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==1785){
                        this.battle.combatants[4].speech.text="You know, it doesn't...\ndoesn't have to be this way.\nIt...never had to be."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==1845){
                        this.battle.combatants[4].speech.text="I know you want to...\nyou know what I mean.\nBut you don't have to..."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==1905){
                        this.battle.combatants[4].speech.text="Please just listen to me...\nYou don't have to this...\nYou can just leave..."
                        this.battle.combatants[4].speech.time=15
                        this.layer.strokeWeight(4)
                        this.layer.stroke(100,85,60)
                        this.layer.fill(125,105,75)
                        this.layer.rect(170,90,300,40)
                        this.layer.rect(170,140,300,40)
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        this.layer.text('I have to do this',170,90)
                        this.layer.text("I don't have to do this",170,140)
                        this.timer--
                    }else if(this.timer>=1920&&this.timer<1940){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].position.x-=5/2
                                this.battle.combatants[g].rate[0]+=5/2
                            }
                        }
                    }else if(this.timer==1940){
                        this.battle.combatants[4].flip=-1
                        this.battle.combatants[4].speech.text="Thanks for showing you care.\nThe other people here...didn't.\nYou've seen what happened to them."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==2000){
                        this.battle.combatants[4].speech.text="I understand what you...wanted\nfrom me. What all of you wanted.\nYou all think so...similarly."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==2060){
                        this.battle.combatants[4].speech.text="But you really aren't all...the same.\nSome of you really do have\na sense of...morality."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==2120){
                        this.battle.combatants[4].speech.text="If you keep your..end of the...\ndeal, I'll try my best to help\nyou out as much as I can."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=2135&&this.timer<2260){
                        this.battle.combatants[5].position.x+=7
                        this.battle.combatants[5].rate[0]+=7
                    }else if(this.timer==2260){
                        this.battle.combatants[5].speech.text="Well, I guess that's just how\nit is. No sense in changing things\nwhen all of you are against me."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==2320){
                        this.battle.combatants[5].speech.text="If this is what you want,\nthis is what I'll take."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer>=2380&&this.timer<2460){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100||this.timer<2440){
                                this.battle.characters[g].position.x-=5
                            }
                        }
                    }else if(this.timer==2460){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="It's good to see you again, Sakura.\nWe'll finish up for now."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=2520&&this.timer<2540||this.timer>=2620&&this.timer<2640){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x-=5/4
                                this.battle.characters[g].rate[0]+=5/4
                            }
                        }
                    }else if(this.timer>=2540&&this.timer<2555){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].anim[0]+=1/10
                            }
                        }
                    }else if(this.timer>=2575&&this.timer<2590){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].anim[0]-=1/10
                            }
                        }
                    }else if(this.timer==2555){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Deal with our little witness problem..."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    if(this.timer==2575){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                entities.particles.push(new particle(this.layer,this.battle.characters[g].position.x-25,this.battle.characters[g].position.y-this.battle.characters[g].height*0.7,3,270,3,25/2,[50,255,50]))
                                entities.particles[entities.particles.length-1].end=5
                            }
                        }
                    }
                    if(this.timer==2520){
                        this.battle.combatants[4].speech.text="I have missed you, Illysec."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==2580){
                        this.battle.combatants[5].life=0
                    }else if(this.timer==3160){
                        this.battle.currency.money+=100000
                        for(h=0,lh=this.battle.characters.length;h<lh;h++){
                            if(this.battle.characters[h].id==100){
                                entities.particles.push(new particle(this.layer,this.battle.characters[h].position.x,this.battle.characters[h].position.y,6,0,2,1,[255,225,0]))
                                entities.particles[entities.particles.length-1].value=100000
                            }
                        }
                    }
                    if(this.timer>=2580&&this.timer<2640){
                        this.battle.combatants[4].flip=1
                        this.battle.combatants[4].position.x++
                        this.battle.combatants[4].rate[0]++
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==101||this.battle.characters[g].id==102){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].position.x++
                                this.battle.characters[g].rate[0]++
                            }
                        }
                    }else if(this.timer==2640){
                        this.battle.combatants[4].flip=-1
                        this.battle.combatants[4].speech.text="No, Illysec!\nThey...they helped me get here!\nI wouldn't be here without their help!"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=2645&&this.timer<2660){
                        this.battle.combatants[4].anim[5]+=1/15
                    }else if(this.timer==2700){
                        this.battle.combatants[4].speech.text="Please, I'm begging you!\nWhatever you do, don't kill them!\nThey're good people!"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==2760){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Take her away."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=2820&&this.timer<2940){
                        if(this.timer==2820){
                            this.battle.combatants[4].speech.text="No, just don't kill them!\nThey don't deserve to die!"
                            this.battle.combatants[4].speech.time=60
                        }else if(this.timer>=2835&&this.timer<2850){
                            this.battle.combatants[4].anim[5]-=1/15
                        }
                        this.battle.combatants[4].position.x+=2
                        this.battle.combatants[4].rate[0]+=2
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==101||this.battle.characters[g].id==102){
                                this.battle.characters[g].position.x+=2
                                this.battle.characters[g].rate[0]+=2
                            }else if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x--
                                this.battle.characters[g].rate[0]++
                            }
                        }
                    }else if(this.timer==2940){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="I don't trust Sakura.\nNot one bit. But I'll take\nher word for this one."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==3000){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="(Curse you,\nManagement Composite Organisms!)"
                                this.battle.characters[g].speech.time=30
                            }
                        }
                    }else if(this.timer==3030){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="I must thank you for helping us resolve our\nissue. Using the Management's resources,\nwe can compensate you in many ways."
                                this.battle.characters[g].speech.time=15
                            }
                        }
                        this.layer.strokeWeight(4)
                        this.layer.stroke(100,85,60)
                        this.layer.fill(125,105,75)
                        this.layer.rect(170,90,300,40)
                        this.layer.rect(170,140,300,40)
                        this.layer.fill(0)
                        this.layer.noStroke()
                        this.layer.textSize(20)
                        this.layer.text('Money',170,90)
                        this.layer.text('A way out',170,140)
                        this.timer--
                    }else if(this.timer==3045){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="As you wish."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=3145&&this.timer<3160){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].anim[0]+=1/15
                            }
                        }
                    }else if(this.timer>=3160&&this.timer<3175){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].anim[0]-=1/15
                            }
                        }
                    }else if(this.timer==3175){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="The Management is eternally grateful."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==3235){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Goodbye."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=3295&&this.timer<3415){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].position.x+=5
                                this.battle.characters[g].rate[0]+=5
                            }
                        }
                    }else if(this.timer>=3415&&this.timer<4000||this.timer>=4435&&this.timer<5000||this.timer==11660||this.timer==16450||this.timer==20755){
                        transition.trigger=true
                        transition.scene='end'
                    }else if(this.timer==4015){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="You want to leave Orofos?\nThat's a strange request,\nbut it's one I can grant."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==4075){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="The Management can bring you anywhere,\nbut I won't be responsible for that.\nYou can go anywhere in the galaxy."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==4135){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="At best you can hope to become a\ncivilian on Origin. At worst you'll\nbe conscripted into the military."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==4195){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="But wherever they send you, at\nleast you'll be safe. Anything\nwould be better than Orofos."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==4255){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="You can be assured that we'll take\ngood care of Sakura. Those\npirates will see consequences, don't worry."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==4315){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Orofos will be the same disaster\nas it was before, but that\nwon't be our problem, will it?"
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }
                    if(this.timer>=4075&&this.timer<4435){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].rate[0]+=2
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].flip=1
                                this.battle.characters[g].rate[0]+=2
                            }
                        }
                    }
                    if(this.timer>=4075&&this.timer<4155){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x+=5/2
                        }
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].position.x+=5/2
                            }
                        }
                    }else if(this.timer==5060){
                        this.battle.combatants[4].flip=-1
                        this.battle.combatants[4].speech.text="I guess not.\nYou really are all the same.\nJust here to enjoy me, I guess."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==5120){
                        this.battle.combatants[4].speech.text="You can't imagine the possibility\nof working together, can you?"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==5180){
                        this.battle.combatants[4].speech.text="Think about it.\nYou betrayed the Bulwarks,\nand fought every other faction."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==5240){
                        this.battle.combatants[4].speech.text="I was the only person who could've\nbeen on your side. And you\ndecided to fight against me as well."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==5300){
                        this.battle.combatants[4].speech.text="Guess you've had this coming."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=5360&&this.timer<5485){
                        this.battle.combatants[5].position.x+=15/2
                        this.battle.combatants[5].rate[0]+=15/2
                    }else if(this.timer==5485){
                        this.battle.combatants[5].speech.text="Sakura."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==5545){
                        this.battle.combatants[5].speech.text="The Wipers used to be the\nstrongest faction around.\nNot anymore. And I know why."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==5605){
                        this.battle.combatants[5].speech.text="It all got worse because of\nthe auction. That's how the\nentire faction collapsed in a day."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==5665){
                        this.battle.combatants[5].speech.text="And it was because of you.\nIf we had never received you,\nthe auction would have never happened."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==5725){
                        this.battle.combatants[5].speech.text="My plight, the death of everyone I knew,\nit was all because of you."
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer==5785){
                        this.battle.combatants[4].speech.text="You think I wanted to be here?\nYou were the ones who had me kidnapped\nand sold. I wanted none of this!"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==5845){
                        this.battle.combatants[5].speech.text="You'll pay!"
                        this.battle.combatants[5].speech.time=60
                    }else if(this.timer>=5875&&this.timer<5885){
                        this.battle.combatants[4].position.x-=25
                        this.battle.combatants[4].rate[0]+=25
                    }else if(this.timer>=5885&&this.timer<5895){
                        if(this.timer==5885){
                            this.battle.combatants[5].life=0
                        }
                        this.battle.combatants[4].position.x+=25
                        this.battle.combatants[4].rate[0]+=25
                    }else if(this.timer==5900){
                        this.battle.combatants[4].speech.text="You shouldn't have done that."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==5960){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=5960&&this.timer<6500&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x-=100
                        }
                        this.healParty()
                        this.battle.combatants[4]=new combatant(this.layer,750,450,99,31,1,4)
                        this.battle.combatants[4].life=1
                        this.timer=6500
                    }
                    if(this.timer>=6500&&this.timer<6550){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].position.x+=2
                                this.battle.combatants[g].rate[0]+=2
                            }
                        }
                    }else if(this.timer==6550){
                        this.battle.combatants[4].speech.text="Please, don't kill me! I'll do anything-"
                        this.battle.combatants[4].speech.time=30
                    }else if(this.timer==6580){
                        this.battle.combatants[3].speech.text="Quiet."
                        this.battle.combatants[3].speech.time=60
                    }else if(this.timer==6640){
                        this.battle.combatants[2].speech.text="Well, boys, we got her."
                        this.battle.combatants[2].speech.time=60
                        this.battle.characters.push(new combatant(this.layer,1050,450,88,0,1,100))
                        this.battle.characters.push(new combatant(this.layer,1000,450,61,0,1,101))
                        this.battle.characters.push(new combatant(this.layer,1100,450,61,0,1,102))
                    }else if(this.timer>=6700&&this.timer<6780){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100||this.timer<6760){
                                this.battle.characters[g].position.x-=5
                            }
                        }
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].position.x-=1.25
                                this.battle.combatants[g].rate[0]+=1.25
                            }
                        }
                    }else if(this.timer==6780){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Gentlemen."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==6840){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Return our possessions."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==6900){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Make this easy on yourselves."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==6960){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="I guess not."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==7020){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="We'll do it how you want it, then."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==7080){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=7080&&this.timer<8000&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.timer=8000
                    }else if(this.timer==8060){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Deal with our problems."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==8120){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=8120&&this.timer<9000&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.timer=9000
                    }else if(this.timer==9060){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Alright. I'll do it myself."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==9120){
                        transition.trigger=true
                        transition.scene='battle'
                    }else if(this.timer>=9120&&this.timer<10000&&!transition.trigger&&transition.anim>0){
                        this.battle.end()
                        this.timer=20000
                        this.healParty()
                        this.battle.combatants[4]=new combatant(this.layer,700,450,99,31,1,4)
                        this.battle.combatants[4].life=1
                        this.battle.characters=[]
                    }
                    if(this.timer>=10000&&this.timer<11000&&!transition.trigger&&transition.anim>0){
                        this.timer=11000
                        this.battle.combatants[4]=new combatant(this.layer,700,450,99,31,1,4)
                        for(g=0;g<4;g++){
                            this.battle.combatants[g].position.x-=100
                            this.battle.combatants[g].life=1
                        }
                    }
                    if(this.timer==11060){
                        this.battle.combatants[4].speech.text="I'm sorry that it\nhas to be this way."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==11120){
                        this.battle.combatants[4].speech.text="You'll be forgiven. All\nof you. Because I can\nunderstand what you want."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==11180){
                        this.battle.combatants[4].speech.text="There are no good people\non Orofos, I guess."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==11240){
                        this.battle.combatants[4].speech.text="Sorry."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=11300&&this.timer<11320){
                        this.battle.combatants[4].position.x-=25
                        this.battle.combatants[4].rate[0]+=25
                        for(g=0;g<4;g++){
                            if(this.timer==11318-g*4){
                                this.battle.combatants[g].life=0
                            }
                        }
                    }else if(this.timer>=11320&&this.timer<11340){
                        this.battle.combatants[4].position.x+=25
                        this.battle.combatants[4].rate[0]+=25
                    }else if(this.timer==11360){
                        this.battle.combatants[4].speech.text="You didn't deserve this.\nNone of us did."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer>=11420&&this.timer<11660){
                        this.battle.combatants[4].position.x+=2
                        this.battle.combatants[4].rate[0]+=2
                    }
                    if(this.timer>=15000&&this.timer<16000&&!transition.trigger&&transition.anim>0){
                        this.speed=1
                        this.battle.combatants[4]=new combatant(this.layer,750,450,99,31,1,4)
                        this.timer=16000
                        this.battle.combatants[5].type=0
                        this.battle.combatants[6].type=0
                        this.battle.combatants[7].type=0
                        this.battle.combatants[5].fade=0
                        this.battle.combatants[6].fade=0
                        this.battle.combatants[7].fade=0
                    }else if(this.timer==16030){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Fools."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer==16090){
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            if(this.battle.characters[g].id==100){
                                this.battle.characters[g].speech.text="Come on. We're going home."
                                this.battle.characters[g].speech.time=60
                            }
                        }
                    }else if(this.timer>=16150&&this.timer<16450){
                        this.battle.combatants[4].flip=1
                        this.battle.combatants[4].position.x+=2
                        this.battle.combatants[4].rate[0]+=2
                        for(g=0,lg=this.battle.characters.length;g<lg;g++){
                            this.battle.characters[g].flip=1
                            this.battle.characters[g].position.x+=2
                            this.battle.characters[g].rate[0]+=2
                        }
                    }
                    if(this.timer>=20030&&this.timer<20155){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            if(g<4){
                                this.battle.combatants[g].position.x+=2
                                this.battle.combatants[g].rate[0]+=2
                            }
                        }
                        this.ending=4
                    }else if(this.timer==20155){
                        this.battle.combatants[4].speech.text="There's no point in trying to escape now..."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==20215){
                        this.battle.combatants[3].speech.text="I guess not."
                        this.battle.combatants[3].speech.time=60
                    }else if(this.timer==20275){
                        this.battle.combatants[2].speech.text="Guess we won."
                        this.battle.combatants[2].speech.time=60
                    }else if(this.timer==20335){
                        this.battle.combatants[4].speech.text="But did you? I mean..."
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==20395){
                        this.battle.combatants[4].speech.text="What will you do now? Is there\nanything left for you? Am I the\nonly object of value to you?"
                        this.battle.combatants[4].speech.time=60
                    }else if(this.timer==20455){
                        this.battle.combatants[4].speech.text="So go on. Have your fun with me.\nJust know that once that\nwears off, it's all over."
                        this.battle.combatants[4].speech.time=60
                    }
                    if(this.timer>=20155&&this.timer<20755){
                        for(g=0,lg=this.battle.combatants.length;g<lg;g++){
                            this.battle.combatants[g].position.x-=2
                            this.battle.combatants[g].rate[0]+=2
                            this.battle.combatants[g].flip=-1
                        }
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
            case 15: case 28: case 33: case 38: case 53: case 59: case 64: case 68: case 74: case 120:
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
                            if(this.type==19){
                                this.give=this.battle.combatants[g].type
                                types.combatant[this.give].life*=2
                            }
                            this.battle.combatants[g].type=0
                            this.timer++
                        }
                    }
                }
            break
            case 46:
                if(this.timer==155){
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
                                    this.purchase.choice=2
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[2]].cost)
                                }else if(g==5&&this.battle.currency.money>=types.weapon[this.purchase.weapon[3]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[3]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=3
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[3]].cost)
                                }else if(g==6&&this.battle.currency.money>=types.weapon[this.purchase.weapon[4]].cost){
                                    this.purchase.select=0
                                    this.battle.currency.money-=types.weapon[this.purchase.weapon[4]].cost
                                    this.purchase.trigger=true
                                    this.purchase.choice=4
                                    this.spendParticle('-$'+types.weapon[this.purchase.weapon[4]].cost)
                                }else if(g==7){
                                    this.timer++
                                }
                            }
                        }
                    }
                }
            break
            case 47:
                if(this.timer==220){
                    for(g=0;g<2;g++){
                        if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+g*50},width:300,height:40})){
                            this.timer=1000+g*1000
                            this.purchase.choice=g
                        }
                    }
                }
            break
            case 83: case 89: case 94: case 100: case 106: case 113: 
                if(this.timer==90){
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
                                if(g==0){
                                    this.healPartyHalf()
                                }else if(g==1){
                                    this.refillPartyHalf()
                                }else if(g==2){
                                    this.purchase.select=0
                                    this.purchase.trigger=true
                                    this.purchase.choice=0
                                }else if(g==3){
                                    this.purchase.select=0
                                    this.purchase.trigger=true
                                    this.purchase.choice=1
                                }else if(g==4){
                                    this.timer++
                                }
                            }
                        }
                    }
                }
            break
            case 84:
                if(this.timer==155){
                    for(g=0;g<5;g++){
                        if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90+g*50},width:300,height:40})){
                            if(g==4){
                                this.timer++
                                this.battle.combatants[4].speech.text="Screw you!"
                                this.battle.combatants[4].speech.time=60
                            }else{
                                this.timer=1000
                                this.purchase.choice=g
                            }
                        }
                    }
                }
            break
            case 132:
                if(this.timer==1905){
                    if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90},width:300,height:40})){
                        this.timer=5000
                    }
                    if(pointInsideBox({position:inputs.rel},{position:{x:170,y:140},width:300,height:40})){
                        this.timer++
                        this.battle.characters.push(new combatant(this.layer,1050,450,88,0,1,100))
                        this.battle.characters.push(new combatant(this.layer,1000,450,61,0,1,101))
                        this.battle.characters.push(new combatant(this.layer,1100,450,61,0,1,102))
                    }
                }else if(this.timer==3030){
                    if(pointInsideBox({position:inputs.rel},{position:{x:170,y:90},width:300,height:40})){
                        this.timer++
                        this.ending=0
                    }
                    if(pointInsideBox({position:inputs.rel},{position:{x:170,y:140},width:300,height:40})){
                        this.timer=4000
                        this.ending=1
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
    healPartyHalf(){
        for(h=0,lh=this.battle.combatants.length;h<lh;h++){
            if(this.battle.combatants[h].team==0){
                this.battle.combatants[h].life=this.battle.combatants[h].base.life/2+this.battle.combatants[h].life/2
            }
        }
    }
    refillPartyHalf(){
        for(h=0,lh=this.battle.combatants.length;h<lh;h++){
            if(this.battle.combatants[h].team==0){
                for(i=0,li=this.battle.combatants[h].uses.length;i<li;i++){
                    this.battle.combatants[h].uses[i]=min(types.attack[this.battle.combatants[h].attacks[i]].uses,ceil(types.attack[this.battle.combatants[h].attacks[i]].uses/2+this.battle.combatants[h].uses[i]/2))
                }
            }
        }
    }
    genDead(){
        this.list=[9,10,11,12,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,63,64,65,66,77,78,79,85,93,94,95,96,100,10,102,103,106,107,108,109,111,112,113,114,116,117,118,119]
        for(h=0;h<4;h++){
            this.battle.combatants[4+h]=new combatant(this.layer,1050+h*200+random(-50,50),450+random(0,10),this.list[min(floor(random(0,this.list.length)),this.list.length-1)],0,1,4+h)
            this.battle.combatants[4+h].die()
        }
    }
}