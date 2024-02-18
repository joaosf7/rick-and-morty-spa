import { changeId } from "../../navigation.js"

export default function render(characters, selectedChar, episodes){
    let selectedCharBox = $('<div id="selected-char-box">')

    console.log('here')
    console.log(characters)
    console.log(selectedChar)
    console.log(episodes)
    let selectedCharEpisodesBox = $('<div id="selected-char-episodes-box">')
    selectedCharBox.append(`
        <h1 id ='selected-char-name'>${selectedChar.name}</h1>
        <img id='selected-char-image' src=${selectedChar.image} alt='selected character image'/>
        <p class='selected-char-info'>${selectedChar.species}</p>
        <p class='selected-char-info'>${selectedChar.type}</p>
        <h4 id='staring-title'>Appears on:</h4>
    `)
    episodes.forEach(episode => {
        let card = $('<card id="selected-char-episode-box">');
        let episodeName = $(`<h7 id="selected-character-episode-name">${episode.name}</h7>`);
        let episodeImage = $('<img id="selected-character-episode-image" src="app/assets/images/episodeLogo.png" alt="episode image"/>');

        card.click(() => changeId("episodes", episode.id));
        card.append(episodeName, episodeImage);
        selectedCharEpisodesBox.append(card);
    })
    selectedCharBox.append(selectedCharEpisodesBox)

    return selectedCharBox
}