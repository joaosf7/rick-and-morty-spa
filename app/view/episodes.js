export default function render(episodes){
    let episodeListBox = $('<div>').attr({
            id: "episode-list-box"
        })
    
    console.log(episodes.results)
    episodes.results.forEach(episode => {
        episodeListBox.append(`
            <h3>${episode.name}</h3>
            <img id='episode-image' src=${episode.url} alt='episode image'/>
        `)
    })
    $('#container').empty().append(episodeListBox)
}