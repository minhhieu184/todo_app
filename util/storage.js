
const TODOS_KEY = 'todos'

function storage(key){
    const todos = JSON.parse(localStorage.getItem(key)) || []

    return {
        get(){
            return todos
        },
        set(todos){
            localStorage.setItem(key, JSON.stringify(todos))
        }
    }
}


export default storage
export { TODOS_KEY }











