class battle{
	constructor(layer,combatants){
		this.layer=layer
		this.combatants=[]
		for(e=0,le=combatants.length;e<le;e++){
			this.combatants.push(new combatant(this.layer,e*100+50,400,combatants[e].id,combatants[e].team))
		}
	}
	display(){
		for(e=0,le=this.combatants.length;e<le;e++){
			this.combatants[e].display()
			this.combatants[e].update()
			this.combatants[e].displayLife()
		}
	}
	update(){

	}
}