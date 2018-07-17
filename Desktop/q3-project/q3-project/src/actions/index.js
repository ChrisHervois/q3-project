import axios from 'axios';
export const ADD_ITEM = 'add_item';
export const FETCH_ITEMS = 'fetch_items';
export const EDIT_ITEM = 'edit_item';

const ROOT_URL = 'http://localhost:8000';

export function fetchItems() {
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_ITEMS,
        payload: request
    };
}

export function addItem(values, callback) {
    const request = axios.post(`${ROOT_URL}/add`, values)
        .then(() => callback());

    return {
        type: ADD_ITEM,
        payload: request
    }
}

export function editItem(values, id, callback) {
    const request = axios.post(`${ROOT_URL}/edit/${id}`, values)
        .then(() => callback());

    return {
        type: EDIT_ITEM,
        payload: request
    }
}