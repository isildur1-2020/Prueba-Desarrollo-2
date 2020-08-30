class Game {
  constructor(rounds) {
    this.rounds = rounds;
    this.countComputer = 0;
    this.countPerson = 0;

    this.isRounds()
  }
  //------------------------------------------------------------------------
  isRounds = () => {
    if(this.rounds === '') {
      alert("INGRESA EL NÚMERO DE RONDAS, POR FAVOR")
      location.reload()
    } else {
      this.startGame()
    }
  }
  //------------------------------------------------------------------------
  startGame = () => {
    this.rounds = parseInt(this.rounds)
    this.settings();
    this.validation();
  };
  //------------------------------------------------------------------------
  settings = () => {
    images.forEach((img, index) => {
      img.setAttribute("src", srcImages[index]);
      img.setAttribute("id", index);
      img.addEventListener("click", () => {
        this.person = parseInt(img.getAttribute("id"));
      });
    });

    nextRound.addEventListener("click", () => {
      if (this.rounds === 1) {
        if (this.countComputer > this.countPerson) {
          alert("HA GANADO LA MÁQUINA :(");
          location.reload()
        } else if (this.countPerson > this.countComputer) {
          alert("GANASTE CAMPEÓN");
          location.reload()
        } else {
          alert("HAN EMPATADO");
          location.reload()
        }
      } else {
        three.setAttribute("style", "display: block;");
        this.validation()
        this.rounds--;
      }
    });
  };
  //------------------------------------------------------------------------
  optionComputer = () => {
    let option = Math.floor(Math.random() * 5);
    return option;
  };

  optionPerson = () => {
    let i = 3;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (i === 0 && this.person !== undefined) {
          clearInterval(interval);
          resolve(this.person);
        }
        if (i === 0 && !this.person) {
          clearInterval(interval);
          reject("Por favor escoge una opción");
        }
        count.textContent = i;
        i--;
      }, 1000);
    });
  };
  //------------------------------------------------------------------------
  validation = async () => {
    try {
      let computer = this.optionComputer();
      let person = await this.optionPerson();
      let message = "";

      if (computer === person) {
        message = "Empate";
      } else if (person === 0 && (computer === 2 || computer === 3)) {
        message = "Ganaste !";
        this.countPerson++;
      } else if (person === 1 && (computer === 4) | (computer === 0)) {
        message = "Ganaste !";
        this.countPerson++;
      } else if (person === 2 && (computer === 1) | (computer === 3)) {
        message = "Ganaste";
        this.countPerson++;
      } else if (person === 3 && (computer === 1) | (computer === 4)) {
        message = "Ganaste !";
        this.countPerson++;
      } else if (person === 4 && (computer === 2) | (computer === 0)) {
        message = "Ganaste !";
        this.countPerson++;
      } else if (computer === 0 && (person === 2 || person === 3)) {
        message = "Perdiste :(";
        this.countComputer++;
      } else if (computer === 1 && (person === 4) | (person === 0)) {
        message = "Perdiste :(";
        this.countComputer++;
      } else if (computer === 2 && (person === 1) | (person === 3)) {
        message = "Perdiste :(";
        this.countComputer++;
      } else if (computer === 3 && (person === 1) | (person === 4)) {
        message = "Perdiste :(";
        this.countComputer++;
      } else if (computer === 4 && (person === 2) | (person === 0)) {
        message = "Perdiste :(";
        this.countComputer++;
      }

      three.setAttribute("style", "display: none;");
      four.classList.remove("hidden");
      finalImg[0].setAttribute("src", srcImages[person]);
      finalImg[1].setAttribute("src", srcImages[computer]);
      winner.textContent = message;

    } catch (err) {
      this.validation();
    }
  };
}
