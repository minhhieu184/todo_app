

function html ([first, ...strings], ...values){
    return values.reduce((acc, val) => acc.concat(val, strings.shift()), [first])
        .filter(value => value && value !== true || value === 0)
        .join('')
}

function createStore (reducer){
    let state = reducer()
    const roots = new Map()

    function render(){
        for (const [root, component] of roots) {
            const result = component()
            root.innerHTML = result
        }
    }

    return {
        attach(component, root){
            roots.set(root, component)
            render()
        },
        connect(selector = state => state){
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args))

        },
        dispatch(action, ...args){
            state = reducer(state, action, args)
            render()
        },
    }
}

export default html
export { createStore }