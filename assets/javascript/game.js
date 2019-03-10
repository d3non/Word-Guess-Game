function wordtoguess() {
    //Declare an array of movie names to random
    var movies = ["THE REVENANT", "GREASE", "KILL BILL", "THE GODFATHER", "THE MATRIX", "TITANIC", "ROMA", "SAVING PRIVATE RYAN", "AMELIE" , "DRIVE"];
    //Get a randomize index of the array movie name
    var wordtoguess = movies[Math.floor(Math.random()*movies.length)];
    return wordtoguess;
}

function convertWordtoguess(wordtoguess) {
//Split movie name into letters array
    var letterArray = Array.from(wordtoguess);
    var underscore = "";
    for (i=0; i<letterArray.length; i++){
      underscore += "<li><p id=letter" + i + ">_ </p></li>";
    }

    return underscore;
}

function count(string,char) {
    var re = new RegExp(char,"gi");
    return string.match(re).length;
}