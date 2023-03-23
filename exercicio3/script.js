const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
pokemon1.ataques =[]
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
} 
pokemon1.ataques.push(ataque)
const pokemonCopia = {
    ...pokemon1
}
pokemonCopia.nome = "Squirtle"
pokemonCopia.tipo = "agua"
pokemonCopia.ataques =[...pokemon1.ataques]
const ataque2 = {
    ataque:"Folha Navalha",
    dano: 45,
    tipo:"Grama",
    precisao: 100
}
pokemon1.ataques.push(ataque2)
const ataque3 = {
    ataque:"Jato de água",
    dano: 40,
    tipo:"Água",
    precisao: 100
}
pokemonCopia.ataques.push(ataque3)
console.log(pokemon1)
console.log(pokemonCopia)
