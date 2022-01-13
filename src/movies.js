// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMovies) {
  const newArray = arrMovies.map((currentMovie) =>{
    return currentMovie.director 
  })
  return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  //const evenNumbers = numbers.filter(number => number % 2 === 0);
  // director === "Steven Spielberg"
  // gender === drama - genero drama esta dentro de um array 
  // gender.indexOf() - para acessar o array


 const newArr = arr.filter((currentMovie) => {
   return  currentMovie.genre.includes("Drama") && currentMovie.director === "Steven Spielberg"
 })

 return newArr.length

 // não funcionou com indexOf
 // Prestar atenção na ordem dos fatores

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// Não passou em todos os testes =(  

function scoresAverage(arrScores) {
  if(arrScores.length === 0){ return 0}

  const averageSc = arrScores.reduce((acc, currentMovie) => {
    if(currentMovie.score){
      return acc + currentMovie.score
    }
}, 0) 
    const average = averageSc / arrScores.length
     return Math.round(averageSc) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrDramas) {
    const dramaMovies = arrDramas.filter((currentMovie) => {
      return  currentMovie.genre.includes("Drama")
    })
    const dramaScore = dramaMovies.reduce((acc, currentElement) => {
      return acc + currentElement.score
    }, 0)

    const average = scoresAverage(dramaMovies)

    return average
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrYear) {
  
  const moviesYear = arrYear.sort((a, b) => {
    if(a.year > b.year){ 
      return 1
    } else if(a.year < b.year){ 
      return -1
    } else {
      return a.title.localeCompare(b.title)
    }
    })

    return moviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrOrder) {
  const titles = arrOrder.map((currentMovie) => {
      currentMovie.title
  })
  //titles.sort((a, b) =>{a.title.localeCompare(b.title)
  //})
  titles.sort((a, b) =>{
    if(a.title > b.title) {
      return -1
    } else if(a.title < b.title) {
      return 1
    } else {
      return 0
    }
  })
  const twentyTitles = titles.slice(0,20);

  return twentyTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
