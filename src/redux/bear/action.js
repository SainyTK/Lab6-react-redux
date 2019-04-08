import axios from 'axios';

const url = 'http://localhost/api/bears';

const types = {
    GET_BEAR_SUCCESS: 'GET_BEAR_SUCCESS',
    GET_BEAR_FAILED: 'GET_BEAR_FAILED'
}

const dispatcher = {
    getBears: () => async (dispatch) => {
        const result = await axios.get(url);
        if (!result.error) {
            dispatch({ type: types.GET_BEAR_SUCCESS, payload: result.data });
        }
        return result.data;
    },
    addBear: (bearInfo) => async (dispatch) => {
        const body = {...bearInfo};
        await axios.post(url, body);
        const result = await dispatch(dispatcher.getBears());
        return result.data;
    },
    deleteBear: (bearId) => async (dispatch) => {
        await axios.delete(`${url}/${bearId}`);
        const result = await dispatch(dispatcher.getBears());
        return result.data;
    },
    updateBear: (bearId, bearInfo) => async (dispatch) => {
        const body = {...bearInfo};
        await axios.put(`${url}/${bearId}`, body);
        const result = await dispatch(dispatcher.getBears());
        return result.data;
    }
}

export default {
    types,
    dispatcher
}