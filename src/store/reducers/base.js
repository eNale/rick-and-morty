// Base reducer generator
export const BaseReducer = (initialState, handlers) => (
    state = initialState,
    action
) => {
    if (action.type in handlers) {
        return handlers[action.type](state, action);
    } else {
        return state;
    }
};
