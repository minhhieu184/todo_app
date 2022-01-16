import html from '../core.js'
import { connect } from '../store.js'

function Footer({ todos, filter, filters }){

    return html`
        <footer class="footer">
            <span class="todo-count">
                <strong>
                    ${todos.reduce((sum, todo) => todo.isCompleted ? sum : sum + 1
                        , 0)}
                </strong> 
                item left
            </span>
            <ul class="filters">
                ${Object.keys(filters).map((filterItem) => html`
                    <li>
                        <a 
                            class="${filterItem == filter && 'selected'}" 
                            href="#/${filterItem}"
                            onclick="dispatch('switchFilter', '${filterItem}')"
                        >
                            ${filterItem}
                        </a>
                    </li>
                `)}
            </ul>
            <button class="clear-completed"
                onclick="dispatch('clearCompleted')"
            >Clear completed</button>
        </footer>
    `
}

export default connect()(Footer)