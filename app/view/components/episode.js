import { changeId } from "../../navigation.js"

export default function render(episodes, selectedEpisode, characters){
    let selectedEpisodeBox
    console.log('episodes:', episodes)
    console.log('selectes episode:', selectedEpisode)
    let selectedEpisodeCharactersBox = $('<div id="selected-episode-characters-box">')
    selectedEpisodeBox = $('<div id="selected-episode">')
    selectedEpisodeBox.append(`
        <h1 id ='selected-episode-title'>${selectedEpisode.name}</h1>
        <p id='selected-episode-subtitle'>${selectedEpisode.episode}</p>
        <h4 id='staring-title'>Staring:</h4>
    `)
    characters.forEach(character => {
        let card = $('<card id="selected-episode-character-box">');
        let characterName = $(`<h2 id="selected-episode-character-name">${character.name}</h2>`);
        let characterImage = $('<img id="selected-episode-character-image" src="' + character.image + '" alt="character image"/>');

        card.click(() => changeId("characters", character.id));
        card.append(characterName, characterImage);
        selectedEpisodeCharactersBox.append(card);
    });

    console.log(selectedEpisodeCharactersBox)

    selectedEpisodeBox.append(selectedEpisodeCharactersBox)
    return selectedEpisodeBox
}