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
    characters.forEach(character => selectedEpisodeCharactersBox.append(`
            <card id='selected-episode-character-box'>
                <h2 id='selected-episode-character-name'>${character.name}</h2>
                <img
                    id='selected-episode-character-image'
                    src=${character.image}
                    alt='character image'
                />
            </card>
    `))
    console.log(selectedEpisodeCharactersBox)

    selectedEpisodeBox.append(selectedEpisodeCharactersBox)
    return selectedEpisodeBox
}