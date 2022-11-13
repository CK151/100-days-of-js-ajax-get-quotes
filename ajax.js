const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");


function getQuotes(e) {
    e.preventDefault();

    if (number.value.length == 0) {
        return alert("Please enter a number")
    }
    else {
        const https = new XMLHttpRequest();

    https.open("Get", "https://type.fit/api/quotes", true);

    https.onload = function() {
        if (this.status == 200) {

            const response = shuffle(JSON.parse(this.responseText))

            let output = "";
            /*response.forEach(function(quote) {
                output += `
                    <li>Quote: ${quote.text}</li>
                    <li>Quote: ${quote.author}</li>
                    ------------------------------
                `;
            });*/

            for (let i = 0; i < response.length; i++) {
                if (i ==number.value) {break;}
                output += `
                    <li>Quote: ${response[i].text}</li>
                    <li>Authur: ${response[i].author}</li>
                    ------------------------------
                `;
            }

            document.querySelector(".quotes").innerHTML = output;

        }
    }

    https.send()
    }

    
}


// function to shuffle the quotes

function shuffle(quotes) {
    let CI = quotes.length, tempValue, randomIndex;

    // while elements exists in the array

    while (CI >0)  {
        randomIndex = Math.floor(Math.random() * CI);
        //Decrease CI by 1

        CI--;
        //swap the last element with CI

        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes
}