import axios from 'axios';

const types = {
    FETCH_SUCCESS: 'FETCH_SUCCESS'
};

const dispatcher = {
    fetchData: username => async (dispatch, getState) => {
        const result = await axios.get(`https://api.github.com/users/${username}`);
        if (!result.error) {
            dispatch({type: types.FETCH_SUCCESS, payload: result});
        }
        return result;
    }
}

export default {
    types,
    dispatcher
}