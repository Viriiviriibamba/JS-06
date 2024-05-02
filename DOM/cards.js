/**
 * [] Crear tarjeta
 * [] Crear secciones p/tarjeta
 * Img
 * Nombre, desc, edad, lista de algo
 * [] Insertar en la tarjeta
 * [] Mostrar dentro de div.container
 */
//Crear tarjeta de usuario
const CARDS_CONTAINER = document.querySelector("#card-container");

const USER = {
    id: 1,
    userName: "User Name",
    desc: "Sobre mí",
    age: "26",
//NUevo objeto anidado y a su vez un array
fav_books: {
    books: [
        "Brida",
        "Ensayo sobre la ceguera",
        "La mecanica del corazón",
        "Ángeles y demonios",  
        "El principito", 
    ],
},
};

//Crear secciones
const card = document.createElement("div");
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");

//Lista
const bookList = USER.fav_books.books.map((e) => 
{ 
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});
console.log(bookList);

name_section.textContent = USER.userName;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList);
card.append(name_section,desc_section,age_section,book_section);

CARDS_CONTAINER.appendChild(card);

