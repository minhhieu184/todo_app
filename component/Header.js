import html from '../core.js'

function Header(){

    return html`
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus
                onkeydown="event.keyCode === 13 && event.target.value != '' && dispatch('add', event.target.value)"
            >
        </header>
    `
}

export default Header