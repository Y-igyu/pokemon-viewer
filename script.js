fetch("https://pokeapi.co/api/v2/pokemon/grafaiai")
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

    let colors = {
      normal: "#A8A878",
      fire: "#F08030",
      water: "#6890F0",
      electric: "#F8D030",
      grass: "#78C850",
      ice: "#98D8D8",
      fighting: "#C03028",
      poison: "#A040A0",
      ground: "#E0C068",
      flying: "#A890F0",
      psychic: "#F85888",
      bug: "#A8B820",
      rock: "#B8A038",
      ghost: "#705898",
      dragon: "#7038F8",
      dark: "#705848",
      steel: "#B8B8D0",
      fairy: "#F0B6BC",
    };
    let bg = document.querySelector("body");
    switch (pokeType) {
      case "Normal":
        setStyle(bg, img, colors.normal);
        break;
      case "Fire":
        setStyle(bg, img, colors.fire);
        break;
      case "Water":
        setStyle(bg, img, colors.water);
        break;
      case "Electric":
        setStyle(bg, img, colors.electric);
        break;
      case "Grass":
        setStyle(bg, img, colors.grass);
        break;
      case "Ice":
        setStyle(bg, img, colors.ice);
        break;
      case "Fighting":
        setStyle(bg, img, colors.fighting);
        break;
      case "Poison":
        setStyle(bg, img, colors.poison);
        break;
      case "Ground":
        setStyle(bg, img, colors.ground);
        break;
      case "Flying":
        setStyle(bg, img, colors.flying);
        break;
      case "Psychic":
        setStyle(bg, img, colors.psychic);
        break;
      case "Bug":
        setStyle(bg, img, colors.bug);
        break;
      case "Rock":
        setStyle(bg, img, colors.rock);
        break;
      case "Ghost":
        setStyle(bg, img, colors.ghost);
        break;
      case "Dragon":
        setStyle(bg, img, colors.dragon);
        break;
      case "Dark":
        setStyle(bg, img, colors.dark);
        break;
      case "Steel":
        setStyle(bg, img, colors.steel);
        break;
      case "Fairy":
        setStyle(bg, img, colors.fairy);
        break;
      default:
        bg.style.backgroundColor = "white";
        break;
    }

    console.log(data);
  });

function setStyle(bg, img, color) {
  bg.style.backgroundColor = color;
  img.style.borderColor = color;
  img.style.boxShadow = `0 0 10px 10px ${color}`;
}
