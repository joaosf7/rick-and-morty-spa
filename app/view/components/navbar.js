export default function render(){
    $('#navbar').empty().append(
        `<nav class='navbar'>
            <div class="dropdown">
                <button id='navbar-button'  type="button" data-bs-toggle="dropdown" aria-expanded="false">

                </button>
                <ul id='dropdown-list' class="dropdown-menu" aria-labelledby="navbar-button">
                    <li><a class="dropdown-item" href="#episodes">Episodes</a></li>
                    <li><a class="dropdown-item" href="#characters">Characters</a></li>
                    <li><a class="dropdown-item" href="#spots">Spots</a></li>
                </ul>
            </div>
            <h3 id='navbar-title'>Rick and Morty Rabbit Hole</h3>
    </nav>`
    )
}