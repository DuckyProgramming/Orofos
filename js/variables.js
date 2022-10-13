types={
    combatant:[
        {name:'',life:0,speed:0,damage:0,attacks:[],height:0},
        {name:'Bill',life:24,speed:11,damage:2,attacks:[27,28,29],height:75},
        {name:'Tom',life:40,speed:14,damage:1,attacks:[30,31,32],height:75},
        {name:'Jon',life:30,speed:9,damage:1,attacks:[33,34,35],height:75},
        {name:'Human',life:20,speed:10,damage:1,attacks:[1],height:75},
        {name:'Human',life:20,speed:10,damage:1,attacks:[1],height:75},
        {name:'Human',life:20,speed:10,damage:1,attacks:[1],height:75},
        {name:'Human',life:20,speed:10,damage:1,attacks:[1],height:75},
        {name:'Duckit',life:16,speed:6,damage:1,attacks:[12,13,14],height:60},
        {name:'Human',life:20,speed:10,damage:1,attacks:[1],height:75},
        {name:'Fat Human',life:50,speed:15,damage:1,attacks:[5],height:66},
        {name:'Long Human',life:30,speed:8,damage:1,attacks:[4],height:84},
        {name:'Big Human',life:60,speed:12,damage:2,attacks:[2,7],height:90},
        {name:'Management Soldier',life:240,speed:9,damage:2,attacks:[],height:78},
        {name:'Management Officer',life:150,speed:9,damage:2,attacks:[],height:78},
    ],weapon:[
        {name:'Unarmed',damage:2,attacks:[0]},
        {name:'Stick',damage:4,attacks:[8]},
        {name:'Pistol',damage:4,attacks:[8,9]},
        {name:'Lighter',damage:1,attacks:[8,10]},
        {name:'Taser',damage:1,attacks:[8,11]},
        {name:'Shotgun',damage:6,attacks:[8,15]},
        {name:'Sniper',damage:5,attacks:[8,9,16]},
        {name:'Metal Beam',damage:8,attacks:[8,17]},
        {name:'Submachine',damage:3,attacks:[8,18]},
        {name:'Management CR-12',damage:4,attacks:[19]},
        {name:'Management HVM-5',damage:10,attacks:[20]},
        {name:'Management FBP-34',damage:20,attacks:[21]},
        {name:'Bandaid',damage:1,attacks:[8,22]},
        {name:'Baseball Bat',damage:6,attacks:[8,23]},
    ],attack:[
        {name:'Punch'                   ,damage:1   ,target:0,class:0,uses:0 ,accuracy:1   },
        {name:'Nerf Damage'             ,damage:0   ,target:0,class:1,uses:0 ,accuracy:1   },
        {name:'Nerf Defense'            ,damage:0   ,target:0,class:1,uses:0 ,accuracy:1   },
        {name:'Nerf Speed'              ,damage:0   ,target:0,class:1,uses:0 ,accuracy:1   },
        {name:'Buff Damage'             ,damage:0   ,target:1,class:1,uses:0 ,accuracy:1   },
        {name:'Buff Defense'            ,damage:0   ,target:1,class:1,uses:0 ,accuracy:1   },
        {name:'Buff Speed'              ,damage:0   ,target:1,class:1,uses:0 ,accuracy:1   },
        {name:'Shockwave'               ,damage:0.5 ,target:2,class:0,uses:0 ,accuracy:1   },
        {name:'Whack'                   ,damage:1   ,target:0,class:0,uses:0 ,accuracy:1   },
        {name:'Shoot'                   ,damage:2   ,target:0,class:2,uses:10,accuracy:0.9 },
        {name:'Ignite'                  ,damage:1   ,target:0,class:3,uses:20,accuracy:1   },
        {name:'Stun'                    ,damage:1   ,target:0,class:3,uses:5 ,accuracy:1   },
        {name:'Slap'                    ,damage:3   ,target:0,class:0,uses:0 ,accuracy:1   },
        {name:'Slap Parade'             ,damage:2   ,target:2,class:0,uses:20,accuracy:1   },
        {name:'Thunder Slap'            ,damage:4   ,target:0,class:0,uses:10,accuracy:1   },
        {name:'Shotgun'                 ,damage:2   ,target:0,class:2,uses:5 ,accuracy:0.8 },
        {name:'Snipe'                   ,damage:3   ,target:0,class:2,uses:5 ,accuracy:1   },
        {name:'Smash'                   ,damage:1.5 ,target:0,class:0,uses:5 ,accuracy:0.9 },
        {name:'Sustain Fire'            ,damage:2   ,target:0,class:2,uses:5 ,accuracy:0.6 },
        {name:'Overwhelming Force'      ,damage:1   ,target:0,class:2,uses:20,accuracy:0.4 },
        {name:'Concentrated Elimination',damage:4   ,target:0,class:2,uses:50,accuracy:1   },
        {name:'Perfected Strike'        ,damage:6   ,target:0,class:2,uses:10,accuracy:1   },
        {name:'Heal'                    ,damage:3   ,target:3,class:0,uses:10,accuracy:1   },
        {name:'Combo'                   ,damage:1   ,target:0,class:0,uses:20,accuracy:1   },
        {name:'Ally Buff Damage'        ,damage:0   ,target:3,class:1,uses:0 ,accuracy:1   },
        {name:'Ally Buff Defense'       ,damage:0   ,target:3,class:1,uses:0 ,accuracy:1   },
        {name:'Ally Buff Speed'         ,damage:0   ,target:3,class:1,uses:0 ,accuracy:1   },
        {name:'Lunch'                   ,damage:2   ,target:4,class:1,uses:20,accuracy:1   },
        {name:'Protection'              ,damage:1   ,target:3,class:1,uses:5 ,accuracy:1   },
        {name:'Cheap Shot'              ,damage:3   ,target:0,class:2,uses:5 ,accuracy:0.8 },
        {name:'Charge'                  ,damage:6   ,target:5,class:0,uses:10,accuracy:1   },
        {name:'Enlarge'                 ,damage:0   ,target:1,class:1,uses:10,accuracy:1   },
        {name:'Mixup'                   ,damage:5   ,target:2,class:0,uses:5 ,accuracy:1   },
        {name:'Verbal Assault'          ,damage:4   ,target:0,class:0,uses:20,accuracy:0.8 },
        {name:'Supply'                  ,damage:2   ,target:3,class:1,uses:5 ,accuracy:1   },
        {name:'Invigorate'              ,damage:3   ,target:3,class:1,uses:5 ,accuracy:1   },
    ]
}
stage={scene:'battle',scale:1}
graphics={main:0,backgrounds:[]}
transition={trigger:false,anim:0,scene:stage.scene}
inputs={mouse:{x:0,y:0},rel:{x:0,y:0},keys:[[false,false,false,false],[false,false,false,false]]}
entities={particles:[]}
run={fore:[]}
dev={id:false}
combatants=[
    {id:1,weapon:6,team:0},
    {id:2,weapon:5,team:0},
    {id:3,weapon:3,team:0},
    {id:0,weapon:4,team:0},
    {id:9,weapon:13,team:1},
    {id:10,weapon:13,team:1},
    {id:11,weapon:13,team:1},
    {id:12,weapon:13,team:1},
]
a=0;b=0;c=0;d=0;e=0;f=0;g=0;h=0;i=0;j=0;k=0;l=0;m=0;n=0;o=0;p=0
la=0;lb=0;lc=0;ld=0;le=0;lf=0;lg=0;lh=0;li=0;lj=0;lk=0;ll=0;lm=0;ln=0;lo=0;lp=0