import { api } from './../config/properties';

export const getUsers = () => {
    return fetch(`${api.root}/users`)
        .then(res => res.json())
        .then(json => Promise.resolve(json)) //lista od 10 useri
        .catch(err => Promise.reject(err))
} 