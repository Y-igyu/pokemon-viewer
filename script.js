fetch("https://pokeapi.co/api/v2/pokemon/charmander")
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

    console.log(data);
  });
