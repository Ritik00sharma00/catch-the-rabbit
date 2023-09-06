console.log("connected")

const imgClick = () => { score++; scoreBoard.innerHTML=`${score}`;}
let rabbitHole = document.getElementsByClassName('circle');
let playButton = document.getElementById('play');

let scoreBoard = document.getElementById('score');


function play() {
    scoreBoard.style.display="block";
    playButton.style.display = 'none';
    score = 0;

    let gametime = 0;

    let diver = document.createElement("div");

    let inst = setInterval(() => {
        diver.innerHTML = `<input type="image" id="img" onclick="imgClick()" src="./Cartoon-rabbit-character-on-transparent-background-PNG-removebg-preview.png" alt="">`;
        
        let x = Math.floor(Math.random() * 10);
        console.log(x);
        rabbitHole[x].innerHTML = `${diver.innerHTML}`;
        setTimeout(() => {
            //  clearInterval(inst)
            rabbitHole[x].innerHTML = ''
        }, 1500)

        gametime++;

        console.log("this is game time" + gametime)
        if (gametime >= 30) {
            alert("Game over!! your score is "+`${score}`);
            clearInterval(inst);
            playButton.style.display = 'block';
            
            scoreBoard.style.display="none";

        }
    }, 1500);
}


// document.getElementById('img').addEventListener('click',imgClick)
// .addEventListener('click',()=>{console.log("hello")});

// rabbitHole.innerHtml+=`   <input type="image" id="img" src="./Cartoon-rabbit-character-on-transparent-background-PNG-removebg-preview.png" alt="">`