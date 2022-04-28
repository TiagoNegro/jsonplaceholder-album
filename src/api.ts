import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const api = {
    getAllAlbums: async () => {
        let response = await instance.get('album');
        return response.data;
    }
}