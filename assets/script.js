var movieApiUrl = "http://www.omdbapi.com/";
var movieApiKey = "e830d49f";
const searchTerm = "horror";
const romancehTerm ="romance";
const comedyTerm ="comedy";
const actionTerm ="action";
const type = "movie";
const url = `${movieApiUrl}?apikey=${movieApiKey}&s=${searchTerm}&type=${type}`;
const url1 = `${movieApiUrl}?apikey=${movieApiKey}&s=${romancehTerm}&type=${type}`;
const url2 = `${movieApiUrl}?apikey=${movieApiKey}&s=${comedyTerm}&type=${type}`;
const url3 = `${movieApiUrl}?apikey=${movieApiKey}&s=${actionTerm}&type=${type}`;
// Wrap whole fetch call that takes in url and a random number.
function getMovie(num) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Wrap all below code with for loop 6 times
      console.log(data);
      var randomMovie = data.Search[num];
      var movieId = randomMovie.imdbID;

      // Get the title and plot of the random movie
      return fetch(
        `${movieApiUrl}/?apikey=${movieApiKey}&i=${movieId}&plot=short`
      );
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var movieTitle = data.Title;
      var moviePlot = data.Plot;
      var titleElement = document.getElementById("title" + num);
      titleElement.textContent = movieTitle;
      var plotElement = document.getElementById("plot" + num);
      plotElement.textContent = moviePlot;
    })
    .catch(function (error) {
      console.error(error);
    });
}
getMovie(1);
getMovie(2);
getMovie(3);
getMovie(4);
getMovie(5);
getMovie(6);

function getRomance(num) {
const romanceButton = document.getElementById('romance');
romanceButton.addEventListener('click', function() {
  console.log('Romance button clicked!');
  fetch(url1)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Wrap all below code with for loop 6 times
    console.log(data);
    var randomMovie = data.Search[num];
    var movieId = randomMovie.imdbID;

  return fetch(`${movieApiUrl}?apikey=${movieApiKey}&t=${romance}&i=${movieId}`);
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  var movieTitle = data.Title;
  var moviePlot = data.Plot;
  var titleElement = document.getElementById("title" + num);
  titleElement.textContent = movieTitle;  
  var plotElement = document.getElementById("plot" + num);
  plotElement.textContent = moviePlot;  
})
.catch(function (error) {
  console.error(error);
})
})
}
getRomance(1);
getRomance(2);
getRomance(3);
getRomance(4);
getRomance(5);
getRomance(6);

function getComedy(num) {
  const comedyButton = document.getElementById('comedy');
  comedyButton.addEventListener('click', function() {
    console.log('comedy button clicked!');
    fetch(url2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Wrap all below code with for loop 6 times
      console.log(data);
      var randomMovie = data.Search[num];
     var movieId = randomMovie.imdbID;
  
    return fetch(`${movieApiUrl}?apikey=${movieApiKey}&s=${comedy}&type=${type}&i=${movieId}&plot=short`);
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var movieTitle = data.Title;
    var moviePlot = data.Plot;  
    var titleElement = document.getElementById("title" + num);  
    titleElement.textContent = movieTitle;  
    var plotElement = document.getElementById("plot" + num);  
    plotElement.textContent = moviePlot;
  })
  .catch(function (error) {
    console.error(error);
  })  
  })
  }
  
  getComedy(1);
  getComedy(2);
  getComedy(3);
  getComedy(4);
  getComedy(5);
  getComedy(6);

  function getAction(num) {
    const actionButton = document.getElementById('action');
    actionButton.addEventListener('click', function() {
      console.log('action button clicked!');
      fetch(url3)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Wrap all below code with for loop 6 times
        console.log(data);
        var randomMovie = data.Search[num];
        var movieId = randomMovie.imdbID;    
      return fetch(`${movieApiUrl}?apikey=${movieApiKey}&s=${action}&type=${type}&i=${movieId}&plot=short`);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var movieTitle = data.Title;
      var moviePlot = data.Plot;    
      var titleElement = document.getElementById("title" + num);    
      titleElement.textContent = movieTitle;
      var plotElement = document.getElementById("plot" + num);    
      plotElement.textContent = moviePlot;
    })
    .catch(function (error) {
      console.error(error);    
    })    
    })
    }    
    getAction(1);
    getAction(2);
    getAction(3);
    getAction(4);
    getAction(5);
    getAction(6);
    
const searchInput = document.getElementById("search");

// Add event listener for key press on search input
searchInput.addEventListener("keyup", function (event) {
  // Check if enter key is pressed (keyCode 13)
  if (event.keyCode === 13) {
    // Call your function here
    window.location = "./index2.html";
  }
  window.onload = function(){
    searchMovies();
  }
});

function searchMovies() {
  var searchTerm = searchInput.value;
  //var movieId = searchInput.value;
  console.log("you have entered " + searchTerm);

 var apiUrl = `${movieApiUrl}?apikey=${movieApiKey}&t=${searchTerm}`;
  //var apiurl = `${movieApiUrl}?apikey=${movieApiKey}&s=$`
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extract the movie information from the response
      var movieTitle = data.Title;
      var moviePlot = data.Plot;

      // Display the movie information on the page
      var titleElement = document.getElementById("title-src");
      titleElement.textContent = movieTitle;

      var plotElement = document.getElementById("plot-src");
      plotElement.textContent = moviePlot;
      console.log(moviePlot);
    })
}
