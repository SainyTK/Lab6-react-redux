const types = {
    ADD: 'ADD',
    SUBSTRACT: 'SUBTRACT'
}

const dispatcher = {
    add: () => ({type: types.ADD}),
    subtract: () => ({type: types.SUBSTRACT})
}

export default {
    types,
    dispatcher
};