const conectarXMLMostrar = () => {
    const xmlhttp = new XMLHttpRequest();
    var cod = document.getElementById("estudiante").value;
    xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let docXML = this.responseXML;
        let estudiante = docXML.getElementsByTagName("estudiante");
        for (let i = 0; i < estudiante.length; i++) {
          let NombreXML =
            estudiante[i].getElementsByTagName("Nombre")[0].textContent;
          let ApellidoXML =
            estudiante[i].getElementsByTagName("Apellido")[0].textContent;
          let completo = `${NombreXML} ${ApellidoXML}`;
          console.log(completo);
          if (completo == cod) {
            console.log(estudiante[i]);
            cargarXML(estudiante[i]);
          }
        }
      }
    };
    xmlhttp.open("GET", "./ejemplo.xml", true);
    xmlhttp.send();
  };
  const cargarXML = (estudiante) => {
    console.log(estudiante);
    console.log(estudiante.length);
    let tabla = `<tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Semestre</th>
      <th>Paralelo</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th class="borde-iz-ar">Correo</th>
  </tr>`;
    if (typeof estudiante.length == "undefined") {
      tabla += `
          <tr >
              <td>${
                estudiante.getElementsByTagName("Nombre")[0].textContent
              }</td >
              <td>${
                estudiante.getElementsByTagName("Apellido")[0].textContent
              }</td >
              <td>${
                estudiante.getElementsByTagName("Semestre")[0].textContent
              }</td>
              <td class="centar-text">${
                estudiante.getElementsByTagName("Paralelo")[0].textContent
              }</td>
              <td>${
                estudiante.getElementsByTagName("Direcion")[0].textContent
              }</td>
              <td>${
                estudiante.getElementsByTagName("Telefono")[0].textContent
              }</td>
              <td class="no-capitalizar ">${
                estudiante.getElementsByTagName("Email")[0].textContent
              }</td>
          </tr>
      `;
    }
    for (let i = 0; i < estudiante.length; i++) {
      tabla += `
              <tr>
                  <td class="centar-text ">${i + 1}</td>
                  <td>${
                    estudiante[i].getElementsByTagName("Nombre")[0].textContent
                  }</td >
                  <td>${
                    estudiante[i].getElementsByTagName("Apellido")[0].textContent
                  }</td >
                  <td>${
                    estudiante[i].getElementsByTagName("Semestre")[0].textContent
                  }</td>
                  <td class="centar-text">${
                    estudiante[i].getElementsByTagName("Paralelo")[0].textContent
                  }</td>
                  <td>${
                    estudiante[i].getElementsByTagName("Direcion")[0].textContent
                  }</td>
                  <td>${
                    estudiante[i].getElementsByTagName("Telefono")[0].textContent
                  }</td>
                  <td class="no-capitalizar ">${
                    estudiante[i].getElementsByTagName("Email")[0].textContent
                  }</td>
              </tr>
          `;
    }
    document.getElementById("data").innerHTML = tabla;
  };
  