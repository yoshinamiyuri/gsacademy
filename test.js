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

//
$(function() {
	// 初期表示を非表示にする
    $('#com_result_rock').hide();
    $('#com_result_paper').hide();
    $('#com_result_scissors').hide();
    $('#user_result_rock').hide();
    $('#user_result_paper').hide();
    $('#user_result_scissors').hide();
    
    //クリックされたら、選択した手を表示させる
    $('#user_rock').on('click', function(){
        $('#user_result_rock').show();
        $('#com_result_rock').hide();
        $('#com_result_paper').show();
        $('#com_result_scissors').hide();
        $('#user_result_paper').hide();
        $('#user_result_scissors').hide();
      })

    //クリックされたら、選択した手を表示させる
    $('#user_paper').on('click', function(){
        $('#user_result_paper').show();
        $('#com_result_rock').hide();
        $('#com_result_paper').hide();
        $('#com_result_scissors').show();
        $('#user_result_rock').hide();
        $('#user_result_scissors').hide();
      })   

    //クリックされたら、選択した手を表示させる
    $('#user_scissors').on('click', function(){
        $('#user_result_scissors').show();
        $('#com_result_rock').show();
        $('#com_result_paper').hide();
        $('#com_result_scissors').hide();
        $('#user_result_rock').hide();
        $('#user_result_paper').hide();
      })
    }
);


var gameModule = (function () {

    $(function() {

        // General variables
        var playerChoice,
            computerChoice,
            winner,
            round = 1,
            playerScore = 0,
            computerScore = 0,
            bestOf,
            overallResultClass,
            overallResultText,
            choices = ['rock', 'paper', "scissors"];

        // Decides on whether the computer is playing rock, paper or scissors
        function computerDecision() {
            var randomChoice = Math.floor(Math.random() * choices.length);
            return choices[randomChoice];

            if (randomChoice == 'rock'){
                $('#com_result_rock').show();
                $('#com_result_paper').hide();
                $('#com_result_scissors').hide();
            }
    
            if (randomChoice == 'paper'){
                $('#com_result_paper').show();
                $('#com_result_rock').hide();
                $('#com_result_scissors').hide();
                alert(2222);
            }
    
            if (randomChoice == 'scissors'){
                $('#com_result_scissors').show();
                $('#com_result_paper').hide();
                $('#com_result_rock').hide();
                alert(3333);
    
            }
        }

        // Plays the game
        function playGame(playerChoice) {

            computerChoice = computerDecision();
            round++;

            // Set Choices
            $('.player-choice-icon').attr('class', 'player-choice-icon ' + playerChoice);
            $('.computer-choice-icon').attr('class', 'computer-choice-icon ' + computerChoice);

            winner = decideWinner(playerChoice, computerChoice);

            // Set the values on the screen
            setValues(playerChoice, computerChoice, winner);

        }

        // Sets all the values on the board
        function setValues(playerChoice, computerChoice, winnerText) {

            $('.player-choice').text(playerChoice); // If the player has chosen rock, paper or scissors
            $('.computer-choice').text(computerChoice); // If the computer has chosen rock, paper or scissors
            $('.winner').text(winnerText); // Who won the round
        }
        
        
         // Play the game
        $('.weapon li').on('click', function(e) {

            e.preventDefault();
            playerChoice = $(this).data('weapon');

            $('body').addClass('weapon-chosen');

            playGame(playerChoice);

            if (round > bestOf) {

                endGame();

            }

        });


    })


})


