class Player  {
    constructor () {
        this.turn = false; 
        this.score = 0; 
        this.icon = ''; 
    }
}

let board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]; 

//Declare Players
const playerDragon = new Player(); 
const playerWhiteWalker = new Player(); 

//Determines who goes first 
playerDragon.turn = Math.random() > 0.5; 

// Show picture of who goes first  
if (playerDragon.turn == true) {
    console.log("Player X Turn")
    $('#dragonHeader').html('<img src="sources/dragon2.png" alt="dragon" id="dragonHeader"/> <p>Dragon Turn</p>');
} else {
    console.log("Player O turn")
    $('#walkerHeader').html('<img src="sources/whitewalker.jpg" alt="dragon" id="walkerHeader"/> <p>White Walker Turn</p>'); 
} 


//Top left button
$('#b1').on('click', function () {
   if (playerDragon.turn == true) { 
        showWhiteWalkerTurn(); 
        addDragon('#b1');  
        board[0][0] = 'X'; 
        checkDraonWins();   
        switchTurns(playerWhiteWalker, playerDragon); 
    } else {
        showDragonTurn();  
        addWhiteWalker('#b1'); 
        board[0][0] = 'O'; 
        checkWhiteWalkerWins();  
        switchTurns(playerDragon, playerWhiteWalker); 
    }
})

//Top center button
$('#b2').on('click', function () {
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b2'); 
        board[0][1] = 'X'; 
        checkDraonWins(); 
        switchTurns(playerWhiteWalker, playerDragon); ;
    } else {
        showDragonTurn();  
        addWhiteWalker('#b2'); 
        board[0][1] = 'O'; 
        checkWhiteWalkerWins(); ;
        switchTurns(playerDragon, playerWhiteWalker); 
    }
})

//Top right button
$('#b3').on('click', function () { 
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b3'); 
        board[0][2] = 'X'; 
        checkDraonWins(); 
        switchTurns(playerWhiteWalker, playerDragon); 
    } else {
        showDragonTurn();  
        addWhiteWalker("#b3");  
        board[0][2] = 'O'; 
        checkWhiteWalkerWins(); 
        switchTurns(playerDragon, playerWhiteWalker); 
    }
})

//Middle right button
$('#b4').on('click', function () {
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b4'); 
        board[1][0] = 'X'; 
        checkDraonWins();
        switchTurns(playerWhiteWalker, playerDragon); 

    } else {
        showDragonTurn(); 
        addWhiteWalker('#b4'); 
        board[1][0] = 'O'; ; 
        checkWhiteWalkerWins(); ;
        switchTurns(playerDragon, playerWhiteWalker);
    }
})

//Middle button
$('#b5').on('click', function () {
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b5');  
        board[1][1] = 'X';  
        checkDraonWins(); 
        switchTurns(playerWhiteWalker, playerDragon); 
    } else {
        showDragonTurn();  
        addWhiteWalker('#b5');  
        board[1][1] = 'O';  
        checkWhiteWalkerWins(); ; 
        switchTurns(playerDragon, playerWhiteWalker); 
    }
        
})

//Middle left button
$('#b6').on('click', function () {
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b6'); 
        board[1][2] = 'X';  
        checkDraonWins();
        switchTurns(playerWhiteWalker, playerDragon);  
    } else {
        showDragonTurn(); 
        addWhiteWalker('#b6'); 
        board[1][2] = 'O'; 
        checkWhiteWalkerWins();  
        switchTurns(playerDragon, playerWhiteWalker); 
    }
})

//Bottom left button
$('#b7').on('click', function () {
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b7');  
        board[2][0] = 'X';  
        checkDraonWins();
        switchTurns(playerWhiteWalker, playerDragon);  
    } else {
        showDragonTurn(); 
        addWhiteWalker('#b7'); 
        board[2][0] = 'O'; 
        checkWhiteWalkerWins();  
        switchTurns(playerDragon, playerWhiteWalker); 
    }
})

//Bottom center button
$('#b8').on('click', function () {
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b8'); 
        board[2][1] = 'X'; 
        checkDraonWins();
        switchTurns(playerWhiteWalker, playerDragon);  
    } else {
        showDragonTurn(); 
        addWhiteWalker('#b8'); 
        board[2][1] = 'O'; 
        checkWhiteWalkerWins();  
        switchTurns(playerDragon, playerWhiteWalker); 
    }

})

//Button right button
$('#b9').on('click', function () {
    if (playerDragon.turn == true) {
        showWhiteWalkerTurn(); 
        addDragon('#b9'); 
        board[2][2] = 'X'; 
        checkDraonWins();
        switchTurns(playerWhiteWalker, playerDragon);  
    } else {
        showDragonTurn(); 
        addWhiteWalker('#b9');  
        board[2][2] = 'O'; 
        checkWhiteWalkerWins();  
        switchTurns(playerDragon, playerWhiteWalker); 
    }
})


