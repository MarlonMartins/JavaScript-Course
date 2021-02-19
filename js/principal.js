var title = document.querySelector(".titulo");
title.textContent = "Aparecida Nutricionista";

function testaCondicoes(){
	if (weight <= 0 || weight >= 600){
		console.log("Peso inválido");
		validWeight = false;
		tdImc.textContent = "Peso inválido";
	}
	else if (height <= 0.62 || height >= 2.50){
		console.log("Peso inválido");
		validHeight = false;
		tdImc.textContent = "Altura inválida";
	}

	if (validHeight && validWeight){
		var imc = weight / (height * height);
		tdImc.textContent = imc.toFixed(2);
	}else{
		patient.classList.add("paciente-invalido");
	}

}

var patients = document.querySelectorAll(".paciente");

for(var i = 0; i < patients.length; i++){

	var patient = patients[i]
	var tdWeight = patient.querySelector(".info-peso");
	var tdImc = patient.querySelector(".info-imc");
	var weight = tdWeight.textContent;
	var height = patient.querySelector(".info-altura").textContent;
	var validWeight = true;
	var validHeight = true;

	testaCondicoes();
}

