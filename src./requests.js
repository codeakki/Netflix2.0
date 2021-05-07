const API_KEY ="1ecdc0d54ac8ee10289c7d824ac9a7f0";

const requests ={
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomaceMovies :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`,
  
}
export default requests;