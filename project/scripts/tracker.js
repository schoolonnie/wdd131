const input = document.querySelector('#game-name');
const button = document.querySelector('#add-game');
const list = document.querySelector('#list');
const sendName = document.querySelector('#send-name');
const sendData = document.querySelector('#send-data');


let gamesArray = getGameList() || [];

gamesArray.forEach(game => {
  displayList(game);
});

button.addEventListener('click', function() {
    if (input.value.trim() === '') {
        alert('Please enter a game name.');
        input.focus();
    }
    else if (list.textContent.includes(input.value.trim())) { 
        alert('This game is already in the list.');
        input.value = '';
        input.focus();
    }
    else {
        displayList(input.value);
        gamesArray.push(input.value);
        setGameList();
        input.value = '';
        input.focus();
    }
});

sendData.addEventListener('click', function(){
    if (gamesArray.length === 0) {
        alert('The game list is empty.')
    }
    else if (sendName.value === '') {
        alert('Please provide a name.')
    }
    else {
        const name = sendName.value;
        const gameList = gamesToTextList();
        let textMsg = `${name}, here is your game list:
${gameList}`;
        downloadTxtFile(textMsg);
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete')

    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteGame(li.textContent);
        input.focus();
    });
}

function setGameList() {
    localStorage.setItem('gameList', JSON.stringify(gamesArray));
}

function getGameList() {
    return JSON.parse(localStorage.getItem('gameList'));
}

function deleteGame(game) {
    game = game.slice(0, game.length - 1);
    gamesArray = gamesArray.filter((item) => item !== game);
    setGameList();
}

function gamesToTextList() {
    return gamesArray.join('\n');
}

function downloadTxtFile(content) {
    const blob = new Blob([content], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'gameList.txt';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}