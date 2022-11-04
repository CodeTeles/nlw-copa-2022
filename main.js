function createGame(player1, hour, player2) {
  return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Brandeira da ${player2}" />
    </li>
  `
}

let delay = -0.3

function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
     <ul>
     ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "Segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard("02/12", "Sexta", createGame("cameroon", "16:00", "brazil"))