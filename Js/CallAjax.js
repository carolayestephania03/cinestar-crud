LlamadaDemo();

function LlamadaDemo() {
    var url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = "";
            if (data.length > 0) {
                for (let index = 0; index < data.length; index++) {
                    //const element = array[index];
                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";

                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary-emphasis";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;

                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0, 100) + "...";

                    const ubication = document.createElement("a");
                    ubication.className = "icon-link gap-1 icon-link-hover stretched-link";

                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubication);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";


                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);



                }

            }
        }
        );
}

function Llamada1() {
    var txt_Pelicula1 = document.getElementById('txt_Pelicula');
    var cmbUbication1 = document.getElementById('cmbUbication');

    var url = "";
    if (txt_Pelicula1 != null && cmbUbication1 != null) {
        url = "https://movie.azurewebsites.net/api/cartelera?title=" + txt_Pelicula1.value + "&ubication=" + (cmbUbication1.value == "Mostrar Todos" ? "" : cmbUbication1.value);
    }
    else {
        url = "https://movie.azurewebsites.net/api/cartelera?title=&ubication=";
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var divPeli = document.getElementById('divPeli');
            divPeli.innerHTML = "";
            if (data.length > 0) {
                for (let index = 0; index < data.length; index++) {
                    //const element = array[index];
                    const div = document.createElement("div");
                    div.className = "col-md-6";

                    const div2 = document.createElement("div");
                    div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative";

                    const div3 = document.createElement("div");
                    div3.className = "col p-4 d-flex flex-column position-static";

                    const type = document.createElement("strong");
                    type.className = "d-inline-block mb-2 text-primary-emphasis";
                    type.innerText = data[index].Type;

                    const title = document.createElement("h3");
                    title.className = "mb-0";
                    title.innerText = data[index].Title;

                    const anio = document.createElement("div");
                    anio.className = "mb-1 text-body-secondary";
                    anio.innerText = data[index].Year;

                    const description = document.createElement("p");
                    description.className = "card-text mb-auto";
                    description.innerText = data[index].description.substring(0, 100) + "...";

                    const ubication = document.createElement("a");
                    ubication.className = "icon-link gap-1 icon-link-hover stretched-link";

                    div3.appendChild(type);
                    div3.appendChild(title);
                    div3.appendChild(anio);
                    div3.appendChild(description);
                    div3.appendChild(ubication);

                    const div4 = document.createElement("div");
                    div4.className = "col-auto d-none d-lg-block";
                    div4.innerHTML = "<img src=\"" + data[index].Poster + "\" width=\"200\" height=\"250\">";


                    div2.appendChild(div3);
                    div2.appendChild(div4);
                    div.appendChild(div2);
                    divPeli.appendChild(div);



                }

            }
        }
        );

}
function Llamada2() {
    alert("Su pelicula fue añadida con éxito");
    var txt_title = document.getElementById('Title').value;
    var txt_imdbID = document.getElementById('imdbID').value;
    var txt_description = document.getElementById('description').value;
    var txt_Ubication = document.getElementById('Ubication').value;
    var txt_year = document.getElementById('year').value;
    var txt_Tipo = document.getElementById('Tipo').value;
    var txt_Poster = document.getElementById('Poster').value;

    url = "https://movie.azurewebsites.net/api/cartelera";

    const Json = {
        imdbID: txt_imdbID,
        Title: txt_title,
        Year: txt_year,
        Type: txt_Tipo,
        Poster: txt_Poster,
        description: txt_description,
        Ubication: txt_Ubication,
        Estado: 1
    }

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Json),
    };

    fetch(url, config)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        }).then(Json => {
            console.log(Json);
        }).catch(e => {
            console.log(e);
        });

}
function Llamada3() {
    alert("Su pelicula fue eliminada con éxito");

    var txt_imdbID = document.getElementById('imdbID').value;

    url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + txt_imdbID;

    const config = {
        method: 'DELETE',
    };

    fetch(url, config)
        .then(res => res.json())
        .then(res => console.log(res))
}

function Llamada4() {
    alert("Su pelicula fue actualizada con éxito");
    var txt_title2 = document.getElementById('Title2').value;
    var txt_imdbID2 = document.getElementById('imdbID2').value;
    var txt_description2 = document.getElementById('description2').value;
    var txt_Ubication2 = document.getElementById('Ubication2').value;
    var txt_year2 = document.getElementById('year2').value;
    var txt_Tipo2 = document.getElementById('Tipo2').value;
    var txt_Poster2 = document.getElementById('Poster2').value;

    url = "https://movie.azurewebsites.net/api/cartelera?imdbID=" + txt_imdbID2;

    const Json2 = {
        imdbID: txt_imdbID2,
        Title: txt_title2,
        Year: txt_year2,
        Type: txt_Tipo2,
        Poster: txt_Poster2,
        description: txt_description2,
        Ubication: txt_Ubication2,
        Estado: 1
    };

    const config = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Json2),
    };
    fetch(url, config)
        .then(data => {
            if (!data.ok) {
                throw Error(data.status);
            }
            return data.json();
        }).then(Json => {
            console.log(Json);
        }).catch(e => {
            console.log(e);
        });
}