//Checks to see if Dragon Won
function checkDraonWins() {
    if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {  //Top Row
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
        clearBoard(); 
    } else if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') { //Middle row
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
        clearBoard(); 
    } else if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') { //Bottom row
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
    } else if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') { //Left Column 
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
    } else if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') { //Middle Column
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
    } else if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') { //Right Column 
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
    } else if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') { //Diagonal left to right \
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
    } else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') { //Diagonal right to left /
        playerDragon.score += 1; 
        $('#playerXScore').html(playerDragon.score);
        $('#dragonWonImage').fadeIn(700);
    } else if ($('#b1').is(':disabled') && $('#b2').is(':disabled') && $('#b3').is(':disabled') && $('#b4').is(':disabled') 
              && $('#b5').is(':disabled') && $('#b6').is(':disabled') && $('#b7').is(':disabled') &&
              $('#b8').is(':disabled') && $('#b9').is(':disabled') ) {
        $('#drawImage').fadeIn(700);  //Draw
    }
}

//Checks to see if White Walker won
function checkWhiteWalkerWins() {
    if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') { //Top Row
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') { //Middle row
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') { //Bottom row
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') { //Left Column 
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') { //Middle Column
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') { //Right Column 
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') { //Diagonal left to right \
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') { //Diagonal right to left /
        playerWhiteWalker.score += 1; 
        $('#playerWhiteWalkerScore').html(playerWhiteWalker.score);
        $('#whiteWalkerWonImage').fadeIn(700);
    } else if ($('#b1').is(':disabled') && $('#b2').is(':disabled') && $('#b3').is(':disabled') && $('#b4').is(':disabled') 
                && $('#b5').is(':disabled') && $('#b6').is(':disabled') && $('#b7').is(':disabled') &&
                $('#b8').is(':disabled') && $('#b9').is(':disabled') ) {
            $('#drawImage').fadeIn(700); //Draw
    }
}

function addDragon(id) {  //adds dragon to button clicked 
    $(id).val('X'); 
    $(id).html('<img src="sources/dragon2.png" alt="dragon" style="background-size:cover;" /> '); 
    $(id).prop('disabled', true); 
  
}

function addWhiteWalker(id) { //adds white walker to button clicked 
    $(id).val('O'); 
    $(id).html('<img src="sources/whitewalker.jpg" alt="white walker" style="background-size:cover;" /> '); 
    $(id).prop('disabled', true); 
  
}

function switchTurns(player1, player2) {  //switch players after each button clicked 
    player1.turn = true; 
    player2.turn = false; 
}

function showDragonTurn() { //shows Dragon's Turn picture
    $('#dragonHeader').html('<img src="sources/dragon2.png" alt="dragon" id="dragonHeader"/> <p>Dragon Turn</p>');
    $('#walkerHeader').html(''); 
}

function showWhiteWalkerTurn() { //shows White Walker's Turn picture 
    $('#walkerHeader').html('<img src="sources/whitewalker.jpg" alt="dragon" id="walkerHeader"/> <p>White Walker Turn</p>'); 
    $('#dragonHeader').html('');  
}


$('#reset').on('click', function ()  {  //resets game when button clicked 
    //#b1
    $('#b1').val('1');
    $('#b1').html(''); 
    $('#b1').prop('disabled', false); 
    //#b2
    $('#b2').val('2');
    $('#b2').html(''); 
    $('#b2').prop('disabled', false); 
    //#b3
    $('#b3').val('3');
    $('#b3').html(''); 
    $('#b3').prop('disabled', false); 
    //#b4
    $('#b4').val('4');
    $('#b4').html(''); 
    $('#b4').prop('disabled', false); 
    //#b5
    $('#b5').val('5');
    $('#b5').html(''); 
    $('#b5').prop('disabled', false); 
    //#b6
    $('#b6').val('6');
    $('#b6').html(''); 
    $('#b6').prop('disabled', false); 
    //#b7
    $('#b7').val('7');
    $('#b7').html(''); 
    $('#b7').prop('disabled', false); 
    //#b8
    $('#b8').val('8');
    $('#b8').html(''); 
    $('#b8').prop('disabled', false); 
    //#b9
    $('#b9').val('9');
    $('#b9').html(''); 
    $('#b9').prop('disabled', false);
    board = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    $('#dragonHeader').html(''); 
    $('#walkerHeader').html(''); 
    playerDragon.turn = Math.random() > 0.5; 
    if (playerDragon.turn == true) {
        console.log("Player X Turn")
        $('#dragonHeader').html('<img src="sources/dragon2.png" alt="dragon" id="dragonHeader"/> <p>Dragon Turn</p>');
    } else {
        console.log("Player O turn")
        $('#walkerHeader').html('<img src="sources/whitewalker.jpg" alt="dragon" id="walkerHeader"/> <p>White Walker Turn</p>'); 
    } 
    $('#dragonWonImage').fadeOut(300);
    $('#whiteWalkerWonImage').fadeOut(300);
    $('#drawImage').fadeOut(300);
})
