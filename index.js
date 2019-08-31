// Global Variables(
const content = document.getElementById("content")
const control = document.getElementById("control")
const message = document.getElementById("message")





// Events 

control.addEventListener("click", (event) => {
    //changes the state after startgame button is clicked
    if(event.target.matches(".js-start")){
        const word =  getWord()
        state.play = true
        state.selectedWord = word
        state.displayWord = createBlanks(word)
        state.guesses = []
        state.turns = 6
        render()
        return;
    }
})


//Helpers

const getWord = () =>{
    return state.words[Math.floor(Math.random() * state.words.length)];
}

const createBlanks = (word) => {
    const displayWord = []
    for(let i=0; i < word.length; i++){
         displayWord.push("_ ")
    }
    return displayWord
}

const renderContent = () => {
    return `
     <h4>Remaining Turns:${state.turns}</h4>
     <h4>Incorrect Letters:</h4>
     <p>${state.guesses.join(", ")}</p>
     <p>${state.displayWord.join("")}</p>`;
}

const renderControl = () => {
    return `
    <label>Please enter your letter</label>
    <input type="text" class= "js-input"> 
    <button class ="js-submit">Submit</button>`
}


//State
const state = {
    play: false,
    words: ["apple", "mango", "grapes", "cherries", "lemons"],
    selectedWord: "",
    displayWord: [],
    guesses: [],
    turns: 6
}





//Render
const render = () => {
    if(state.play === false){
        content.innerHTML = "<h2>Welcome to My Game</h2>"
        control.innerHTML = "<button class='js-start'>Start Game</button>"
        message.innerText = "Press start to begin your game"
        return;
    }
    content.innerHTML = renderContent()
    control.innerHTML = renderControl()
    message.innerText = ""
    console.log(state);
    
}
render()