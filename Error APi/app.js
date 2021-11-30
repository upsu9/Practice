var addbtn = document.querySelector("#add");
var subbtn = document.querySelector("#sub");
var mulbtn = document.querySelector("#mul");
var divbtn = document.querySelector("#div");
var errorbtn = document.querySelector("#error");
var erroroutput = document.querySelector("#erroroutput");

//errorbtn.addEventListener("click",errorhandler)

var url = "https://unitube-server.herokuapp.com/playlists"


/* function errorHandler(error) {
    erroroutput.innerText = error
} */

errorbtn.addEventListener("click", () => {
    fetch(url)
        .then(response => {
            console.log(response.status)
            if (response.status === 404) {
                /* throw ("page not found") */
                erroroutput.innerText = "page not found"
            } else if (response.status === 401) {
              //  throw ("you are not loggedzc in")
              erroroutput.innerText = "you are not loggedin"
            }
        })
        
        //.catch(errorHandler)
})



