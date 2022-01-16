import html from '../core.js'

import TodoItem from './TodoItem.js'

import { connect } from '../store.js'

function TodoList({ todos, filter, filters }){

    return html`
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" checked>
            <label for="toggle-all"
                onclick="dispatch('toggleAll')"
            >Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(todo => filters[filter](todo))
                    .map((todo, index) => TodoItem(todo, index))}
            </ul>
        </section>
    `
}

export default connect()(TodoList)