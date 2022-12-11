// get all html elements into dom

var searchMovie = document.querySelector('.searchMovie');
var searchResult = document.querySelector('.searchResult');
var Outputresults = document.querySelector('.Outputresults');
var form = document.querySelector('form');

const app_key = '40fb29df55aeea1df286eb9d0c41211b';
const baseUrl = 'https://api.themoviedb.org/3';


window.onload = ()=>{
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        fetchApi();
    })
    async function fetchApi(){
        var searchmovie = searchMovie.value;
        const api_url = `${baseUrl}/search/movie?&api_key=${app_key}&query=${searchmovie}&include_adult=false`
         await fetch(api_url)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data);
            showMovies(data.results)
        })
    }
    function showMovies(data){
        let generateOurHtml = ""
        let imgUrl = 'https://image.tmdb.org/t/p/w500'
        data.map((results)=>{
            
            generateOurHtml += 
            `
            <div class="col-12 col-sm-6  col-md-6 col-lg-4 mb-4 mb-sm-4 mb-md-4 mb-lg-4">
            <div class="MovieCard">
                <div class="Imgwrap">
                    <img src="${imgUrl + results.poster_path}" alt="foodrecipie_icon" class="ImageHold">
                </div>
                <div class="innerMovieContent">
                    <div class="MoviecardContent d-block mb-2">
                        <h5 class="MovieTitle mb-2">${results.title}</h5>
                    </div>
                    <div class="rating mb-2">
                        <span class="${getVote(results.vote_average)}">Rating:${results.vote_average} </span>
                    </div>
                    <div class="relese>
                        <span class="relesedate>ReleseDate: ${results.release_date}</span>
                    </div>
                    <div class="overviewWrap">
                        <h5 class="mb-2">overview</h5>
                        <p>${results.overview}</p>
                    </div>  
                </div>     
                     
            </div>
        </div>
            `
        })
        Outputresults.innerHTML = generateOurHtml;
      
    }
    function getVote(vote){
        if (vote >= 8) {
           return 'green';
        }
        else if (vote > 6) {
            return 'orange';
        }
        else if (vote <= 5) {
            return 'red';
        }
    }
    
}
























