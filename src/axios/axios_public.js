import axios from 'axios';
import * as axiosPublic from './axios_public_urls';

const instance=axios.create({
    baseURL:axiosPublic.PUBLIC_URL
});

export default instance;
