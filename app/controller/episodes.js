import { getAllEpisodesFromApi } from "../service/api.js"
import episodesView from '../view/episodes.js'

export default function init(){
    getAllEpisodesFromApi().then(episodesView)
        .catch(err => console.log(err))
}