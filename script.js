
function sakthi() {
    var a = ["grebul forsey", "breguet", "patekphillipe", "casio", "invicta", "seiko", "exponi", "titan", "hublot", "fastrack", "rolex"];
    var userInput = document.getElementById("searchInput").value.toLowerCase(); // lowercase nu kudutha small la kuduthalum caps kuduthalumaccept panikom

    if (a.includes(userInput)) {
        console.log("It's a correct input");
        // document.getElementById("suma").innerHTML = "Valid input: " + userInput ;

        // Redirect to another page (change 'newpage.html' to your actual page)
        window.location.href = "colllection.html";
    } else {
        console.log("Wrong input");
        // document.getElementById("suma").innerHTML = "Invalid input!";
        alert( " plese enter the proper brand name");
    }
}

function add() {
    // event.preventDefault();
    a = 10;
    b = 20;

    if (a > b) { }
    else {
        alert(" add to favourite");
    }

}



