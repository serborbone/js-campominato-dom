document.getElementById('play-btn').addEventListener('click', play);

function play() {

    let difficultySelect = document.getElementById('difficulty-select').value;
    let gridSelection = document.querySelector('.grid');
    let bombGenerate = 16;
    
    //faccio il reset delle griglie
    gridSelection.innerHTML = "";

     //numero di quadrati
      if (difficultySelect == "easy") {
      
            numbSquare = 100;

      } else if (difficultySelect == "medium") {

            numbSquare = 81;

        } else if (difficultySelect == "hard") {

            numbSquare = 49;
        }

    // Funzione per generare i quadrati
    createSquare(numbSquare);

    function createSquare (numbOfSquare) {

        // Creo i quadrati dentro un ciclo for
        for (let i = 1; i <= numbOfSquare; i++) {

          let createDiv = document.createElement('div');
          createDiv.classList.add('square');
          createDiv.innerText = i;

          createDiv.addEventListener('click', function() {
          
              createDiv.classList.add('color-selected');
          
          });
          gridSelection.appendChild(createDiv);

        }

    }

    //generare un numero randomico
    function randomNumber(minNumb, maxNumb) {

        let random = Math.floor(Math.random() * (maxNumb - minNumb + 1) + minNumb);
        return random;

    }

    //Funzione per generare le bombe
    let creatingBomb = createBomb(bombGenerate, numbSquare);

    function createBomb(NumbBombToCreate, numbOfSquare){
        let bombCreated = [];

        while (bombCreated.length < NumbBombToCreate) {

            let bombToPush = randomNumber(1, numbOfSquare);

            //se il numero creato randomicamente non è tra quelli nell'array
            if (!bombCreated.includes(bombToPush)){
                bombCreated.push(bombToPush);
            }
        };
        return console.log(bombCreated);
    }

     

}