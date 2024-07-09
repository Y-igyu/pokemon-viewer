fetch("https://pokeapi.co/api/v2/pokemon/charmander")
  .then((res) => res.json())
  .then((data) => {
    let name = document.querySelector(".pokemon-name");
    name.innerText = data.name;
    let info = document.querySelector(".info");
    info.innerHTML = `<img class="pok-img" src="${data.sprites.front_default}">
    <div class="type">Type: ${data.types[0].type.name}</div>
    <div class="stats">
      <h3>Stats</h3>
      <div class="${data.stats[0].stat.name}">
        ${data.stats[0].base_stat} ${data.stats[0].stat.name}
      </div>
      <div class="${data.stats[1].stat.name}">
        ${data.stats[1].base_stat} ${data.stats[1].stat.name}
      </div>
      <div class="${data.stats[2].stat.name}">
        ${data.stats[2].base_stat} ${data.stats[2].stat.name}
      </div>
      <div class="${data.stats[3].stat.name}">
        ${data.stats[3].base_stat} ${data.stats[3].stat.name}
      </div>
      <div class="${data.stats[4].stat.name}">
        ${data.stats[4].base_stat} ${data.stats[4].stat.name}
      </div>
      <div class="${data.stats[5].stat.name}">
        ${data.stats[5].base_stat} ${data.stats[5].stat.name}
      </div>
    </div>`;
    console.log(data);
  });
