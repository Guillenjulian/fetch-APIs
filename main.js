function mostrarResultados(results) {
  console.log(results);
  const template = document.querySelector("#results-iten-template");
  const contenedor = document.querySelector(".results");

  const cantResult = document.querySelector(".resultados-cant");
  cantResult.textContent = results.length;
  if (results.length == 0) {
    const newEl = document.createElement("h1");
    newEl.textContent = "sin Resultados";
    contenedor.appendChild(newEl);
  } else if (results.length != 0) {
    for (let r of results) {
      const resultadosEl = template.content.querySelector(".resultados-cant");
      //resultadosEl.textContent = r.paging.total;

      const preiceEl = template.content.querySelector(".preice");
      preiceEl.textContent = r.price;

      const vendidosEl = template.content.querySelector(
        ".resul-iten-conten-number"
      );
      vendidosEl.textContent = r.sold_quantity;

      const imgEl = template.content.querySelector(".results-iten-img");
      imgEl.src = r.thumbnail;

      const titleEl = template.content.querySelector(".resul-iten-title");
      titleEl.textContent = r.title;

      const conditionEl = template.content.querySelector(
        ".resul-iten-conditional"
      );
      conditionEl.textContent = r.condition;

      const clone = document.importNode(template.content, true);
      contenedor.appendChild(clone);
    }
  }
}

function main() {
  const formEl = document.querySelector(".form-search");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();

    const palablaABuscar = e.target.search.value;
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palablaABuscar)
      .then((Response) => Response.json())
      .then((data) => mostrarResultados(data.results));
  });
}
main();
