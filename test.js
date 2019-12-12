// console.log("はじめてのJava script")
// console.log(3);
// console.log(3+2);
// console.log(23+5);
// console.log(2000-1800);
// console.log("18 + 5");
// alert(1111);

//htmlの中身を書き換える
// $("#a").html("bbbb");
// $("#a").fadeOut(5000);

// //クリックされたら何かをする
// $("#a").on("click", function(){
//     //クリックされたら、おみくじを表示させる
//     var  point=Math.floor(Math.random() *30);

//     if(point >= 20){
//         $("#a").html('<img src="Doraemon.PNG" alt="doraemon" width="42" height="42">');
//     }
//     else if(point <= 15){
//         $("#a").html("今日はいまいちだね");
//     }
//     else{
//         $("#a").html("うん、いつもと同じ")
//     }
// });

    // General variables
    var choices = ['rock', 'paper', "scissors"];

    var firebase = require('firebase');
    
    var firebaseui = require('firebaseui');

$(document).ready(function(){
    $("#user_paper").click(function(){
        // Change src attribute of image
        $("#user_result_rock").attr("src", "");
        $("#user_result_scissors").attr("src", "");
        $("#user_result_paper").attr("src", "paper.PNG");
        var dataId = $(this).attr("data-id");
        alert("The data-id of clicked item is: " + dataId);
        computerDecision();
    });    
});


$(document).ready(function(){
    $("#user_scissors").click(function(){
        // Change src attribute of image
        $("#user_result_scissors").attr("src", "scissors.PNG");
        $("#user_result_rock").attr("src", "");
        $("#user_result_paper").attr("src", "");
        var dataId = $(this).attr("data-id");
        alert("The data-id of clicked item is: " + dataId);
        computerDecision();
    });    
});

$(document).ready(function(){
    $("#user_rock").click(function(){
        // Change src attribute of image
        $("#user_result_paper").attr("src", "");
        $("#user_result_scissors").attr("src", "");
        $("#user_result_rock").attr("src", "rock.PNG");
        var dataId = $(this).attr("data-id");
        alert("The data-id of clicked item is: " + dataId);
        computerDecision();
    });    
});


var wintimes = 0;
var tiestimes = 0;
var losttimes = 0;

document.getElementById('win').innerHTML = wintimes;
document.getElementById('lost').innerText = losttimes;
document.getElementById('ties').textContent = tiestimes;

var userrock = document.getElementById('user_result_rock'); 
var userpaper = document.getElementById('user_result_paper');
var userscissors = document.getElementById('user_result_scissors');

//var gameModule = (function () {

    //$(function() { //DOM要素が全部読み込まれたときに、実行するのが必要

        // Decides on whether the computer is playing rock, paper or scissors
        function computerDecision() {
            var randomChoice = Math.floor(Math.random() * choices.length);
            console.log(randomChoice)
                
            if (choices[randomChoice] == 'rock'){
                $("#com_result_paper").attr("src", "");
                $("#com_result_scissors").attr("src", "");
                $("#com_result_rock").attr("src", "rock.PNG");
            }
    
            if (choices[randomChoice] == 'paper'){
                $("#com_result_paper").attr("src", "paper.PNG");
                $("#com_result_scissors").attr("src", "");
                $("#com_result_rock").attr("src", "");
                // if (userrock.src = "rock.PNG") {
                //     losttimes++;
                // }
                // if (userscissors.src = "scissors.PNG") {
                //     wintimes++;
                // }
                // if (userpaper.src = "paper.PNG") {
                //     tiestimes++;
                // }  
                
            }
    
            if (choices[randomChoice] == 'scissors'){
                $("#com_result_paper").attr("src", "");
                $("#com_result_scissors").attr("src", "scissors.PNG");
                $("#com_result_rock").attr("src", "");
                // if (userrock.src = "rock.PNG") {
                //     wintimes++;
                // }
                // if (userscissors.src = "scissors.PNG") {
                //     tiestimes++;
                // }
                // if (userpaper.src = "paper.PNG") {
                //     losttimes++;
                // }    
                    
            }
            return choices[randomChoice]; 
            //return以降は実施されないので、一番最後に記載する
        }


        //勝敗・引き分けの計算をして、表示させたい

        $(document).ready(function(){
            $(".user input img").on("click", function(){
                var dataId = $(this).attr("data-id");
                alert("The data-id of clicked item is: " + dataId);
            });
        });


        // function calculation(){
        //     $(".user input img").on("click", function(){
        //         var dataId = $(this).attr("data-id");
        //         }




        //     });
        // }

    
        
// if (dataId = 1 && userrock.src = "rock.PNG") {

//     tiestimes++;
//     console.log(tiestimes)
//     }


// if () {

// }
// if (userscissors.src = "scissors.PNG") {
// losttimes++;
// console.log(losttimes)
// }
// if (userpaper.src = "paper.PNG") {
// wintimes++;
// console.log(wintimes)
// }  






        // // Plays the game
        // function playGame(playerChoice) {

        //     computerChoice = computerDecision();
        //     round++;

        //     // Set Choices
        //     $('.player-choice-icon').attr('class', 'player-choice-icon ' + playerChoice);
        //     $('.computer-choice-icon').attr('class', 'computer-choice-icon ' + computerChoice);

        //     winner = decideWinner(playerChoice, computerChoice);

        //     // Set the values on the screen
        //     setValues(playerChoice, computerChoice, winner);

        // }

        // // Sets all the values on the board
        // function setValues(playerChoice, computerChoice, winnerText) {

        //     $('.player-choice').text(playerChoice); // If the player has chosen rock, paper or scissors
        //     $('.computer-choice').text(computerChoice); // If the computer has chosen rock, paper or scissors
        //     $('.winner').text(winnerText); // Who won the round
        // }
        
        
        //  // Play the game
        // $('.weapon li').on('click', function(e) {

        //     e.preventDefault();
        //     playerChoice = $(this).data('weapon');

        //     $('body').addClass('weapon-chosen');

        //     playGame(playerChoice);

        //     if (round > bestOf) {

        //         endGame();

        //     }

        // });


    //})


//})


