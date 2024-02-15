import { getAllEpisodesFromApi } from "../service/api.js"
import episodesView from '../view/episodes.js'
import navbarView from '../view/navbar.js'

export default function init(){
    navbarView()

    getAllEpisodesFromApi().then(episodesView)
        .catch(err => console.log(err))
}