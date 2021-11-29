const numRange = document.querySelector(".num_range");
const numGuess = document.querySelector(".num_guess");
const yourNum = document.querySelector(".your_num");
const machineNum = document.querySelector(".machine_num");
const result = document.querySelector(".result");

//button
const numSubmit = document.querySelector(".random");


function playsubmit(event) {
    event.preventDefault();
    const randomNum = numRange.value;
    const choseNum = numGuess.value;
    const choseMachine = Math.floor(Math.random() * randomNum);
    yourNum.innerText = `You chose: ${choseNum},`;
    machineNum.innerText = `the machine chose: ${choseMachine}.`;
    console.log(choseNum);
    console.log(choseMachine);
    if (parseInt(choseNum) === choseMachine) {
        result.innerText = "You won!";
    } else{
        result.innerText = "You lost!";
    };
};

numSubmit.addEventListener("submit", playsubmit);
