const ricerca=()=>{
	var name=document.getElementById("testo").value;
	var type=document.getElementById("types").value;
	var weak=document.getElementById("weakness").value;
	var contPoke=document.getElementById("contPokedex");
	while(contPoke.firstChild){
        contPoke.removeChild(contPoke.firstChild);
    }
	if(name==""){
		if(type=="-----"){
			if(weak=="-----"){
				console.log("La ricerca è vuota");
				const error= document.createElement("h2");
				error.innerText= "Non hai scelto niente";
				contPoke.appendChild(error);
			}
			else{
				console.log("Cerco solo la debolezza");
				for(let i=0; i<pokedex.length; i++){
					console.log(pokedex.length)
					const pokemon=pokedex[i];
					const weaknesses=pokemon.debolezze;
					const tipi=pokemon.tipo;
					for(let j=0; j<weaknesses.length; j++){
						const weakness=weaknesses[j];
						if(weakness.includes(weak)){
							const container=document.createElement("div");
							container.className="col-12 col-md-4 col-lg-2 pokemon-container";
							const imgElement=document.createElement("img");
							imgElement.src=pokemon.img_url;
							const numeroElement=document.createElement("p");
							numeroElement.textContent="N°: " + pokemon.numero;
							const nomeElement=document.createElement("h3");
							nomeElement.textContent=pokemon.nome;
							const faseEvo=document.createElement("p");
							faseEvo.textContent="Stadio: " + pokemon.stadio_evolutivo;
							const tipoContainer1=document.createElement("div");
							const tipoElement1=document.createElement("span");
							tipoElement1.textContent=tipi[0];
							if(tipi[0]==="Normale"){
								tipoElement1.className="backNormal";
							} else if(tipi[0]==="Coleottero"){
								tipoElement1.className="backBug";
							} else if(tipi[0]==="Drago"){
								tipoElement1.className="backDragon";
							} else if(tipi[0]==="Folletto"){
								tipoElement1.className="backFairy";
							} else if(tipi[0]==="Fuoco"){
								tipoElement1.className="backFire";
							} else if(tipi[0]==="Spettro"){
								tipoElement1.className="backGhost";
							} else if(tipi[0]==="Terra"){
								tipoElement1.className="backGround";
							} else if(tipi[0]==="Psico"){
								tipoElement1.className="backPsychic";
							} else if(tipi[0]==="Acciaio"){
								tipoElement1.className="backSteel";
							} else if(tipi[0]==="Buio"){
								tipoElement1.className="backDark";
							} else if(tipi[0]==="Elettro"){
								tipoElement1.className="backElectric";
							} else if(tipi[0]==="Lotta"){
								tipoElement1.className="backFighting";
							} else if(tipi[0]==="Volante"){
								tipoElement1.className="backFlying";
							} else if(tipi[0]==="Erba"){
								tipoElement1.className="backGrass";
							} else if(tipi[0]==="Ghiaccio"){
								tipoElement1.className="backIce";
							} else if(tipi[0]==="Veleno"){
								tipoElement1.className="backPoison";
							} else if(tipi[0]==="Roccia"){
								tipoElement1.className="backRock";
							} else{
								tipoElement1.className="backWater";
							}
							const tipoContainer2=document.createElement("div");
							const tipoElement2=document.createElement("span");
							if(tipi.length>1){
								tipoElement2.textContent=tipi[1];
								if(tipi[1]==="Normale"){
									tipoElement2.className="backNormal";
								} else if(tipi[1]==="Coleottero"){
									tipoElement2.className="backBug";
								} else if(tipi[1]==="Drago"){
									tipoElement2.className="backDragon";
								} else if(tipi[1]==="Folletto"){
									tipoElement2.className="backFairy";
								} else if(tipi[1]==="Fuoco"){
									tipoElement2.className="backFire";
								} else if(tipi[1]==="Spettro"){
									tipoElement2.className="backGhost";
								} else if(tipi[1]==="Terra"){
									tipoElement2.className="backGround";
								} else if(tipi[1]==="Psico"){
									tipoElement2.className="backPsychic";
								} else if(tipi[1]==="Acciaio"){
									tipoElement2.className="backSteel";
								} else if(tipi[1]==="Buio"){
									tipoElement2.className="backDark";
								} else if(tipi[1]==="Elettro"){
									tipoElement2.className="backElectric";
								} else if(tipi[1]==="Lotta"){
									tipoElement2.className="backFighting";
								} else if(tipi[1]==="Volante"){
									tipoElement2.className="backFlying";
								} else if(tipi[1]==="Erba"){
									tipoElement2.className="backGrass";
								} else if(tipi[1]==="Ghiaccio"){
									tipoElement2.className="backIce";
								} else if(tipi[1]==="Veleno"){
									tipoElement2.className="backPoison";
								} else if(tipi[1]==="Roccia"){
									tipoElement2.className="backRock";
								} else{
									tipoElement2.className="backWater";
								}
							}

							container.appendChild(imgElement);
							container.appendChild(numeroElement);
							container.appendChild(nomeElement);
							container.appendChild(faseEvo);
							container.appendChild(tipoContainer1);
							tipoContainer1.appendChild(tipoElement1);
							container.appendChild(tipoContainer2);
							tipoContainer2.appendChild(tipoElement2);
							contPoke.appendChild(container);
						}
					}
				}
			}
		} else{
			if(weak=="-----"){
				console.log("Cerco solo il tipo");
				for(let i=0; i<pokedex.length; i++){
					const pokemon=pokedex[i];
					const tipi=pokemon.tipo;
					if(tipi[0]===type || tipi[1]===type){
						const container=document.createElement("div");
						container.className="col-12 col-md-4 col-lg-2 pokemon-container";
						const imgElement=document.createElement("img");
						imgElement.src=pokemon.img_url;
						const numeroElement=document.createElement("p");
						numeroElement.textContent="N°: " + pokemon.numero;
						const nomeElement=document.createElement("h3");
						nomeElement.textContent=pokemon.nome;
						const faseEvo=document.createElement("p");
						faseEvo.textContent="Stadio: " + pokemon.stadio_evolutivo;
						const tipoContainer1=document.createElement("div");
						const tipoElement1=document.createElement("span");
						tipoElement1.textContent=tipi[0];
						if(tipi[0]==="Normale"){
							tipoElement1.className="backNormal";
						} else if(tipi[0]==="Coleottero"){
							tipoElement1.className="backBug";
						} else if(tipi[0]==="Drago"){
							tipoElement1.className="backDragon";
						} else if(tipi[0]==="Folletto"){
							tipoElement1.className="backFairy";
						} else if(tipi[0]==="Fuoco"){
							tipoElement1.className="backFire";
						} else if(tipi[0]==="Spettro"){
							tipoElement1.className="backGhost";
						} else if(tipi[0]==="Terra"){
							tipoElement1.className="backGround";
						} else if(tipi[0]==="Psico"){
							tipoElement1.className="backPsychic";
						} else if(tipi[0]==="Acciaio"){
							tipoElement1.className="backSteel";
						} else if(tipi[0]==="Buio"){
							tipoElement1.className="backDark";
						} else if(tipi[0]==="Elettro"){
							tipoElement1.className="backElectric";
						} else if(tipi[0]==="Lotta"){
							tipoElement1.className="backFighting";
						} else if(tipi[0]==="Volante"){
							tipoElement1.className="backFlying";
						} else if(tipi[0]==="Erba"){
							tipoElement1.className="backGrass";
						} else if(tipi[0]==="Ghiaccio"){
							tipoElement1.className="backIce";
						} else if(tipi[0]==="Veleno"){
							tipoElement1.className="backPoison";
						} else if(tipi[0]==="Roccia"){
							tipoElement1.className="backRock";
						} else{
							tipoElement1.className="backWater";
						}
						const tipoContainer2=document.createElement("div");
						const tipoElement2=document.createElement("span");
						if(tipi.length>1){
							tipoElement2.textContent=tipi[1];
							if(tipi[1]==="Normale"){
								tipoElement2.className="backNormal";
							} else if(tipi[1]==="Coleottero"){
								tipoElement2.className="backBug";
							} else if(tipi[1]==="Drago"){
								tipoElement2.className="backDragon";
							} else if(tipi[1]==="Folletto"){
								tipoElement2.className="backFairy";
							} else if(tipi[1]==="Fuoco"){
								tipoElement2.className="backFire";
							} else if(tipi[1]==="Spettro"){
								tipoElement2.className="backGhost";
							} else if(tipi[1]==="Terra"){
								tipoElement2.className="backGround";
							} else if(tipi[1]==="Psico"){
								tipoElement2.className="backPsychic";
							} else if(tipi[1]==="Acciaio"){
								tipoElement2.className="backSteel";
							} else if(tipi[1]==="Buio"){
								tipoElement2.className="backDark";
							} else if(tipi[1]==="Elettro"){
								tipoElement2.className="backElectric";
							} else if(tipi[1]==="Lotta"){
								tipoElement2.className="backFighting";
							} else if(tipi[1]==="Volante"){
								tipoElement2.className="backFlying";
							} else if(tipi[1]==="Erba"){
								tipoElement2.className="backGrass";
							} else if(tipi[1]==="Ghiaccio"){
								tipoElement2.className="backIce";
							} else if(tipi[1]==="Veleno"){
								tipoElement2.className="backPoison";
							} else if(tipi[1]==="Roccia"){
								tipoElement2.className="backRock";
							} else{
								tipoElement2.className="backWater";
							}
						}

						container.appendChild(imgElement);
						container.appendChild(numeroElement);
						container.appendChild(nomeElement);
						container.appendChild(faseEvo);
						container.appendChild(tipoContainer1);
						tipoContainer1.appendChild(tipoElement1);
						container.appendChild(tipoContainer2);
						tipoContainer2.appendChild(tipoElement2);
						contPoke.appendChild(container);
					}
				}
			} else{
				console.log("Cerco il tipo e la debolezza");
				for(let i=0; i<pokedex.length; i++){
					const pokemon=pokedex[i];
					const weaknesses=pokemon.debolezze;
					const tipi=pokemon.tipo;
					if(tipi[0]===type || tipi[1]===type){
						for(let k=0; k<weaknesses.length; k++){
							const weakness=weaknesses[k];
							if(weakness.includes(weak)){
								const container=document.createElement("div");
								container.className="col-12 col-md-4 col-lg-2 pokemon-container";
								const imgElement=document.createElement("img");
								imgElement.src=pokemon.img_url;
								const numeroElement=document.createElement("p");
								numeroElement.textContent="N°: " + pokemon.numero;
								const nomeElement=document.createElement("h3");
								nomeElement.textContent=pokemon.nome;
								const faseEvo=document.createElement("p");
								faseEvo.textContent="Stadio: " + pokemon.stadio_evolutivo;
								const tipoContainer1=document.createElement("div");
								const tipoElement1=document.createElement("span");
								tipoElement1.textContent=tipi[0];
								if(tipi[0]==="Normale"){
									tipoElement1.className="backNormal";
								} else if(tipi[0]==="Coleottero"){
									tipoElement1.className="backBug";
								} else if(tipi[0]==="Drago"){
									tipoElement1.className="backDragon";
								} else if(tipi[0]==="Folletto"){
									tipoElement1.className="backFairy";
								} else if(tipi[0]==="Fuoco"){
									tipoElement1.className="backFire";
								} else if(tipi[0]==="Spettro"){
									tipoElement1.className="backGhost";
								} else if(tipi[0]==="Terra"){
									tipoElement1.className="backGround";
								} else if(tipi[0]==="Psico"){
									tipoElement1.className="backPsychic";
								} else if(tipi[0]==="Acciaio"){
									tipoElement1.className="backSteel";
								} else if(tipi[0]==="Buio"){
									tipoElement1.className="backDark";
								} else if(tipi[0]==="Elettro"){
									tipoElement1.className="backElectric";
								} else if(tipi[0]==="Lotta"){
									tipoElement1.className="backFighting";
								} else if(tipi[0]==="Volante"){
									tipoElement1.className="backFlying";
								} else if(tipi[0]==="Erba"){
									tipoElement1.className="backGrass";
								} else if(tipi[0]==="Ghiaccio"){
									tipoElement1.className="backIce";
								} else if(tipi[0]==="Veleno"){
									tipoElement1.className="backPoison";
								} else if(tipi[0]==="Roccia"){
									tipoElement1.className="backRock";
								} else{
									tipoElement1.className="backWater";
								}
								const tipoContainer2=document.createElement("div");
								const tipoElement2=document.createElement("span");
								if(tipi.length>1){
									tipoElement2.textContent=tipi[1];
									if(tipi[1]==="Normale"){
										tipoElement2.className="backNormal";
									} else if(tipi[1]==="Coleottero"){
										tipoElement2.className="backBug";
									} else if(tipi[1]==="Drago"){
										tipoElement2.className="backDragon";
									} else if(tipi[1]==="Folletto"){
										tipoElement2.className="backFairy";
									} else if(tipi[1]==="Fuoco"){
										tipoElement2.className="backFire";
									} else if(tipi[1]==="Spettro"){
										tipoElement2.className="backGhost";
									} else if(tipi[1]==="Terra"){
										tipoElement2.className="backGround";
									} else if(tipi[1]==="Psico"){
										tipoElement2.className="backPsychic";
									} else if(tipi[1]==="Acciaio"){
										tipoElement2.className="backSteel";
									} else if(tipi[1]==="Buio"){
										tipoElement2.className="backDark";
									} else if(tipi[1]==="Elettro"){
										tipoElement2.className="backElectric";
									} else if(tipi[1]==="Lotta"){
										tipoElement2.className="backFighting";
									} else if(tipi[1]==="Volante"){
										tipoElement2.className="backFlying";
									} else if(tipi[1]==="Erba"){
										tipoElement2.className="backGrass";
									} else if(tipi[1]==="Ghiaccio"){
										tipoElement2.className="backIce";
									} else if(tipi[1]==="Veleno"){
										tipoElement2.className="backPoison";
									} else if(tipi[1]==="Roccia"){
										tipoElement2.className="backRock";
									} else{
										tipoElement2.className="backWater";
									}
								}

								container.appendChild(imgElement);
								container.appendChild(numeroElement);
								container.appendChild(nomeElement);
								container.appendChild(faseEvo);
								container.appendChild(tipoContainer1);
								tipoContainer1.appendChild(tipoElement1);
								container.appendChild(tipoContainer2);
								tipoContainer2.appendChild(tipoElement2);
								contPoke.appendChild(container);
							}
						}
					}
				}
			}
		}
	} else{
		if(type=="-----"){
			if(weak=="-----"){
				console.log("Cerco solo il nome");
				for(let i=0; i<pokedex.length; i++){
					const pokemon=pokedex[i];
					const nomi=pokemon.nome;
					const tipi=pokemon.tipo;
					let minusc=nomi.toLowerCase();
					if(minusc.includes(name)){
						const container=document.createElement("div");
						container.className="col-12 col-md-4 col-lg-2 pokemon-container";
						const imgElement=document.createElement("img");
						imgElement.src=pokemon.img_url;
						const numeroElement=document.createElement("p");
						numeroElement.textContent="N°: " + pokemon.numero;
						const nomeElement=document.createElement("h3");
						nomeElement.textContent=pokemon.nome;
						const faseEvo=document.createElement("p");
						faseEvo.textContent="Stadio: " + pokemon.stadio_evolutivo;
						const tipoContainer1=document.createElement("div");
						const tipoElement1=document.createElement("span");
						tipoElement1.textContent=tipi[0];
						if(tipi[0]==="Normale"){
							tipoElement1.className="backNormal";
						} else if(tipi[0]==="Coleottero"){
							tipoElement1.className="backBug";
						} else if(tipi[0]==="Drago"){
							tipoElement1.className="backDragon";
						} else if(tipi[0]==="Folletto"){
							tipoElement1.className="backFairy";
						} else if(tipi[0]==="Fuoco"){
							tipoElement1.className="backFire";
						} else if(tipi[0]==="Spettro"){
							tipoElement1.className="backGhost";
						} else if(tipi[0]==="Terra"){
							tipoElement1.className="backGround";
						} else if(tipi[0]==="Psico"){
							tipoElement1.className="backPsychic";
						} else if(tipi[0]==="Acciaio"){
							tipoElement1.className="backSteel";
						} else if(tipi[0]==="Buio"){
							tipoElement1.className="backDark";
						} else if(tipi[0]==="Elettro"){
							tipoElement1.className="backElectric";
						} else if(tipi[0]==="Lotta"){
							tipoElement1.className="backFighting";
						} else if(tipi[0]==="Volante"){
							tipoElement1.className="backFlying";
						} else if(tipi[0]==="Erba"){
							tipoElement1.className="backGrass";
						} else if(tipi[0]==="Ghiaccio"){
							tipoElement1.className="backIce";
						} else if(tipi[0]==="Veleno"){
							tipoElement1.className="backPoison";
						} else if(tipi[0]==="Roccia"){
							tipoElement1.className="backRock";
						} else{
							tipoElement1.className="backWater";
						}
						const tipoContainer2=document.createElement("div");
						const tipoElement2=document.createElement("span");
						if(tipi.length>1){
							tipoElement2.textContent=tipi[1];
							if(tipi[1]==="Normale"){
								tipoElement2.className="backNormal";
							} else if(tipi[1]==="Coleottero"){
								tipoElement2.className="backBug";
							} else if(tipi[1]==="Drago"){
								tipoElement2.className="backDragon";
							} else if(tipi[1]==="Folletto"){
								tipoElement2.className="backFairy";
							} else if(tipi[1]==="Fuoco"){
								tipoElement2.className="backFire";
							} else if(tipi[1]==="Spettro"){
								tipoElement2.className="backGhost";
							} else if(tipi[1]==="Terra"){
								tipoElement2.className="backGround";
							} else if(tipi[1]==="Psico"){
								tipoElement2.className="backPsychic";
							} else if(tipi[1]==="Acciaio"){
								tipoElement2.className="backSteel";
							} else if(tipi[1]==="Buio"){
								tipoElement2.className="backDark";
							} else if(tipi[1]==="Elettro"){
								tipoElement2.className="backElectric";
							} else if(tipi[1]==="Lotta"){
								tipoElement2.className="backFighting";
							} else if(tipi[1]==="Volante"){
								tipoElement2.className="backFlying";
							} else if(tipi[1]==="Erba"){
								tipoElement2.className="backGrass";
							} else if(tipi[1]==="Ghiaccio"){
								tipoElement2.className="backIce";
							} else if(tipi[1]==="Veleno"){
								tipoElement2.className="backPoison";
							} else if(tipi[1]==="Roccia"){
								tipoElement2.className="backRock";
							} else{
								tipoElement2.className="backWater";
							}
						}
						container.appendChild(imgElement);
						container.appendChild(numeroElement);
						container.appendChild(nomeElement);
						container.appendChild(faseEvo);
						container.appendChild(tipoContainer1);
						tipoContainer1.appendChild(tipoElement1);
						container.appendChild(tipoContainer2);
						tipoContainer2.appendChild(tipoElement2);
						contPoke.appendChild(container);
					}
				}
			} else{
				console.log("Cerco il nome e la debolezza");
				for(let i=0; i<pokedex.length; i++){
					const pokemon=pokedex[i];
					const weaknesses=pokemon.debolezze;
					const nomi=pokemon.nome;
					const tipi=pokemon.tipo;
					let minusc=nomi.toLowerCase();
					if(minusc.includes(name)){
						for(let j=0; j<weaknesses.length; j++){
							const weakness=weaknesses[j];
							if(weakness==weak){
							const container=document.createElement("div");
							container.className="col-12 col-md-4 col-lg-2 pokemon-container";
							const imgElement=document.createElement("img");
							imgElement.src=pokemon.img_url;
							const numeroElement=document.createElement("p");
							numeroElement.textContent="N°: " + pokemon.numero;
							const nomeElement=document.createElement("h3");
							nomeElement.textContent=pokemon.nome;
							const faseEvo=document.createElement("p");
							faseEvo.textContent="Stadio: " + pokemon.stadio_evolutivo;
							const tipoContainer1=document.createElement("div");
							const tipoElement1=document.createElement("span");
							tipoElement1.textContent=tipi[0];
							if(tipi[0]==="Normale"){
								tipoElement1.className="backNormal";
							} else if(tipi[0]==="Coleottero"){
								tipoElement1.className="backBug";
							} else if(tipi[0]==="Drago"){
								tipoElement1.className="backDragon";
							} else if(tipi[0]==="Folletto"){
								tipoElement1.className="backFairy";
							} else if(tipi[0]==="Fuoco"){
								tipoElement1.className="backFire";
							} else if(tipi[0]==="Spettro"){
								tipoElement1.className="backGhost";
							} else if(tipi[0]==="Terra"){
								tipoElement1.className="backGround";
							} else if(tipi[0]==="Psico"){
								tipoElement1.className="backPsychic";
							} else if(tipi[0]==="Acciaio"){
								tipoElement1.className="backSteel";
							} else if(tipi[0]==="Buio"){
								tipoElement1.className="backDark";
							} else if(tipi[0]==="Elettro"){
								tipoElement1.className="backElectric";
							} else if(tipi[0]==="Lotta"){
								tipoElement1.className="backFighting";
							} else if(tipi[0]==="Volante"){
								tipoElement1.className="backFlying";
							} else if(tipi[0]==="Erba"){
								tipoElement1.className="backGrass";
							} else if(tipi[0]==="Ghiaccio"){
								tipoElement1.className="backIce";
							} else if(tipi[0]==="Veleno"){
								tipoElement1.className="backPoison";
							} else if(tipi[0]==="Roccia"){
								tipoElement1.className="backRock";
							} else{
								tipoElement1.className="backWater";
							}
							const tipoContainer2=document.createElement("div");
							const tipoElement2=document.createElement("span");
							if(tipi.length>1){
								tipoElement2.textContent=tipi[1];
								if(tipi[1]==="Normale"){
									tipoElement2.className="backNormal";
								} else if(tipi[1]==="Coleottero"){
									tipoElement2.className="backBug";
								} else if(tipi[1]==="Drago"){
									tipoElement2.className="backDragon";
								} else if(tipi[1]==="Folletto"){
									tipoElement2.className="backFairy";
								} else if(tipi[1]==="Fuoco"){
									tipoElement2.className="backFire";
								} else if(tipi[1]==="Spettro"){
									tipoElement2.className="backGhost";
								} else if(tipi[1]==="Terra"){
									tipoElement2.className="backGround";
								} else if(tipi[1]==="Psico"){
									tipoElement2.className="backPsychic";
								} else if(tipi[1]==="Acciaio"){
									tipoElement2.className="backSteel";
								} else if(tipi[1]==="Buio"){
									tipoElement2.className="backDark";
								} else if(tipi[1]==="Elettro"){
									tipoElement2.className="backElectric";
								} else if(tipi[1]==="Lotta"){
									tipoElement2.className="backFighting";
								} else if(tipi[1]==="Volante"){
									tipoElement2.className="backFlying";
								} else if(tipi[1]==="Erba"){
									tipoElement2.className="backGrass";
								} else if(tipi[1]==="Ghiaccio"){
									tipoElement2.className="backIce";
								} else if(tipi[1]==="Veleno"){
									tipoElement2.className="backPoison";
								} else if(tipi[1]==="Roccia"){
									tipoElement2.className="backRock";
								} else{
									tipoElement2.className="backWater";
								}
							}

							container.appendChild(imgElement);
							container.appendChild(numeroElement);
							container.appendChild(nomeElement);
							container.appendChild(faseEvo);
							container.appendChild(tipoContainer1);
							tipoContainer1.appendChild(tipoElement1);
							container.appendChild(tipoContainer2);
							tipoContainer2.appendChild(tipoElement2);
							contPoke.appendChild(container);
							}
						}
					}
				}
			}
		} else{
			if(weak=="-----"){
				console.log("Cerco il nome e il tipo");
				for(let i=0; i<pokedex.length; i++){
					const pokemon=pokedex[i];
					const nomi=pokemon.nome;
					const tipi=pokemon.tipo;
					let minusc=nomi.toLowerCase();
					if(minusc.includes(name)){
						if(tipi[0]===type || tipi[1]===type){
							const container=document.createElement("div");
							container.className="col-12 col-md-4 col-lg-2 pokemon-container";
							const imgElement=document.createElement("img");
							imgElement.src=pokemon.img_url;
							const numeroElement=document.createElement("p");
							numeroElement.textContent="N°: " + pokemon.numero;
							const nomeElement=document.createElement("h3");
							nomeElement.textContent=pokemon.nome;
							const faseEvo=document.createElement("p");
							faseEvo.textContent="Stadio: " + pokemon.stadio_evolutivo;
							const tipoContainer1=document.createElement("div");
							const tipoElement1=document.createElement("span");
							tipoElement1.textContent=tipi[0];
							if(tipi[0]==="Normale"){
								tipoElement1.className="backNormal";
							} else if(tipi[0]==="Coleottero"){
								tipoElement1.className="backBug";
							} else if(tipi[0]==="Drago"){
								tipoElement1.className="backDragon";
							} else if(tipi[0]==="Folletto"){
								tipoElement1.className="backFairy";
							} else if(tipi[0]==="Fuoco"){
								tipoElement1.className="backFire";
							} else if(tipi[0]==="Spettro"){
								tipoElement1.className="backGhost";
							} else if(tipi[0]==="Terra"){
								tipoElement1.className="backGround";
							} else if(tipi[0]==="Psico"){
								tipoElement1.className="backPsychic";
							} else if(tipi[0]==="Acciaio"){
								tipoElement1.className="backSteel";
							} else if(tipi[0]==="Buio"){
								tipoElement1.className="backDark";
							} else if(tipi[0]==="Elettro"){
								tipoElement1.className="backElectric";
							} else if(tipi[0]==="Lotta"){
								tipoElement1.className="backFighting";
							} else if(tipi[0]==="Volante"){
								tipoElement1.className="backFlying";
							} else if(tipi[0]==="Erba"){
								tipoElement1.className="backGrass";
							} else if(tipi[0]==="Ghiaccio"){
								tipoElement1.className="backIce";
							} else if(tipi[0]==="Veleno"){
								tipoElement1.className="backPoison";
							} else if(tipi[0]==="Roccia"){
								tipoElement1.className="backRock";
							} else{
								tipoElement1.className="backWater";
							}
							const tipoContainer2=document.createElement("div");
							const tipoElement2=document.createElement("span");
							if(tipi.length>1){
								tipoElement2.textContent=tipi[1];
								if(tipi[1]==="Normale"){
									tipoElement2.className="backNormal";
								} else if(tipi[1]==="Coleottero"){
									tipoElement2.className="backBug";
								} else if(tipi[1]==="Drago"){
									tipoElement2.className="backDragon";
								} else if(tipi[1]==="Folletto"){
									tipoElement2.className="backFairy";
								} else if(tipi[1]==="Fuoco"){
									tipoElement2.className="backFire";
								} else if(tipi[1]==="Spettro"){
									tipoElement2.className="backGhost";
								} else if(tipi[1]==="Terra"){
									tipoElement2.className="backGround";
								} else if(tipi[1]==="Psico"){
									tipoElement2.className="backPsychic";
								} else if(tipi[1]==="Acciaio"){
									tipoElement2.className="backSteel";
								} else if(tipi[1]==="Buio"){
									tipoElement2.className="backDark";
								} else if(tipi[1]==="Elettro"){
									tipoElement2.className="backElectric";
								} else if(tipi[1]==="Lotta"){
									tipoElement2.className="backFighting";
								} else if(tipi[1]==="Volante"){
									tipoElement2.className="backFlying";
								} else if(tipi[1]==="Erba"){
									tipoElement2.className="backGrass";
								} else if(tipi[1]==="Ghiaccio"){
									tipoElement2.className="backIce";
								} else if(tipi[1]==="Veleno"){
									tipoElement2.className="backPoison";
								} else if(tipi[1]==="Roccia"){
									tipoElement2.className="backRock";
								} else{
									tipoElement2.className="backWater";
								}
							}

							container.appendChild(imgElement);
							container.appendChild(numeroElement);
							container.appendChild(nomeElement);
							container.appendChild(faseEvo);
							container.appendChild(tipoContainer1);
							tipoContainer1.appendChild(tipoElement1);
							container.appendChild(tipoContainer2);
							tipoContainer2.appendChild(tipoElement2);
							contPoke.appendChild(container);
						}
					}
				}
			}
			else{
				console.log("Cerco tutto");
				for(let i=0; i<pokedex.length; i++){
					const pokemon=pokedex[i];
					const nomi=pokemon.nome;
					let minusc=nomi.toLowerCase();
					if(minusc.includes(name)){
						const pokemon=pokedex[i];
						const weaknesses=pokemon.debolezze;
						const tipi=pokemon.tipo;
						if(tipi[0]===type || tipi[1]===type){
							for(let k=0; k<weaknesses.length; k++){
								const weakness=weaknesses[k];
								if(weakness.includes(weak)){
									const container=document.createElement("div");
									container.className="col-12 col-md-4 col-lg-2 pokemon-container";
									const imgElement=document.createElement("img");
									imgElement.src=pokemon.img_url;
									const numeroElement=document.createElement("p");
									numeroElement.textContent="N°: " + pokemon.numero;
									const nomeElement=document.createElement("h3");
									nomeElement.textContent=pokemon.nome;
									const faseEvo=document.createElement("p");
									faseEvo.textContent="Stadio: " + pokemon.stadio_evolutivo;
									const tipoContainer1=document.createElement("div");
									const tipoElement1=document.createElement("span");
									tipoElement1.textContent=tipi[0];
									if(tipi[0]==="Normale"){
										tipoElement1.className="backNormal";
									} else if(tipi[0]==="Coleottero"){
										tipoElement1.className="backBug";
									} else if(tipi[0]==="Drago"){
										tipoElement1.className="backDragon";
									} else if(tipi[0]==="Folletto"){
										tipoElement1.className="backFairy";
									} else if(tipi[0]==="Fuoco"){
										tipoElement1.className="backFire";
									} else if(tipi[0]==="Spettro"){
										tipoElement1.className="backGhost";
									} else if(tipi[0]==="Terra"){
										tipoElement1.className="backGround";
									} else if(tipi[0]==="Psico"){
										tipoElement1.className="backPsychic";
									} else if(tipi[0]==="Acciaio"){
										tipoElement1.className="backSteel";
									} else if(tipi[0]==="Buio"){
										tipoElement1.className="backDark";
									} else if(tipi[0]==="Elettro"){
										tipoElement1.className="backElectric";
									} else if(tipi[0]==="Lotta"){
										tipoElement1.className="backFighting";
									} else if(tipi[0]==="Volante"){
										tipoElement1.className="backFlying";
									} else if(tipi[0]==="Erba"){
										tipoElement1.className="backGrass";
									} else if(tipi[0]==="Ghiaccio"){
										tipoElement1.className="backIce";
									} else if(tipi[0]==="Veleno"){
										tipoElement1.className="backPoison";
									} else if(tipi[0]==="Roccia"){
										tipoElement1.className="backRock";
									} else{
										tipoElement1.className="backWater";
									}
									const tipoContainer2=document.createElement("div");
									const tipoElement2=document.createElement("span");
									if(tipi.length>1){
										tipoElement2.textContent=tipi[1];
										if(tipi[1]==="Normale"){
											tipoElement2.className="backNormal";
										} else if(tipi[1]==="Coleottero"){
											tipoElement2.className="backBug";
										} else if(tipi[1]==="Drago"){
											tipoElement2.className="backDragon";
										} else if(tipi[1]==="Folletto"){
											tipoElement2.className="backFairy";
										} else if(tipi[1]==="Fuoco"){
											tipoElement2.className="backFire";
										} else if(tipi[1]==="Spettro"){
											tipoElement2.className="backGhost";
										} else if(tipi[1]==="Terra"){
											tipoElement2.className="backGround";
										} else if(tipi[1]==="Psico"){
											tipoElement2.className="backPsychic";
										} else if(tipi[1]==="Acciaio"){
											tipoElement2.className="backSteel";
										} else if(tipi[1]==="Buio"){
											tipoElement2.className="backDark";
										} else if(tipi[1]==="Elettro"){
											tipoElement2.className="backElectric";
										} else if(tipi[1]==="Lotta"){
											tipoElement2.className="backFighting";
										} else if(tipi[1]==="Volante"){
											tipoElement2.className="backFlying";
										} else if(tipi[1]==="Erba"){
											tipoElement2.className="backGrass";
										} else if(tipi[1]==="Ghiaccio"){
											tipoElement2.className="backIce";
										} else if(tipi[1]==="Veleno"){
											tipoElement2.className="backPoison";
										} else if(tipi[1]==="Roccia"){
											tipoElement2.className="backRock";
										} else{
											tipoElement2.className="backWater";
										}
									}

									container.appendChild(imgElement);
									container.appendChild(numeroElement);
									container.appendChild(nomeElement);
									container.appendChild(tipoContainer1);
									container.appendChild(faseEvo);
									tipoContainer1.appendChild(tipoElement1);
									container.appendChild(tipoContainer2);
									tipoContainer2.appendChild(tipoElement2);
									contPoke.appendChild(container);
								}
							}
						}
					}
				}
			}
		}
	}
}