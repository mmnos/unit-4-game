// these variables hold the wins, losses, and total score
let wins = 0;
let losses = 0;
let totalScore;

// gets a random number between 19-120
let randNum = Math.floor(Math.random() * 101) + 19;

// generates and returns a random number between 1-12
function imgPoints() {

    let randImgNum = Math.floor(Math.random() * 12) + 1;
    return randImgNum;
    
};

// updates the users wins and displays them on the page
function win() {
    
    wins++;
    $("#win").html("Wins : " + wins);
    
};

// updates the users losses and displays them on the page
function lose() {
    
    losses++;
    $("#lose").html("Losses : " + losses);
    
};

// used to set a new game up by setting the score to 0
function score() {

    totalScore = 0;
    $("#totalScore").html("Your Score : " + totalScore);

};

// displays a random number for the user to try and match
function randScore() {

    $("#randNumber").html(`Goal : ${randNum}`);

}

// resets the game with new random numbers
function reset() {

    randNum = Math.floor(Math.random() * 101) + 19;
    imgPoints();
    score();
    randScore();
    // adds an attribute of data to the imagePoints class which holds a random #
    $(".imgPoints").attr("data-imgValue", imgPoints);

}

// calls the reset once the page is loaded to make sure the numbers are generated
reset();

// the content below once the page has fully loaded
$(document).ready(function() {

    // once the mouse button is clicked, the code below will execute
    $(".imgPoints").on("click", function() {
        
        // assigns the imgValue attribute to a variable which can than be used
        // to get the integer value and store it in the total score
        let imageValue = ($(this).attr("data-imgValue"));
        imageValue = parseInt(imageValue);
        totalScore += imageValue;
        $("#totalScore").html("Your Score : " + totalScore);

        // whether or not the user has won or lost
        // the game will be reset with the appropriate counters being incremented
        if (totalScore === randNum) {
            win();
            reset();
        } else if (totalScore > randNum){
            lose();
            reset();
        }
    
    });

});