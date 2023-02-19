const inmueble = [
  {
    idInmbuenbre: "01",
    direccion: "calle 4",
    telefono: 123456,
    precio: "200",
    estado: true,
  },
  {
    idInmbuenbre: "01",
    direccion: "calle 4",
    telefono: 123456,
    precio: "250",
    estado: false,
  },
  {
    idInmbuenbre: "01",
    direccion: "calle 4",
    telefono: 123456,
    precio: "200",
    estado: true,
  },
  {
    idInmbuenbre: "01",
    direccion: "calle 4",
    telefono: 123456,
    precio: "300",
    estado: true,
  },
];

const Idinmueble = document.getElementById("idinmuenbre");
const miIdInmueble = document.querySelector("#midinmueble");
const address = document.getElementById(".direccion");
const phone = document.getElementById(".teefono");
const buy = document.getElementById(".precio");

Idinmueble.addEventListener("focus", function () {
  miIdInmueble.textContent = "Campo necesario";
});
Idinmueble.addEventListener("blur", () => {
  if (miIdInmueble >= 1) {
    miIdInmueble.textContent = "";
  } else {
    miIdInmueble.classList.add = "d-none";
  }
});
