// these variables hold the wins, losses, and total score
let wins = 0;
let losses = 0;
let totalScore;

// gets a random number between 19-120
let randNum = Math.floor(Math.random() * 101) + 19;

function imgPoints() {

    // gets a random number between 1-12
    let randImgNum = Math.floor(Math.random() * 12) + 1;
    return randImgNum;
    
};


function win() {
    
    wins++;
    $("#win").html("Wins : " + wins);
    
};

function lose() {
    
    losses++;
    $("#lose").html("Losses : " + losses);
    
};

function score() {

    totalScore = 0;
    $("#totalScore").html("Total Score : " + totalScore);

};

function randScore() {

    $("#randNumber").html(randNum);

}

function reset() {

    randNum = Math.floor(Math.random() * 101) + 19;
    imgPoints();
    score();
    randScore();
    // adds an attribute of data to the imagePoints class which holds a random #
    $(".imgPoints").attr("data-imgValue", imgPoints);

}

reset();


$(document).ready(function() {

    $(".imgPoints").on("click", function() {
    
        let imageValue = ($(this).attr("data-imgValue"));
        imageValue = parseInt(imageValue);
        totalScore += imageValue;
        $("#totalScore").html("Total Score : " + totalScore);


        if (totalScore === randNum) {
            win();
            reset();
        } else if (totalScore > randNum){
            lose();
            reset();
        }
    
    });

});
