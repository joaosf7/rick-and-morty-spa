import episodeView from '../components/episode.js'
import searchEpisodeByNameView from '../components/searchEpisodeByName.js'
import { changeId } from '../../navigation.js'


export default function render(episodes, selectedEp, selectedEpChars){
    let episodeListBox = $('<div>').attr({
            id: "episode-list-box"
        })

    let selectedEpisodeBox
    console.log('arguments:', arguments) 
    if(selectedEp && selectedEpChars){
        selectedEpisodeBox = episodeView(episodes, selectedEp, selectedEpChars)
    }
    episodes.forEach(episode => {
        let episodeBox = $(`<div class='episode-box'>`).append(`
            <h6 id='episode-list-name'>${episode.name}</h6>
            <img id='episode-list-image' src='/app/assets/images/episodeLogo.png' alt='episode image'/>
            <p class='episode-list-detail'>${episode.episode}</p>
            <p class='episode-list-detail'>Aired: ${episode.air_date}</p>
        `).on('click', () => changeId("episodes", episode.id))
        episodeListBox.append(episodeBox)
    })

    $('#container').empty()
    selectedEpisodeBox && $('#container').append(selectedEpisodeBox)
    $('#container').append(searchEpisodeByNameView())
    $('#container').append(`
        <h1 class='title'>Episode List<h1>
    `)
    $('#container').append(episodeListBox)
}
