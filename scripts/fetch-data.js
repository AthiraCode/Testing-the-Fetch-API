function start() {
    const theButton = document.getElementById('btn-fetch');
    theButton.onclick = handleButton;
}//end start

function handleButton() {
    const theSpan = document.getElementById('output');
    theSpan.innerHTML = "test";

    //perform fetch stuff
    fetchData(theSpan); //fetchData took thespan 
}//end handleButton


function fetchData(theSpan) {
    //  the 'then function' returns a Promise object, 
    //  which resolves as a 
    //  JavaScript object                                    
    //  re-constructed from the JSON itself
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        let content = "";
        json.forEach(person => {
           content += person.name;
           content += " is from ";
           content += person.address.city;
           content += "<br><br>"; //separate people
        }); //end foreach

        //set the content
        theSpan.innerHTML = content;

      });
}

window.onload = start;
