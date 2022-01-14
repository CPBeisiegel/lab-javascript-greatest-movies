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
 //const evenNumbers = numbers.filter(number => number % 2 === 0);
  // director === "Steven Spielberg"
  // gender === drama - genero drama esta dentro de um array 
  // gender.indexOf() - para acessar o array
function howManyMovies(arr) {
  const newArr = arr.filter((currentMovie) => {
   return  currentMovie.genre.includes("Drama") && currentMovie.director === "Steven Spielberg"
 })

 return newArr.length

 // não funcionou com indexOf
 // Prestar atenção na ordem dos fatores

}

// Solução Ale

/* function howManyMovies(arr) {
  let result = 0;
  // Essa const é nossa array filtrada, so com filmes do spilberg
  const onlySpielberg = arr.filter((currentMovie) => {
    return currentMovie.director === "Steven Spielberg"
  })
  
  for (let i = 0; i < onlySpielberg.length; i++){
    //onlySpielberg[0].genre
    for (let j = 0; j < onlySpielberg[i].genre.length; j++){
    //onlySpielberg[0].genre[0]
    //onlySpielberg[0].genre[1]
    //onlySpielberg[0].genre[2]
      if (onlySpielberg[i].genre[j] === "Drama"){
        result++
      }
      
    }
  }
   return result
}
howManyMovies(movies) */

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

// Não passou em todos os testes =(  

 // Solução Anna 
/*  function scoresAverage(average) {  let sumScore = 
  average.reduce((accumulator, current) => 
  {    return accumulator + current.score  },0)  
  
  return (sumScore / average.length).toFixed(2)} */
  


// Minha solução para ajeitar

function scoresAverage(arrScores) {
   const averageSc = arrScores.reduce((acc, currentMovie) => {
    if(currentMovie.score){
      return acc + currentMovie.score
    }
}, 0) 
    const average = averageSc / arrScores.length
     return Math.round(averageSc) 
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Solução Anna 
// Pensar na solução como tudo resolvido em uma única linha  

/* function dramaMoviesScore(dramaMovie) {
  let howMany =  dramaMovie
                           .filter(current => current.genre.indexOf('Drama') !== -1)
                          .reduce((acc, crr) => acc + crr.score, 0)
   return (howMany / dramaMovie.length).toFixed(2)
  }  */

// Minha solução para ajeitar 

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
// Resolução refatorada 
 function orderByYear(arrYear) {
  const moviesYear = [...arrYear]

   return moviesYear.sort((movie1, movie2) => {
    if(movie1.year > movie2.year){ 
      return 1
    } else if(movie1.year < movie2.year){ 
      return -1
    } else {
      return movie1.title.localeCompare(movie2.title)
    }
    })

  
} 

// Solução Ale correta 

/* function orderByYear(arr) {
  const newArr = [...arr]
  
  return newArr.sort((movie1, movie2) => {
    if (movie1.year > movie2.year){
      return 1
    } else if (movie1.year < movie2.year) {
      return -1
    } else {
      return movie1.title.localeCompare(movie2.title)
    }
  })
} */


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//Solução com erro 

//function orderAlphabetically(arrOrder){
//  const result = arrOrder.map((currentMovie) =>  currentMovie.title)
//  const result2 = result.sort((a, b) =>a.localeCompare(b))
 /*  titles.sort((a, b) =>{
    if(a.title > b.title) {
      return -1
    } else if(a.title < b.title) {
      return 1
    } else {
      return 0
    }
  }) */
 // return result2.splice(0, 20)
//}

// Solução certa 
 function orderAlphabetically(arr) {
  const result = arr.map((currentMovie) => currentMovie.title);
  result.sort((a, b) => a.localeCompare(b))
  
  return result.splice(0, 20)
  
} 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrHours) {
  // duration of the movies from hours to minutes

}

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
