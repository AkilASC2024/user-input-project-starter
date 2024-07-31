let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjcInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");

function getTitle(event){
    event.preventDefault();
    let titleValue = titleInput.value;
    mainTitle.innerHTML = titleValue;
}
function detectBlanks(event){
    event.preventDefault();
    console.log(titleInput.value)
    if (titleInput.value) {
    }
    else {
        alert("do everything")
    }
}    



titleInput.addEventListener("input",getTitle);
submitButton.addEventListener("click", detectBlanks);