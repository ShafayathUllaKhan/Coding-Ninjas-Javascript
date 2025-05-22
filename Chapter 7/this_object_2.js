const movie_object = {
    title: 'The Avengers',
    year: 2012,
    genre: 'Action, Sci-Fi, Thriller',
    cast: {
        main_lead: "Robert Downey Jr.",
        others: 'Chris Evans'
    },
    getDetails(){ // we can create a function in this way also
        console.log(`Title: ${this.title}\n 
            Year: ${this.year}\n
            Genre: ${this.genre}\n 
            Cast: ${this.cast}`);
    },

    getMovieDetials(detail){
        console.log(movie[detail]);
         console.log(movie.detail);
    }
};


movie_object.getDetails();
 // this keyword points to the object from which function it has been called
 // to create more objects with same kind of property then you can use constructor function
 
 
// constructor function

const movieobj = {
    title:'Avengers',
    year: 2012,
    getDetails(){
        console.log(`Title: ${this.title}
            Year: ${this.year}`);
    }
}

// this is factory function
function movie(title, year){
     const movieobj = {
        title:title,
        year: year,
        getDetails(){
            console.log(`Title: ${this.title}
                Year: ${this.year}`);
        }
    }
    return movieobj;
}

const movie11 = movie("The Avengers" , 2012);
console.log(movie11.__proto__); // object {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter
console.log(movie("The Avengers" , 2012).__proto__); // object {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter


const movie22 = movie("Avatar" , 2018);
console.log(movie22);


// construction function
// construction name will always start with caps letter

function Movie(title, year){
    //console.log(this);
    this.title = title;
    this.year = year;

    this.getDetails = function(){
          console.log(`Title: ${this.title}
                Year: ${this.year}`);
    }
}

// new keyword
// new keyword will create the object it will bind the this
// and it will return the object automatically

const movie3 = new Movie('avatar', 2013);
console.log(movie3);
movie3.getDetails();

