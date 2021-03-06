app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
    { 
      title:      'Ferris Bueller\'s Day Off', 
      iscore:     7.8,
      rating:     'PG-13',
      runtime:    103,
      released:   new Date('1986', '06', '11'),
      country:    'USA',
      posters:    ['img/ferrisbueller.jpg','img/bueller2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0091042',
      website:    'https://en.wikipedia.org/wiki/Ferris_Bueller%27s_Day_Off',
      likes:      978,
      dislikes:   69,
      posterindex: 0
      },
    { 
      title:      'Moonrise Kingdom', 
      iscore:     7.8,
      rating:     'PG-13',
      runtime:    94,
      released:   new Date('2012', '06', '29'),
      country:    'USA',
      posters:    ['img/moonrise1.jpg','img/moon2.jpg','img/moon3.jpg','img/moon4.jpg'],
      imdb:       '[http://www.imdb.com/title/tt1748122',
      website:    'https://en.wikipedia.org/wiki/Moonrise_Kingdom',
      likes:      837,
      dislikes:   173,
      posterindex: 0
      },
    { 
      title:      'The Avengers', 
      iscore:     8.1,
      rating:     'PG-13',
      runtime:    143,
      released:   new Date('2012', '05', '04'),
      country:    'USA',
      posters:    ['img/avengers1.jpg','img/avengers2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0848228',
      website:    'https://marvel.com/movies/movie/152/marvels_the_avengers',
      likes:      999,
      dislikes:   21,
      posterindex: 0
      }
	
	
  ];
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
      $scope.title  = "IMDB + Sharmi's Top 8 Movies";
      $scope.owner  = "Sharmi";
      $scope.github = "https://github.com/sharmis/IS219Sukhia-P3";
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
	$scope.like = function(index){
    $scope.movies[index].likes += 1;
  };
      
  $scope.dislike = function(index){
    $scope.movies[index].dislikes += 1;
  };

  $scope.posterClick = function(index){
    movie = $scope.movies[index]
    movie.posterindex = (movie.posterindex + 1) % movie.posters.length;  
  };
      
  $scope.timeText = function(minutes){
    return Math.floor(minutes / 60) + 'h ' + minutes % 60 + 'm'
  };
	
}]);
