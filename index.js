
let numberText = document.getElementById("h4")




firstB.onclick = function(){
    numberText.innerHTML = "You clicked First button";
    console.log("capturing", this.tagName)
}
secondB.onclick = function(){
    numberText.innerHTML = "You clicked Second button"
    console.log("capturing", this.tagName)

}

thirdB.onclick = function(){
    numberText.innerHTML = "You clicked Third button"
    console.log("capturing", this.tagName)

}





