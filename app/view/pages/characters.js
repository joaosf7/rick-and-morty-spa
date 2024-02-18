import characterView from '../components/character.js'
import searchCharacterByNameView from '../components/searchCharacterByName.js'
import { changeId } from '../../navigation.js'


export default function render(characters, selectedChar, selectedCharEpisodes){
    let characterListBox = $('<div>').attr({
            id: "character-list-box"
        })

    let selectedCharacterBox
    console.log('arguments:', arguments) 
    if(selectedChar && selectedCharEpisodes){
        selectedCharacterBox = characterView(characters, selectedChar, selectedCharEpisodes)
    }

    characters.forEach(character => {
        let characterBox = $(`<div class='character-box'>`).append(`
            <h6 id='character-list-name'>${character.name}</h6>
            <img id='character-list-image' src=${character.image} alt='character image'/>
            <p class='character-list-detail'>Location: ${character.location.name}</p>
            <p class='character-list-detail'>${character.species}</p>
        `).on('click', () => changeId("characters", character.id))
        characterListBox.append(characterBox)
    })
    
    $('#container').empty()
    selectedCharacterBox && $('#container').append(selectedCharacterBox)

    $('#container').append(`
        <h1 class='title'>Character List<h1>
    `)
    $('#container').append(searchCharacterByNameView())
    $('#container').append(characterListBox)
}
