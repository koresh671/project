const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {    
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for(let i = 0; i <= 1; i++) {    
	const film = prompt('Один из последних просмотренных фильмов?');
	const rating = prompt('На сколько его оцените?');
    personalMovieDB.movies[film] = rating;
}
