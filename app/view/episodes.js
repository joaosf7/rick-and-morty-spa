export default function render(episodes){
    console.log(episodes)
    $('#container').empty().append(`<p>${episodes}</p>`)
}