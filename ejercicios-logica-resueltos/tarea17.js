var mapIdiomas = new Map();
	
	mapIdiomas.set("english", 'Welcome')
	mapIdiomas.set("czech", 'Vitejte')
	mapIdiomas.set("danish", 'Velkomst')
	mapIdiomas.set("dutch",'Welkom')
	mapIdiomas.set("estonian", 'Tere tulemast')
	mapIdiomas.set("finnish", 'Tervetuloa')
	mapIdiomas.set("flemish", 'Welgekomen')
	mapIdiomas.set("french", 'Bienvenue')
	mapIdiomas.set("german", 'Willkommen')
	mapIdiomas.set("irish", 'Failte')
	mapIdiomas.set("italian", 'Benvenuto')
	mapIdiomas.set("latvian", 'Gaidits')
	mapIdiomas.set("lithuanian", 'Laukiamas')
	mapIdiomas.set("polish", 'Witamy')
	mapIdiomas.set("spanish", 'Bienvenido')
	mapIdiomas.set("swedish", 'Valkommen')
	mapIdiomas.set("welsh", 'Croeso')

	function welcome(language) {
		if(mapIdiomas.get(language)){
			return mapIdiomas.get(language)
		}else{
			return mapIdiomas.get("english")
		}
	}

	console.log("Idioma solicitado:english")
	console.log(welcome("english"));
	console.log("\n");
	console.log("Idioma solicitado:czech")
	console.log(welcome("czech"));
	console.log("\n");
	console.log("Idioma solicitado:aasdasd")
	console.log(welcome("aasdasd"));
	console.log("\n");
	console.log("Idioma solicitado:portugues")
	console.log(welcome("portugues"));
	console.log("\n");
	console.log("Idioma solicitado:danish")
	console.log(welcome("danish"));
	console.log("\n");
	console.log("Idioma solicitado:dutch")
	console.log(welcome("dutch"));
	console.log("\n");
	console.log("Idioma solicitado:estonian")
	console.log(welcome("estonian"));
	console.log("\n");
	console.log("Idioma solicitado:finnish")
	console.log(welcome("finnish"));
	console.log("\n");
	console.log("Idioma solicitado:flemish")
	console.log(welcome("flemish"));
	console.log("\n");
	console.log("Idioma solicitado:french")
	console.log(welcome("french"));
	console.log("\n");
	console.log("Idioma solicitado:german")
	console.log(welcome("german"));
	console.log("\n");
	console.log("Idioma solicitado:irish")
	console.log(welcome("irish"));
	console.log("\n");
	console.log("Idioma solicitado:italian")
		console.log(welcome("italian"));
	console.log("\n");
	console.log("Idioma solicitado:latvian")
		console.log(welcome("latvian"));
	console.log("\n");
	console.log("Idioma solicitado:lithuanian")
		console.log(welcome("lithuanian"));
	console.log("\n");
	console.log("Idioma solicitado:polish")
		console.log(welcome("polish"));
	console.log("\n");
	console.log("Idioma solicitado:spanish")
		console.log(welcome("spanish"));
	console.log("\n");
	console.log("Idioma solicitado:swedish")
		console.log(welcome("swedish"));
	console.log("\n");
	console.log("Idioma solicitado:welsh")
		console.log(welcome("welsh"));
	console.log("\n");
