// these variables hold the wins, losses, and total score
let wins;
let losses;
let totalScore;

// gets a random number between 19-120
let randNum = Math.floor(Math.random() * 102) + 19;

function imgPoints() {

    // gets a random number between 1-12
    let imgRandNum = Math.floor(Math.random() * 12) + 1;
    return imgRandNum;
    
};


function win() {
    
    wins++;
    $("#win").append("Wins : " + wins);
    
};

function lose() {
    
    losses++;
    $("#lose").append("Losses : " + losses);
    
};

function score() {

    totalScore++;
    $("#totalScore").append("Total Score : " + totalScore);

};

function randScore() {

    $("#randNumber").append(randNum);

}

console.log(imgPoints());
console.log(win());
console.log(lose());
console.log(score());
console.log(randScore());

$(".imgPoints").attr("data-imgValue", imgPoints);

$(document).ready(function() {

    $(".imgPoints").on("click", function(){
    
        let imageValue = ($(this).attr("data-imgValue"));
        imageValue = parseInt(imageValue);
        console.log(imageValue);
    
    });

});
