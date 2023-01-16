import axios from 'axios';
const BASE = 'https://api.github.com/users/maiquinho';



export const fetchUserBase = async () => {
    const { data } = await axios.get(BASE);
    return await data;
} 