/*Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello ispirandovi alle foto in allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo. */



//Recupero il container delle immagini dal DOM
const imageContainer = document.getElementById('image-container');
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const thumbnailsContainer = document.getElementById('thumbnails'); //Bonus 2

//Creo un array contenente i nomi delle immagini
const images = [
    "img/land1.jpg",
    "img/land2.jpg",
    "img/land3.jpg",
    "img/land4.jpg",
    "img/land5.jpg"
];

// Variabile per tenere traccia dell'indice dell'immagine attuale
let currentIndex = 0;

for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    img.alt = `Landscape ${i + 1}`;

    // Aggiungo la classe 'd-block' solo alla prima immagine
    if (i === 0) {
        img.classList.add('d-block');
    } else {
        img.classList.add('d-none'); // Nascondo le immagini non attive
    }

    imageContainer.appendChild(img);

    // Creazione delle miniature
    const thumbnail = document.createElement('img');
    thumbnail.src = images[i];
    thumbnail.alt = "Thumbnail " + (i + 1);
    if (i === 0) {
        thumbnail.classList.add('active-thumbnail');
    }

    // Aggiungo un evento click alle miniature
    thumbnail.addEventListener('click', function () {

        // Nascondo l'immagine attiva e rimuovo la classe attiva dalla miniatura
        const imgs = document.querySelectorAll('#image-container img');
        imgs[currentIndex].classList.remove('d-block');
        imgs[currentIndex].classList.add('d-none');

        const thumbs = document.querySelectorAll('#thumbnails img');
        thumbs[currentIndex].classList.remove('active-thumbnail');

        // Aggiorno l'indice corrente
        currentIndex = i;

        // Mostro l'immagine cliccata e evidenzio la miniatura
        imgs[currentIndex].classList.remove('d-none');
        imgs[currentIndex].classList.add('d-block');
        thumbs[currentIndex].classList.add('active-thumbnail');
    });

    thumbnailsContainer.appendChild(thumbnail);

}


const imgs = document.querySelectorAll('#image-container img');
const thumbs = document.querySelectorAll('#thumbnails img');

// Listener per il tasto "next"
next.addEventListener('click', function () {

    // Nascondo l'immagine attuale e disattivo la miniatura
    imgs[currentIndex].classList.remove('d-block');
    imgs[currentIndex].classList.add('d-none');
    thumbs[currentIndex].classList.remove('active-thumbnail');

    // Incremento l'indice
    currentIndex++;

    // Se l'indice supera il numero di immagini, lo resetto a 0
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Mostro la nuova immagine e attivo la miniatura
    imgs[currentIndex].classList.remove('d-none');
    imgs[currentIndex].classList.add('d-block');
    thumbs[currentIndex].classList.add('active-thumbnail');
});

// Listener per il tasto "prev"
prev.addEventListener('click', function () {

    // Nascondo l'immagine attuale e disattivo la miniatura
    imgs[currentIndex].classList.remove('d-block');
    imgs[currentIndex].classList.add('d-none');
    thumbs[currentIndex].classList.remove('active-thumbnail');

    // Decremento l'indice
    currentIndex--;

    // Se l'indice è inferiore a 0, lo resetto all'ultima immagine
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Mostro la nuova immagine e attivo la miniatura
    imgs[currentIndex].classList.remove('d-none');
    imgs[currentIndex].classList.add('d-block');
    thumbs[currentIndex].classList.add('active-thumbnail');
});




