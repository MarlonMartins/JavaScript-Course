var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
	console.log("Buscando pacientes");

	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){
		var erroAjax = document.querySelector("#erro-ajax");

		if (xhr.status == 200){
			erroAjax.classList.add("invisivel");
			var resposta = xhr.responseText;
			var patients = JSON.parse(resposta);
			
			patients.forEach( function(patient) {
				adicionaPacienteNaTabela(patient);
			});
		} else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			erroAjax.classList.remove("invisivel")
		}
		

	});
	xhr.send();

})