types={
    combatant:[
        {name:'',life:0,speed:0,damage:0,attacks:[]},
        {name:'Human',life:10,speed:10,damage:1,attacks:[1]},
    ],weapon:[
        {name:'Unarmed',damage:1,attacks:[0]},
        {name:'Stick',damage:2,attacks:[8]},
        {name:'Pistol',damage:2,attacks:[8,9]},
    ],attack:[
        {name:'Punch',damage:1,target:0,class:0,uses:0},
        {name:'Nerf\nDamage',damage:0,target:0,class:1,uses:0},
        {name:'Nerf\nDefense',damage:0,target:0,class:1,uses:0},
        {name:'Nerf\nSpeed',damage:0,target:0,class:1,uses:0},
        {name:'Buff\nDamage',damage:0,target:1,class:1,uses:0},
        {name:'Buff\nDefense',damage:0,target:1,class:1,uses:0},
        {name:'Buff\nSpeed',damage:0,target:1,class:1,uses:0},
        {name:'Attack\nAll',damage:1,target:2,class:0},
        {name:'Whack',damage:1,target:0,class:0,uses:0},
        {name:'Shoot',damage:2,target:0,class:2,uses:1},
    ]
}
stage={scene:'battle',scale:1}
graphics={main:0,backgrounds:[]}
transition={trigger:false,anim:0,scene:stage.scene}
inputs={mouse:{x:0,y:0},rel:{x:0,y:0},keys:[[false,false,false,false],[false,false,false,false]]}
entities={particles:[]}
run={fore:[]}
combatants=[
    {id:0,weapon:0,team:0},
    {id:0,weapon:0,team:0},
    {id:1,weapon:2,team:0},
    {id:1,weapon:2,team:0},
    {id:1,weapon:2,team:1},
    {id:1,weapon:2,team:1},
    {id:0,weapon:0,team:1},
    {id:0,weapon:0,team:1},
]
a=0;b=0;c=0;d=0;e=0;f=0;g=0;h=0;i=0;j=0;k=0;l=0;m=0;n=0;o=0;p=0
la=0;lb=0;lc=0;ld=0;le=0;lf=0;lg=0;lh=0;li=0;lj=0;lk=0;ll=0;lm=0;ln=0;lo=0;lp=0