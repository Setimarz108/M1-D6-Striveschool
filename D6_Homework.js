/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];


const writeHeader = function(title) {
  console.log(`\n\n>------------==[ ${title.toUpperCase()} ]==------------<`)

  }
// JS Basics
writeHeader('JS Basics')

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
writeHeader('Variable Test')

let test = 'This is a test';
console.log(test)
/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

writeHeader('Sum of 10 + 20')

let sum = 10 + 20
console.log(sum)

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
writeHeader('create a random number')

let random = Math.floor(Math.random() * 20 )
console.log(random)
/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

writeHeader('create an object')

let me = {
    name: 'Sebastian',
    surname: 'Marquez',
    age: '35'
}

console.log(me)
/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/
writeHeader('Delete Age from Object')

delete me.age;
console.log(me)

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
writeHeader('Add an array as a property')

 me.skills = ['Javascript', 'CSS', 'HTML'];


console.log(me)
/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
writeHeader('remove the last element of the skills array')

 me.skills.pop()
console.log(me)

// JS Functions

writeHeader('JS functions')
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
writeHeader('dice')

const dice = function () {

  return Math.floor(Math.random() * 6) +1

}

console.log(dice());

/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

writeHeader('Who´s bigger?')
const whoIsBigger = function (a,b){

  if(a < b){
    return `${b} is greater than ${a}`;
  }else if (b < a){
   return `${a} is greater than ${b}`;
  }else{
    return 'the numbers are equal';
  }
};

console.log(whoIsBigger(1,10));

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

writeHeader('Splitme')

const splitMe = function (string) {
    
         return string.split(' ');
        
}

console.log(splitMe('This is test and I ran out of creativity. lol'))

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
writeHeader('delete one')

const deleteOne = function(string,boolean) {
      
      let removeLast = string.slice(0,string.length - 1)

        if(boolean === true){
          return string.slice(1);
        }else {
          return removeLast
        }
}

console.log(deleteOne('TTestingg', true))


/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/

writeHeader('Only letters')
const onlyLetters = function(string){

            return string.replace(/\d+/g, '')
}

console.log(onlyLetters('I was born in 1986 and I´m now 35 years old. The current year is 2021.'))

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/
writeHeader('Verify Email')
const isThisAnEmail = function(string){

          let validEmail = /^[^\s@]+@[^\s@]+$/;

          if( validEmail.test(string)){
                
            return `${string} is a valid Email.`;    
          }else{
            return false
          }
}

console.log(isThisAnEmail('jangmail.com'))

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/
writeHeader('Current Day')
const whatDayIsIt = function() {
        
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let date = new Date();
        let weekDay = date.getDate()

        return daysOfTheWeek[weekDay]

}

console.log(whatDayIsIt());



/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
writeHeader('roll the dices')

       const rollTheDices = function (num) {
               
                let randomNum = dice()                
                let sum = randomNum + num;
               
                let obj = {
                  sum: sum,
                  values: [],
                }

                obj.values.push(num, randomNum , sum)

                 return  obj;
       }

       console.log(rollTheDices(6))
/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
writeHeader('How many days')

  let firstDate = new Date(2020, 1, 11);
  let secondDate = new Date(2021, 1, 11);

const howManyDays = function(){

  let firstDate = new Date(2020, 1, 11);
  let secondDate = new Date(2021, 1, 11);
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
  return  `Between ${firstDate} and ${secondDate} ${diffDays} days has passed`

}

console.log(howManyDays())



/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

writeHeader('is today is my birthday?')

const isTodayMyBirthday = function(date){
  
  
  let isTodayMyBirthday = new Date('September 5, 1986')
  
  return date.getDate() === isTodayMyBirthday.getDate() && date.getMonth() === isTodayMyBirthday.getMonth 
         && date.getFullYear() === isTodayMyBirthday.getFullYear()
}

console.log(isTodayMyBirthday(new Date('September 5, 1999')))
console.log(isTodayMyBirthday(new Date('September 5, 1986')))

writeHeader('JS Arrays & Objects')
// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/

writeHeader('Delete Props')

const deleteProp = (obj1,string) => {
 
        if(obj1.name === string){
          delete obj1.name 
          return obj1
        } else{
          return 'names does not match.'
        }

}

console.log(deleteProp('Sebastian'))

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
writeHeader('Oldest Movie')
/*const oldestMovie = function(){

  for (let i = 0; i < movies.length; i++){

       if(movies[i].Year <= '1950'){
         return movies[i].Title;
       }
  }

}

console.log(oldestMovie())*/

/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/
writeHeader('Number of movies')

const countMovies = function () {
      
  let numberOfMovies =  movies.length;
  return numberOfMovies;
}

console.log(countMovies())

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/

writeHeader('Only the titles')
const onlyTheTitles = function() {
  
  let titles = []

   titles.push(movies.length.Title);

   return titles;
  
}

console.log(onlyTheTitles())

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

const onlyInThisMillennium = function(){
   
  for(let i=0; i< movies.length; i++){
      
    if( movies[i].Title >= '2001'){

      return movies[i];
    }else{
      return false;
    }
      
    }
  
}

console.log(onlyInThisMillennium())
/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/

const getMovieById = function(id){

  if(id === movies.imdbID){
    return movies.Title;

  }else{
    'invalid ID'
  }
}

console.log(getMovieById("tt4154796"))
/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */





