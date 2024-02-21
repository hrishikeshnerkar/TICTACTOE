let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

let winningPtn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let xTurn = true;
let count = 0;

const disableButtons = () => 
{
    btnRef.forEach((element) => 
    {
        element.disabled = true;
    });
    popupRef.classList.remove("hide");
};

const enableButtons = () => 
{
    btnRef.forEach((element) =>
    {
        element.innerText ="";
        element.disabled = false;
    });

    popupRef.classList.add("hide");
};



const winFunction = (letter) =>
{
    disableButtons();
    if(letter == "X")
    {
        msgRef.innerHTML = "🥳 <br> Player1 Wins ";
    }
    else
    {
        msgRef.innerHTML = "🥳 <br> Player2 Wins "
    }
}

const drawFunction = () =>
{
    disableButtons();
    msgRef.innerHTML = " 🤦‍♀️ <br> It's Draw!"
}

newgameBtn.addEventListener("click", () =>
{
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click", () =>
{
    count = 0;
    enableButtons();
});


const winChecker = () => 
{
    for (let i of winningPtn) 
    {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText
        ];
        if (element1 !== "" && element2 !== "" && element3 !== "") 
        {
            if (element1 === element2 && element2 === element3) 
            {
                winFunction(element1);
            }
        }
    }
};

btnRef.forEach((element) => {
    element.addEventListener("click", () => 
    {
        if (xTurn) {
            element.innerText = "X";
        } else {
            element.innerText = "O";
        }
        element.disabled = true; 
        xTurn = !xTurn;
        count += 1;
        if (count == 9) 
        {
            drawFunction();
        }
        winChecker();
    });
    
});

window.onload = enableButtons;
