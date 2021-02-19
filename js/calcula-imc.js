var title = document.querySelector(".titulo");
title.textContent = "Aparecida Nutricionista";

var patients = document.querySelectorAll(".paciente");

for(var i = 0; i < patients.length; i++){

	var patient = patients[i]
	var tdWeight = patient.querySelector(".info-peso");
	var tdImc = patient.querySelector(".info-imc");
	var weight = tdWeight.textContent;
	var height = patient.querySelector(".info-altura").textContent;
	
	var validWeight = validaPeso(weight);
	var validHeight = validaAltura(height);

	if (!validWeight){
		console.log("Peso inválido");
		tdImc.textContent = "Peso inválido";
	}
	if (!validHeight){
		console.log("Peso inválido");
		tdImc.textContent = "Altura inválida";
	}

	if (validHeight && validWeight){
		tdImc.textContent = calculaImc(weight, height);
	}else{
		patient.classList.add("paciente-invalido");
	}
}


function validaPeso(weight){
	if (weight >= 0 && weight < 600){
		return true;
	}
	return false;
}

function validaAltura(height){
	if (height >= 0 && height < 2.50){
		return true;
	}
	return false;
}

function calculaImc(weight, height) {
	var imc = weight / (height * height);

	return imc.toFixed(2);
}
