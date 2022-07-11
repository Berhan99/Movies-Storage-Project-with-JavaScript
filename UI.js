class UI{

    static addMovieToUI(newFilm){

        const films = document.getElementById("films");
        movies.innerHTML += `
        
            <tr>
                <td><img src="${newFilm.url}" style="max-width: 100%; height: 200px;" alt=""></td>
                <td>${newFilm.name}</td>
                <td> ${newFilm.director} </td>
                <td>${newFilm.score}</td>
                <td><button id="delete-film" class="btn btn-danger">Delete</button></td>
            </tr>
        
        
        `; 
    
    }

    static displayMessage(message,type,place){

        const alert = document.createElement("div");
        {/* <div class="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div> */}
        alert.className = `alert alert-${type}`;
        alert.innerText = `${message}`;
        const form = document.getElementById("form-info");
        form.appendChild(alert);


        setTimeout(function() {
            alert.remove()
        }, 3000);

    }

    static clearAllInputs(){

        nameElement.value = "";
        directorElement.value = "";
        urlElement.value = "";
        scoreElement.value = "";

    }

    static deleteMovieFromUI(movie){

        movie.parentElement.parentElement.remove();
    }

    static deleteAllMoviesFromUI(){

        let movies = document.getElementById("movies");
        while(movies.firstElementChild !== null){
            movies.firstElementChild.remove();
        }
    }






}

