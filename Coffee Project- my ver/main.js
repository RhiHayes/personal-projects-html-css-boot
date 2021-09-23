"use strict"

/* Displays Coffees on page  */

function renderCoffee(coffee) {
    var html = '<div class="col col-padding">';
    html += '<div class="noId">' + coffee.id + '</div>';
    html += '<p>' + coffee.name + '&nbsp;' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

/* Loops through the coffees array  */

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

/* Bonus */

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// var buildSearch = document.getElementById("search-2");
//
// buildSearch.addEventListener('keyup', updateCoffees)

/* Coffees Array  */

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

/* Variables to use later, target ids  */

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees.reverse());

// submitButton.addEventListener('click', updateCoffees);



var search = document.getElementById('search');

search.addEventListener('keyup', function(e){
    var userInput = search.value.toLowerCase()
    var matchingCoffees = []
    for (var i = 0; i < coffees.length; i++) {
        if(coffees[i].name.toLowerCase().startsWith(userInput)){
            matchingCoffees.push(coffees[i])
        }
    }
    tbody.innerHTML = renderCoffees(matchingCoffees)
})


/* ROAST SELECTOR SECTION */


var searchRoast = document.getElementById("roast-selection");

searchRoast.addEventListener('mouseout', function(e){
    var userInput2 = searchRoast.value.toLowerCase()
    var matchingCoffees2 = []
    for (var i = 0; i < coffees.length; i++) {
        if(coffees[i].roast.toLowerCase().startsWith(userInput2)){
            matchingCoffees2.push(coffees[i])
        }
    }
    tbody.innerHTML = renderCoffees(matchingCoffees2)
})

var search2 = document.getElementById('search-2');
var buildText = document.getElementById("submit");
var searchRoast2 = document.getElementById("roast-selection-2");
buildText.addEventListener('click', function (e) {
    e.preventDefault()
    var coffeeInput = search2.value
    var pickRoast2 = searchRoast2.value
    var newCoffee = {
        name:coffeeInput,
        roast:pickRoast2,
    }

    coffees.push(newCoffee)

    tbody.innerHTML = renderCoffees(coffees)

    console.log(coffees)
})


// localStorage.setItem(coffees)

//go back and look at my library project


//red
//userinput captures the value of the input field = (search bar) = 'search' that you type in and lowercases it

//if statement
//coffees[i].name = the name of the coffee at [i] of coffees
//the tolowerCase targets the name of the coffee at position [i] in coffees
//
//

// The startsWith() method returns true if a string begins with a specified string, otherwise false.
// the includes() method returns true if a string contains a specified string, otherwise false.
// for (let coffee of coffees) {
//     console.log(coffee.name)
// }


//key stroke
// key up and key down
//use an array when creating a function
// input.addEventListener('search', () => {
//
// })