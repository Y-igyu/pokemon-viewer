fetch("https://pokeapi.co/api/v2/pokemon/meltan")
  .then((res) => res.json())
  .then((data) => {
    let nameDiv = document.querySelector(".pokemon-name");
    let pokeName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

    let typeDiv = document.querySelector(".poke-type");
    let pokeType =
      data.types[0].type.name.charAt(0).toUpperCase() +
      data.types[0].type.name.slice(1);

    let img = document.querySelector("img");
    img.src = data.sprites.front_default;

    nameDiv.innerText = pokeName;
    typeDiv.innerText = "Type: " + pokeType;

    let stats = document.querySelector(".stats");
    for (let i = 0; i < data.stats.length; i++) {
      let div = document.createElement("div");
      div.classList.add(`${data.stats[i].stat.name}`);
      div.innerText = data.stats[i].base_stat + " " + data.stats[i].stat.name;
      stats.appendChild(div);
      console.log(stats);
    }

    let bg = document.querySelector("body");
    switch (pokeType) {
      case "Normal":
        bg.style.backgroundColor = "#A8A878";
        break;
      case "Fire":
        bg.style.backgroundColor = "#F08030";
        break;
      case "Water":
        bg.style.backgroundColor = "#6890F0";
        break;
      case "Electric":
        bg.style.backgroundColor = "#F8D030";
        break;
      case "Grass":
        bg.style.backgroundColor = "#78C850";
        break;
      case "Ice":
        bg.style.backgroundColor = "#98D8D8";
        break;
      case "Fighting":
        bg.style.backgroundColor = "#C03028";
        break;
      case "Poison":
        bg.style.backgroundColor = "#A040A0";
        break;
      case "Ground":
        bg.style.backgroundColor = "#E0C068";
        break;
      case "Flying":
        bg.style.backgroundColor = "#A890F0";
        break;
      case "Psychic":
        bg.style.backgroundColor = "#F85888";
        break;
      case "Bug":
        bg.style.backgroundColor = "#A8B820";
        break;
      case "Rock":
        bg.style.backgroundColor = "#B8A038";
        break;
      case "Ghost":
        bg.style.backgroundColor = "#705898";
        break;
      case "Dragon":
        bg.style.backgroundColor = "#7038F8";
        break;
      case "Dark":
        bg.style.backgroundColor = "#705848";
        break;
      case "Steel":
        bg.style.backgroundColor = "#B8B8D0";
        break;
      case "Fairy":
        bg.style.backgroundColor = "#F0B6BC";
        break;
      default:
        bg.style.backgroundColor = "white";
        break;
    }

    console.log(data);
  });
