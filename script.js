let userName = document.getElementById("input-username");
let password = document.getElementById("input-password");
let loginStatus = document.getElementById("login-status");
let loginBtn = document.getElementById("button-login").addEventListener("click", login);

let loginToSee = document.getElementById("login-to-see");
let btnContainer = document.getElementById("btn-container");

let loginRetry = 0;

let catSection = document.getElementById("cats");

function playMeow() {
    var audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

function loadCats(){
    playMeow();

    let catDivContainer = document.createElement("div");
    catDivContainer.className = document.className = "col-3"

    let catDiv = document.createElement("div");
    catDiv.className = "card";

    let catImg = document.createElement("img");
    catImg.className = "card-img-top";
    catImg.src = "https://placekitten.com/200/300";
    let catBody = document.createElement("div");
    catBody.className = "card-body";

    let catTitle = document.createElement("h5");
    catTitle.className = "card-title";
    catTitle.innerHTML = "A cat"
    let catText = document.createElement("p");
    catText.className = "card-text";
    catText.innerHTML = "A cat text"

    catSection.appendChild(catDivContainer);
    catDivContainer.appendChild(catDiv);
    catDiv.appendChild(catImg);
    catDiv.appendChild(catBody);
    catBody.appendChild(catTitle);
    catBody.appendChild(catText);
}

function login(){
    if(userName.value != "gato" || password.value != "1234"){
        if (loginRetry > 0) {
            loginStatus.parentNode.removeChild(loginStatus);
        }
        let error = document.createElement("div");
        error.className = "alert alert-primary p-2 m-2";
        error.innerText = "Incorrect user name or password";
        loginStatus.appendChild(error);
        loginRetry += 1;
    }
    else{
        if (loginRetry > 0) {
            loginStatus.parentNode.removeChild(loginStatus);
        }
        let success = document.createElement("div");
        success.className = "alert alert-primary p-2 m-2";
        success.innerText = "Valid credentials, you can now exit";
        loginStatus.appendChild(success);
        removeButton();
        generateCats();
    }
}

function removeButton(){
    loginToSee.parentNode.removeChild(loginToSee);
}

function generateCats(){
    let catGenerator = document.createElement("button");
    catGenerator.className = "btn btn-primary p-2 m-2";
    catGenerator.innerHTML = "Generate a CAT";

    btnContainer.className = "col-6 d-flex justify-content-center"
    btnContainer.parentNode.className = "row d-flex justify-content-center"
    btnContainer.appendChild(catGenerator);

    catGenerator.addEventListener("click", loadCats)
}