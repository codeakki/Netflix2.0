import axios from 'axios';


/* URL To make Request to The movie database */

const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

instance.get('/foo-bar');
//https://api.themoviedb.org/3  helps tp get from instance foo-bar-->go to base url

export default instance;
