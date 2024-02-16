import { getEpisodes, getCharactersByEpId, getEpisodeById } from "../service/api.js"
import episodesView from '../view/pages/episodes.js'
import navbarView from '../view/components/navbar.js'

export default async function init(){
    navbarView()

    let parameters = window.location.hash.split('?')[1]

    const hash = window.location.hash

    let episodes = await getEpisodes(parameters)
    if(!episodes)
        episodes = []
    let epNumber = parseInt(hash.slice(9, parameters ? hash.indexOf('?') : hash.length))
    
    console.log('episodes in controller: ', episodes)
    console.log('epNumber', epNumber)
    console.log('parameters', parameters)

    if(epNumber && typeof epNumber === 'number'){
        episodesView(episodes, await getEpisodeById(epNumber), await getCharactersByEpId(epNumber))
    }
    else
        episodesView(episodes)
}