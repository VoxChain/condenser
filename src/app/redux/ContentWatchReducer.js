import { Map, OrderedMap } from 'immutable';
import tt from 'counterpart';

const FETCH_UNIQUE = 'contentwatch/FETCH_UNIQUE';

export const defaultState = Map({});

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case FETCH_UNIQUE: {
            return state.set('value', 0);
        }
    }
}

export const fetchUnique = () => ({
    type: FETCH_UNIQUE,
});
