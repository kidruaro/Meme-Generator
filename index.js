const img = document.querySelector("#imgLink");
const form = document.querySelector("#add-meme");
const memeList = document.querySelector("#list");
const topText = document.querySelector('#topText');
const botText = document.querySelector('#botText');
let empty = false;

memeList.addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName == 'BUTTON'){
        e.target.parentElement.remove();
    }
})

form.addEventListener('submit', function(e){
    console.log(img.innerText);
    e.preventDefault();
    
    if(img.value == '' || topText.value == '' || botText.value == ''){
        alert("All forms must be filled out!")

       return;
    }

    const newImgDiv = document.createElement('div');
    const newMeme = document.createElement('img');
    const topDiv = document.createElement('div');
    const botDiv = document.createElement('div');
    const removeBtn = document.createElement('button');

    newMeme.src = img.value;
    
    newImgDiv.id = 'meme';

    topDiv.id = 'TOP';
    topDiv.innerText = topText.value;

    botDiv.id = 'BOT';
    botDiv.innerText = botText.value;

    removeBtn.id = 'remove';
    removeBtn.innerText = 'X';

    memeList.appendChild(newImgDiv);
    generateMeme(newMeme,newImgDiv);
    newImgDiv.appendChild(topDiv);
    newImgDiv.appendChild(botDiv);
    newImgDiv.appendChild(removeBtn);

    form.reset();
})

function generateMeme(img,div){
    img.width = "400";
    img.height = "400";

    div.appendChild(img);
}