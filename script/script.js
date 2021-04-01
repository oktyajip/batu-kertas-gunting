let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector('.user-score');
const compScore_span = document.querySelector('.comp-score');
const hasil_p = document.querySelector('.hasil > p');
const batu_div = document.getElementById('b');
const gunting_div = document.getElementById('g');
const kertas_div = document.getElementById('k');


function getCompChoice() {
    let compChoice = ['b', 'g', 'k'];
    const randomNumber = Math.floor(Math.random()*3);
    return compChoice[randomNumber];
}

function convertToWord(letter) {
    if (letter == 'b') return 'Batu';
    if (letter == 'g') return 'Gunting';
    return 'Kertas'
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user = "(user)".fontsize(3).sub();
    const comp = "(comp)".fontsize(3).sub();
    hasil_p.innerHTML = `${convertToWord(userChoice)}${user} mengalahkan ${convertToWord(compChoice)}${comp} !!! Kamu Menang! Yeay`;
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user = "(user)".fontsize(3).sub();
    const comp = "(comp)".fontsize(3).sub();
    hasil_p.innerHTML = `${convertToWord(compChoice)}${comp} mengalahkan ${convertToWord(userChoice)}${user} !!! Kamu Kalah, Yahhh`;
}

function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user = "(user)".fontsize(3).sub();
    const comp = "(comp)".fontsize(3).sub();
    hasil_p.innerHTML = `${convertToWord(userChoice)}${user} sam-sama ${convertToWord(compChoice)}${comp} !!! kalian Draw, Hehehe`;
}

function game(userChoice) {
    const compChoice = getCompChoice();

    switch(userChoice + compChoice) {
        case 'bg':
        case 'gk':
        case 'kb':
            win(userChoice, compChoice);
            break;
        case 'bk':
        case 'gb':
        case 'kg':
            lose(userChoice, compChoice);
            break;
        case 'bb':
        case 'gg':
        case 'kk':
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    batu_div.addEventListener('click', function() {
        game('b');
    });
    
    gunting_div.addEventListener('click', function() {
        game('g');;
    });
    
    kertas_div.addEventListener('click', function() {
        game('k');;
    });
}


main();
