import html from '../core.js'

function TodoItem(todo, index){

    return html`
        <li class="${todo.isCompleted && 'completed'}"
            ondblclick="this.classList.add('editing')"
        >
            <div class="view">
                <input class="toggle" type="checkbox"
                    ${todo.isCompleted && 'checked'}
                    onclick="dispatch('toggle', ${index})"
                >
                <label>${todo.title}</label>
                <button class="destroy"
                    onclick="dispatch('destroy', ${index})"
                ></button>
            </div>
            <input class="edit" value="${todo.title}"
                onkeydown="event.keyCode === 13 && 
                    (this.closest('.editing').classList.remove('editing') ||
                    dispatch('edit', ${index}, this.value))"
                onblur="dispatch('edit', ${index}, this.value)"
            >
        </li>
    `
}

export default TodoItem