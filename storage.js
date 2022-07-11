class Storage{

    static addMoviesToStorage(newFilm){

        let movies = Storage.getMoviesFromStorage(); // storage yerine this yazılabilir.
        movies.push(newFilm);
        localStorage.setItem("movies", JSON.stringify(movies));

    }

    static getMoviesFromStorage(){
        let movies;

        if(localStorage.getItem("movies") === null){
            movies = [];
        }
        else{
            movies = JSON.parse(localStorage.getItem("movies"));
        }

        return movies;
    }

    static deleteMovieFromStorage(movie){
        let movieRow = movie.parentElement.parentElement;
        let movieName = movieRow.children[1].textContent;
        let movies = this.getMoviesFromStorage();
        
        movies.forEach(function(item,index){
            
            if(item.name === movieName){
                
                movies.splice(index,1);

            }
            
        }); 

        localStorage.setItem("movies",JSON.stringify(movies));

    }

    static deleteAllMoviesFromStorage(){
        
        localStorage.removeItem("movies");
    }

   /*  static deleteMoviesFromStorage(film){

        let movies = this.getMoviesFromStorage();

        movies.forEach(function(item){
            if(item === film){
                movies.remove(item);
            }
        });

        localStorage.setItem("movies",JSON.stringify(movies));
    } */
}
