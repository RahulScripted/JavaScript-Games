// Create array of emoji's
const emojis = ["😁","😁","😋","😋","😵‍💫","😵‍💫","🥺","🥺","🎃","🎃","♟️","♟️","🤨","🤨","📙","📙"];

// Randomized array
let shuffleEmoji = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

// Loop to display emojis 
for(let i = 0;i < emojis.length;i++){
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmoji[i];
    document.querySelector('.game').appendChild(box);
}