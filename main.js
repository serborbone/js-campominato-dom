document.getElementById('play-btn').addEventListener('click', play);

function play() {

    let difficultySelect = document.getElementById('difficulty-select').value;
    let gridSelection = document.querySelector('.grid');
    let bombGenerate = 16;

    let selectShowMsg = document.getElementById('show-msg');
    selectShowMsg.classList.add('d-none');
    
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

          let createPar = document.createElement("p");
          createDiv.appendChild(createPar);

          createPar.innerText = i;

          gridSelection.appendChild(createDiv);

          
          createDiv.addEventListener('click', showSquare);

        }

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
        return bombCreated;
    }

    //generare un numero randomico
    function randomNumber(minNumb, maxNumb) {

        let random = Math.floor(Math.random() * (maxNumb - minNumb + 1) + minNumb);
        return random;

    }

    let numbTentativi = [];

    function showSquare () {
    
        let parValue = parseInt(this.innerText);


        if (creatingBomb.includes(parValue)) {

            showAllBomb(numbTentativi);
        
        } else {

            //aggiungo la classe che colora di blu i quadrati
            this.classList.add('color-selected')

            /*pusho i numeri dei quadrati cliccati per poi ricavarne il numero di tentativi 
            nella funzione showAllBomb*/
            numbTentativi.push(parValue);
        }
    }

        
    
    //mostro tutte le bombe se ne clicco una
    function showAllBomb (numbOfSuccess) {
    
        let squareSelection = document.getElementsByClassName('square');
        for (let i = 0; i < squareSelection.length; i++) {
        
            if (creatingBomb.includes(parseInt(squareSelection[i].innerText))) {
            
                squareSelection[i].classList.add('bomb-red');
  
            }
        
        }


        //mostro il messaggio di fine gioco con il numero di tentativi fatti
        selectShowMsg.classList.remove('d-none');
        selectShowMsg.innerText = `Peccato! Hai beccato la bomba dopo ${numbOfSuccess.length} tentativi. Premi Play per giocare ancora.`;
    }


}