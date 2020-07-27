import axios from 'axios';

const client = axios.create({
    baseURL: 'https://api.outsidein.dev/IKwvFVz2VS0wTCuWRCiebKKe4KsYBQeL',
});

const api = {

    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    },
};

export default api;