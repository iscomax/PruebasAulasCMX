class Hero {
  		constructor() {
    		this.name = "Hero";
    		this.position = "00";
    		this.health = 100;
    		this.damage = 5;
    		this.experience = 0;
  		}
 

	}

	var hero = new Hero(); // ReferenceError
	console.log("Name:"+hero.name)
  console.log("Position:"+hero.position)
  console.log("Health:"+hero.health)
  console.log("Damage:"+hero.damage)
  console.log("Experience:"+hero.experience)