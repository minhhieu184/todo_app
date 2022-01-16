import html from '../core.js'
import { connect } from '../store.js'

import Header from './Header.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'

function App({ todos }){

    return html`
        <section class="todoapp">
            ${Header()}
            ${!todos.length || TodoList()}
            ${!todos.length || Footer()}
        </section>
    `
}

export default connect()(App)