//POKEMON INFO
const pkName = document.getElementById("pokemon-name");
const pkId = document.getElementById("pokemon-id");
const pkWeight = document.getElementById("weight");
const pkHeight = document.getElementById("height");
const pkimg = document.getElementById("sprite-container");
const pkType = document.getElementById("types");

//Stats
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const sAttack = document.getElementById("special-attack");
const sDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");

//API
const apiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";



//Map the names & ID's to arrays
const searchNameOrId = async () =>{
   try{
    const input = await searchInput.value

    const response = await fetch(apiUrl);
    const data = await response.json();
    const pokemon = await data.results;


    //name checker
    
    for(let i = 0; i < pokemon.length; i++){
        //Can maybe wrap this in a if to check if its id or name
        if(input.trim().toLowerCase() === pokemon[i].name || Number(input) === pokemon[i].id){
            let urlData = await fetch(pokemon[i].url);
            let data = await urlData.json();
            pkName.textContent = data.name;
            pkId.textContent = "#"+data.id;
            pkWeight.textContent = `Weight: ${data.weight}`;
            pkHeight.textContent = `Height: ${data.height}`;
            pkimg.innerHTML = `<img id="sprite" src="${data.sprites.front_default}"/>`;

            //add types
            //data.types.forEach(atribute => atribute.type.name)
            pkType.innerHTML= ""
            for(let j = 0; j < data.types.length; j++){
                let type = data.types[j].type.name;
                pkType.innerHTML += `<div class="type ${type}">${type}</div>`
            }
            

            //add stats
            hp.textContent = data.stats[0].base_stat;
            attack.textContent = data.stats[1].base_stat;
            defense.textContent = data.stats[2].base_stat;
            sAttack.textContent = data.stats[3].base_stat;
            sDefense.textContent = data.stats[4].base_stat;
            speed.textContent = data.stats[5].base_stat
            
           break;
        }
        else{
            alert("Pokémon not found")
        }
    }
    
    
   }
   catch(err){
    console.error(err)
   }
}


const checkInput = () => {
    
}
// Event Listeners
searchBtn.addEventListener("click", searchNameOrId)