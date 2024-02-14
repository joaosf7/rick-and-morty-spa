export default function render(message) {
    $('#container').empty().append($('<h1>').text(message));
}
