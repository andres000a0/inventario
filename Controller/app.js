const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const selecte = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const selected = dropdown.querySelector(".selected");
  const opciones = dropdown.querySelectorAll(".menu li");

  selecte.addEventListener("click", ()=> {
    selecte.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");

  });

  opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      selected.innerText = opcion.innerText;
      selecte.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      opciones.forEach((opcion) => {
        opcion.classList.remove("active");
      });
      // opcion.classList.add("active");
    });
  });
});
