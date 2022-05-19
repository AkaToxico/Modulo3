let chiste=document.querySelector("h2");
let actualiar=document.querySelector("button")

actualiar.addEventListener("click", function(e){
    $.getJSON("https://api.chucknorris.io/jokes/random", function (data) {
            let chisteAPI = data.value;
            chiste.innerText = chisteAPI;
        }
    );
})
