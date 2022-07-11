const nameElement = document.getElementById("name");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const scoreElement = document.getElementById("score");
const form = document.getElementById("form-info");
const films = document.getElementById("films");
const table = document.getElementById("movie-table");
const card2 = document.querySelectorAll(".card")[1];
const deleteAllButton = document.getElementById("delete-all");



eventListeners();


function eventListeners(){

    form.addEventListener("submit", addMovie);
    card2.addEventListener("click", deleteMovie);
    document.addEventListener("DOMContentLoaded",loadMoviesToUIFromStorage);
    deleteAllButton.addEventListener("click", deleteAllMovies);

}

function addMovie(e){

    const name = nameElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    const score = scoreElement.value;

    if(name === "" || director === "" || url ==="" || score ===""){
        
        UI.errorMessage("Please enter to all fields !", "danger")
        
    }
    else
    {

        const newMovie = new Movie(name,director,url,score);
        UI.addMovieToUI(newMovie);
        Storage.addMoviesToStorage(newMovie);
        UI.displayMessage("Succesfully added !","success");
        
    }

    
    UI.clearAllInputs();

    e.preventDefault();
}

function loadMoviesToUIFromStorage(){

    let movies = Storage.getMoviesFromStorage();

    movies.forEach(function(item){
        UI.addMovieToUI(item);
    });
}

function deleteMovie(e){

    if(e.target.id === "delete-film"){

        UI.deleteMovieFromUI(e.target);
        Storage.deleteMovieFromStorage(e.target);

    }
} 


function deleteAllMovies(e){

    if(confirm("Are you sure to want to delete all movies?")){
        UI.deleteAllMoviesFromUI();
        Storage.deleteAllMoviesFromStorage();

    }

    
}
