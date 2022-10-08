function setupLayer(layer){
    layer.angleMode(DEGREES)
	layer.textAlign(CENTER,CENTER)
	layer.rectMode(CENTER)
	layer.colorMode(RGB,255,255,255,1)
}
function setupBattle(combatants){
	for(i=0,li=combatants.length;i<li;i++){
		combatants[i].position.x=50+i*100
		combatants[i].position.y=400
		combatants[i].life=entityTypes.combatant[combatants[i].id].life
		combatants[i].base={life:combatants[i].life}
		if(combatants[i].life>0){
			combatants[i].fade=1
		}else{
			combatants[i].fade=0
		}
	}
}
function displayLife(layer,combatant){
	layer.translate(combatant.position.x,combatant.position.y)
	layer.noStroke();
	layer.fill(0,combatant.fade);
	layer.rect(0,20,62,10,5);
	layer.fill(150,combatant.fade);
	layer.rect(0,20,60,8,4);
	layer.fill(min(255,510-max(0,combatant.life)/combatant.base.life*510)-max(0,5-max(0,combatant.life)/combatant.base.life*30)*25,max(0,combatant.life)/combatant.base.life*510,0,combatant.fade);
	layer.rect((max(0,combatant.life)/combatant.base.life)*30-30,20,(max(0,combatant.life)/combatant.base.life)*60,min((max(0,combatant.life)/combatant.base.life)*120,8),4);
	layer.fill(0,combatant.fade);
	layer.textSize(8);
	layer.text(max(0,ceil(combatant.life))+"/"+max(0,ceil(combatant.base.life)),0,21);
	layer.translate(-combatant.position.x,-combatant.position.y)
}
function displayBattle(layer,combatants){
	for(i=0,li=combatants.length;i<li;i++){
		displayLife(layer,combatants[i])
	}
}