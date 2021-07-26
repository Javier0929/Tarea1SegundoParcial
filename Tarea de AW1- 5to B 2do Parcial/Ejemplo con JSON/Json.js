const consultarData = (name, apell) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let respuesta = JSON.parse(xhttp.responseText);
        let DatosEstudiante = respuesta.DatosEstudiante;
        DatosEstudiante.map((estudiante) => {
          if (name === estudiante.Nombre && apell === estudiante.Apellido) {
            recibirDato(estudiante);
          }
        });
      }
    };
    xhttp.open("GET", "ejemplo.json", true);
    xhttp.send();
  };
  const recibirDato = (estudiante) => {
    const { Apellido, Nombre, Semestre, Paralelo, Dirrecion, Telefono, Email } =
      estudiante;
    document.getElementById("datos").innerHTML = `
      <center><div>
          <p> <strong>Nombre: </strong> ${Nombre} ${Apellido} </p> 
          <hr>
          <p> <strong>Mail: </strong> ${Email} </p> 
          <p> <strong>Tefelono: </strong> ${Telefono} </p> 
          <p> <strong>Direccion: </strong> ${Dirrecion} </p> 
          <hr>
          <p> <strong>Semestre: </strong> ${Semestre} </p> 
          <p> <strong>Paralelo: </strong> ${Paralelo} </p> 
      </div></center>
      `;
  };
  const mostrarError = () => {
    document.getElementById("datos").innerHTML = "<p>404 Not Found</p>";
  };
  