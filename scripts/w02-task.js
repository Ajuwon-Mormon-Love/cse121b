/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Emmanuel Ajuwon";

let currentYear = new Date(year);

let profilePicture = `images/profile-pic.png`;


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;


yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile picture of ${fullName}`);

/* Step 5 - Array */

let favFood = ["White Rice", "Beans", "Plantain"];

foodElement.textContent = favFood;

let favFood2 = ["Grilled Line Fish"];

favFood.push(favFood2);

foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();

foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();

foodElement.innerHTML += `<br>${favFood}`;
