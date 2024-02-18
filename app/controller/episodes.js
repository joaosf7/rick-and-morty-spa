import { getEpisodes, getCharactersByEpId, getEpisodeById } from "../service/api.js"
import episodesView from '../view/pages/episodes.js'
import navbarView from '../view/components/navbar.js'
import loadingView from '../view/components/loading.js'

export default async function init(){
    $('#container').empty().append(loadingView())
    let parameters = window.location.hash.split('?')[1]

    const hash = window.location.hash

    let episodes = await getEpisodes(parameters)
    if(!episodes)
        episodes = []
    let epNumber = parseInt(hash.slice(9, parameters ? hash.indexOf('?') : hash.length))
    
    console.log('episodes in controller: ', episodes)
    console.log('epNumber', epNumber)
    console.log('parameters', parameters)

    let selectedEpisode
    let characters
    if(epNumber && typeof epNumber === 'number'){
        selectedEpisode = await getEpisodeById(epNumber)
        characters = await getCharactersByEpId(epNumber)
    }

    navbarView()
    characters ? episodesView(episodes, selectedEpisode, characters) : episodesView(episodes)

}