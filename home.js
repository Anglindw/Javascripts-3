console.log('Api data fetching')


const get_pokemon_data = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)


    const poke_name = document.createElement('h1')
    poke_name.innerText = data['name']
    const poke_img = document.createElement('img')
    poke_img.setAttribute('src', data['sprites']['front_shiny'])

    document.querySelector('.poke-card').append(poke_name)
    document.querySelector('.poke-card').append(poke_img)
    
}

const form_data = document.querySelector('form')
form_data.addEventListener('submit', (event) => {
    event.preventDefault()
    const pokemon = document.querySelector('#poke-data').value 
    get_pokemon_data(pokemon)
})