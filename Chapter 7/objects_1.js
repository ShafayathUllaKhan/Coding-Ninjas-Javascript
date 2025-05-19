// this form of object creation is known as object literals

const movie = {
    title: 'The Avengers',
    year: 2012,
    genre: 'Action, Sci-Fi, Thriller',
    cast: {
        main_lead: "Robert Downey Jr.",
        others: 'Chris Evans'
    },
    getDetails: function(){
        console.log(`Title: ${movie.title}\n 
            Year: ${movie.year}\n
            Genre: ${movie.genre}\n Cast: ${movie.cast}`);
    },

    getMovieDetials : function(detail){
        console.log(movie[detail]);
         console.log(movie.detail);
    }
};

console.log(movie.title);
movie.getDetails();
console.log(movie["title"]);

const  detail = "year";

movie.getMovieDetials(detail);

console.log(movie.cast.main_lead);
console.log(movie["cast"]["main_lead"]);



// this of objects

