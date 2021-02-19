var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(events){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona")
	var patient = obtemPacienteDoFormulario(form);
	
	var erros = validaPaciente(patient);

	if (erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}
	
	adicionaPacienteNaTabela(patient);

	form.reset();
	
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = ""

	});

function obtemPacienteDoFormulario(form){

	var patient = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return patient;
}
	

function montaTr(patient){
	var patientTr = document.createElement("tr");
	patientTr.classList.add("paciente");

	patientTr.appendChild(montaTd(patient.nome, "info-nome"));
	patientTr.appendChild(montaTd(patient.peso, "info-peso"));
	patientTr.appendChild(montaTd(patient.altura, "info-altura"));
	patientTr.appendChild(montaTd(patient.gordura, "info-gordura"));
	patientTr.appendChild(montaTd(patient.imc, "info-imc"));

	return patientTr;

}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(patient){

	var erros = [];

	if(patient.nome.length == 0){
		erros.push("O nome não pode ser em branco!");
	}
	if(patient.gordura.length == 0){
		erros.push("A gordura não pode ser em branco!");
	}

	if(patient.peso.length == 0){
		erros.push("O peso não pode ser em branco!");
	}

	if(patient.altura.length == 0){
		erros.push("A altura não pode ser em branco!");
	}

	if (!validaPeso(patient.peso)){
		erros.push("O Peso é inválido!");
	}

	if (!validaAltura(patient.altura)){
		erros.push("A Altura é inválida!");
	}

	return erros
}


function adicionaPacienteNaTabela(patient){
	var patientTr = montaTr(patient);
	var table = document.querySelector("#tabela-pacientes");
	table.appendChild(patientTr);

}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = ""

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
	
}