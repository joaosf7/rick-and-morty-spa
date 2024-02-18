import navbarView from '../view/components/navbar.js'
import charView from '../view/pages/characters.js'
import { getParameters } from '../navigation.js'
import { getCharacters, getCharacterById, getEpisodesByCharId} from '../service/api.js'
import loadingView from '../view/components/loading.js'
import { episodes } from '../routes.js'

export default async function init(){
    loadingView()
    
    let parameters = getParameters()

    let characters = await getCharacters(parameters)
    if(!characters)
        characters = []

    let hash = window.location.hash
    let charId = parseInt(hash.slice(11, parameters ? hash.indexOf('?') : hash.length))
    let temp = hash.slice(11, parameters ? hash.indexOf('?') : hash.length)

    console.log('temp', temp)
    console.log(hash)
    console.log('characters in controller:', characters)
    console.log('char id:', charId)
    console.log('parameters:', parameters)
    
    let selectedChar
    let episodes
    if(charId && typeof charId === 'number'){
        selectedChar = await getCharacterById(charId)
        episodes = await getEpisodesByCharId(charId)
    }
    else
        charView(characters)

    navbarView()
    selectedChar ? charView(characters, selectedChar, episodes) : charView(characters)
    
}