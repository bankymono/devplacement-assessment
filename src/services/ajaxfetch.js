import axios from 'axios';

const thefetcher =  async () => {
    const res = await axios.get('https://randomuser.me/api/?results=40&noinfo');

    return res.data.results;
}

export default thefetcher