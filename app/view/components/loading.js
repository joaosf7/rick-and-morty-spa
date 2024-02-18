const LOADING_IMG = '/app/assets/images/loading.png'

export default function render(){
    $('#container').empty()
    const loadingImg = $('<img>').attr({src: LOADING_IMG}).addClass('loading-img rotate')

    $('#container').append($('<div>').addClass('loading').append(loadingImg))
}