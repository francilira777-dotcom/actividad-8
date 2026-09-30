function revisarOpciones() {

    let opcion1 = document.querySelector("#opcion1").checked;
    let opcion2 = document.querySelector("#opcion2").checked;

    if (opcion1 == true && opcion2 == true) {

        document.querySelector("#resultado").innerHTML =
            "✅ Las dos opciones están seleccionadas";

    } else if (opcion1 == true) {

        document.querySelector("#resultado").innerHTML =
            "✅ Solo la opción 1 está seleccionada";

    } else if (opcion2 == true) {

        document.querySelector("#resultado").innerHTML =
            "✅ Solo la opción 2 está seleccionada";

    } else {

        document.querySelector("#resultado").innerHTML =
            "❌ No seleccionaste ninguna opción";
    }

    if (opcion1 || opcion2) {

        document.querySelector("#btn-enviar").disabled = false;

    } else {

        document.querySelector("#btn-enviar").disabled = true;
    }
}