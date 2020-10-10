export default (state, action) => {
    switch (action.type) {
        case 'SCORE_WRONG':
            return {
                ...state,
                wrong: state.wrong + action.payload
            };
        case 'SCORE_RIGHT':
            return {
                ...state,
                right: state.right + action.payload
            };
        case 'MESSAGE':
            return {
                ...state,
                message: action.payload
            };
        case 'GAMEOVER':
            return {
                ...state,
                gameover: action.payload
            };
        case 'RESET':
            return {
                ...state,
                gameover: 0,
                message: '',
                right:0,
                wrong:0
            };

        default: return state;
    }
}
