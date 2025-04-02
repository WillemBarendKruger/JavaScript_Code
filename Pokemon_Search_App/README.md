//------------Instructions to run
Run the index.html file in your browser

//------------Instructions
You should have an input element with an id of "search-input", and is required.
You should have a button element with an id of "search-button".
You should have an element with an id of "pokemon-name".
You should have an element with an id of "pokemon-id".
You should have an element with an id of "weight".
You should have an element with an id of "height".
You should have an element with an id of "types".
You should have an element with an id of "hp".
You should have an element with an id of "attack".
You should have an element with an id of "defense".
You should have an element with an id of "special-attack".
You should have an element with an id of "special-defense".
You should have an element with an id of "speed".

When the #search-input element contains the value Red and the #search-button element is clicked, an alert should appear with the text "Pokémon not found".

When the #search-input element contains the value Pikachu and the #search-button element is clicked, the values in the #pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense, and #speed elements should be PIKACHU, #25 or 25, Weight: 60 or 60, Height: 4 or 4, 35, 55, 40, 50, 50, and 90, respectively.
When the #search-input element contains the value Pikachu and the #search-button element is clicked, you should add an img element with the id of "sprite" and the src set to the Pokémon's front_default sprite to the page.
When the #search-input element contains the value Pikachu and the #search-button element is clicked, the #types element should contain a single inner element with the value ELECTRIC. The #types element content should be cleared between searches.
When the #search-input element contains the value 94 and the #search-button element is clicked, the values in the #pokemon-name, #pokemon-id, #weight, #height, #hp, #attack, #defense, #special-attack, #special-defense, and #speedelements should be GENGAR, #94 or 94, Weight: 405 or 405, Height: 15 or 15, 60, 65, 60, 130, 75, and 110, respectively.
When the #search-input element contains the value 94 and the #search-button element is clicked, you should add an img element with the id of sprite and the src set to the Pokémon's front_default sprite to the page.
When the #search-input element contains the value 94 and the #search-button element is clicked, the #types element should contain two inner elements with the text values GHOST and POISON, respectively. The #types element content should be cleared between searches.
When the #search-input element contains an invalid Pokemon name, and the #search-button element is clicked, an alert should appear with the text "Pokémon not found".
When the #search-input element contains a valid Pokemon id and the #search-button element is clicked, the UI should be filled with the correct data.

Usage
Use the endpoint https://pokeapi-proxy.freecodecamp.rocks/api/pokemon to see a list of all valid Pokémon names, id numbers, and URLs.

Use the endpoint https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id} to get data for a Pokémon, where {name-or-id} is the Pokémon's name or id number.

Note: Pokémon names should be in lowercase, have special characters removed, and be dash separated. Also, if the Pokémon has either ♀ or ♂ as part of its name, the format is {name-f} or {name-m}, respectively.

API format:
id: 1,
name: "bulbasaur",
url: "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/1/"

 url: 
  {
  "base_experience": 64,
  "height": 7,
  "id": 1,
  "name": "bulbasaur",
  "order": 1,
  "sprites": {
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"
  },
  "stats": [
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
      }
    },
    {
      "base_stat": 49,
      "effort": 0,
      "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
      }
    },
    {
      "base_stat": 45,
      "effort": 0,
      "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ],
  "weight": 69
}