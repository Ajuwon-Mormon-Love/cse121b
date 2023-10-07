/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Emmanuel Ajuwon",
    photo: "images/profile-pic.png",
    favoriteFoods: [
        "White Rice, Croaker Fish",
        "Beans Porridge",
        "Plantain",
        "Grilled Line Fish"
    ],
    hobbies: [
        "Reading",
        "Swimming",
        "Cooking"
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Abeokuta, Ogun State",length: "25 years",
    },
    {    
        place: "Abuja, FCT",length: "3 years",
    },
    {    
        place: "Oyo, Ibadan",length: "2 years"
    }
)

/* DOM Manipulation - Output */

/* Name */

document.querySelector(`#name`).textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

const dlPlacesLived = document.querySelector('#places-lived');

myProfile.placesLived.forEach(place => {
    const dt = document.createElement('dt');
    dt.textContent = place.place;
    
    const dd = document.createElement('dd');
    dd.textContent = place.length;
    
    dlPlacesLived.appendChild(dt);
    dlPlacesLived.appendChild(dd);
});
