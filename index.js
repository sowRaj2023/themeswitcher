let inputEl = document.getElementById("input");
let mainContainerEl = document.getElementById("mainContainer");

let lightTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkTheme = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";


function darkOrLight(event){
    if(event.key === "Enter"){
    let inputEls = inputEl.value;
    
        if(inputEls==="Light"){
            mainContainerEl.style.backgroundImage =lightTheme;
            
        }else if(inputEls==="Dark"){
            mainContainerEl.style.backgroundImage =darkTheme;
            

        }else{
            alert("Enter value")
        }
    }

}

inputEl.addEventListener("keydown",darkOrLight)