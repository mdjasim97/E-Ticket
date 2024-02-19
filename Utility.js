

// function getElementTextById(elementId){
//     const element = document.getElementById(elementId).innerText;
//     return element

// }





function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden")
}