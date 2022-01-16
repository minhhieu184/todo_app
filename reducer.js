import storage, { TODOS_KEY } from './util/storage.js';

const todosStorage = storage(TODOS_KEY)

const init = {
    todos: todosStorage.get(),
    filter: 'all',
    filters: {
        all(){
            return true
        },
        active(todo){
            return !todo.isCompleted
        },
        completed(todo){
            return todo.isCompleted
        }
    }

}

const actions = {
    add({ todos }, args){
        todos.push({
            title: args.pop(),
            isCompleted: false,
        })
    },
    toggle({ todos }, args){
        const index = args.pop();
        todos[index].isCompleted = !todos[index].isCompleted
    },
    toggleAll({ todos }){
        const isCompletedAll = !todos.some((todo) => !todo.isCompleted)
        todos.forEach((todo) => todo.isCompleted = !isCompletedAll)
    },
    destroy({ todos }, args){
        todos.splice(args.pop(), 1)
    },
    clearCompleted(state){
        const newTodos = state.todos.filter(todo => !todo.isCompleted)
        state.todos = newTodos
    },
    switchFilter(state, args){
        state.filter = args.pop()
    },
    edit({ todos }, [ index, title ]){
        todos[index].title = title
    }
}

function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args);

    todosStorage.set(state.todos)
    return state
}

export default reducer


