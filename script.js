function dragStart(evento) {
    // evento.dataTransfer.effectAllowed = 'copy';
    // evento.dataTransfer.dropEffect = 'copy';

    evento.dataTransfer.setData("text/html", evento.target.getAttribute('src')); //assegna i dati di trascinamento (il formato e cosa deve prendere)
    console.log(evento, evento.target)

    //creo un'immagine al puntatore (punto di domanda) quando l'img viene trascinata
    let dragIcon = document.createElement('img');  //creo una nuova img
    dragIcon.setAttribute('src', 'img/puntoDomandaMini.png'); //aggiungo l'attributo src all'immagine 
    evento.dataTransfer.setDragImage(dragIcon, -10, -10); //genero il puntatore con la nuova immagine 
}

function dragOver(evento) {
    evento.preventDefault(); //impedisce l'evento di default per l'oggetto sul quale stiamo lavorando, senza di esso il drop non funzionerebbe
}

function drop(evento) {
    evento.preventDefault(); //disabilità la risposta di default

    console.log(evento.dataTransfer.getData("text/html"), evento.target); //nome dell'img trascinata
    let nameImg = evento.dataTransfer.getData("text/html");
    let placeDrop = evento.target; //indica la destinazione

    // creo un'immagine copia da inserire accanto a placeDrop
    let imgCopied = document.createElement('img'); //creo l'elemento (mi serve una img)
    imgCopied.setAttribute('src', nameImg) //recupero il nome dell'img per copiare proprio quella img trascinata
    placeDrop.appendChild(imgCopied); //incollo l'img (aggiungo un figlio a placeDrop)
    imgCopied.setAttribute('class', 'img_small'); //creo la classe all'immagine

    //condizioni: chiedo se l'immagine trascinata ha lo stesso nome dell'attributo data-risposta nel placeDrop(nel p dell'html)
    //(se la risposta è giusta)
    if (placeDrop.getAttribute('data-risposta') == nameImg) {
        placeDrop.style.backgroundColor = 'yellowgreen';
        let iconCheck = document.createElement('img');
        iconCheck.setAttribute('src', 'img/check.png');
        iconCheck.setAttribute('class', 'img_icon');
        placeDrop.appendChild(iconCheck);
    }
    // se la risposta è sbagliata
    else {
        placeDrop.style.backgroundColor = 'red';
        let iconErr = document.createElement('img');
        iconErr.setAttribute('src', 'img/err.png');
        iconErr.setAttribute('class', 'img_icon');
        placeDrop.appendChild(iconErr);
    }
}