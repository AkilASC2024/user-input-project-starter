let mainTitle = document.getElementById("main_title");
let titleInput = document.getElementById("title_input");
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjcInput = document.getElementById("adjective");
let submitButton = document.getElementById("submit_button");
let form = document.querySelector("form")
let storyResult = document.getElementById("story_result")

function getTitle(event){
    event.preventDefault();
    let titleValue = titleInput.value;
    mainTitle.innerHTML = titleValue;
}
function detectBlanks(event){
    event.preventDefault();
    console.log(titleInput.value)
    if (titleInput.value && nounInput.value && verbInput.value && adjcInput.value) {
        form.style.display = "none"
        storyResult.innerText = "Last night I ate a " + nounInput.value + ", and today I had to " + verbInput.value + ". What a " + adjcInput.value + " day!"
    }
    else {
        alert("do everything")
    }
}    



titleInput.addEventListener("input",getTitle);
submitButton.addEventListener("click", detectBlanks);