import {characters as route} from '../../routes.js'
import { hasParameters } from '../../navigation.js'

export default function render(){
    let searchBox = $('<input>')
    searchBox.attr({
        id: 'search-chars',
        placeholder: 'Search by name',
        autocomplete: false
    })
        .change(({target}) => {
            console.log(target.value)
            let hash = window.location.hash
            if(!hasParameters())
                window.location = `${route.hash}?name=${target.value}`
            else
                window.location.hash = hash.slice(0, hash.indexOf('?')) + `?name=${target.value}`
        })

    console.log(searchBox)
    return searchBox
}