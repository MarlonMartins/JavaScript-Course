var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
	var patients = document.querySelectorAll(".paciente");

	if(this.value.length > 0) {
		for (var i = 0; i < patients.length; i++) {
			var patient = patients[i];
			var tdName = patient.querySelector(".info-nome");
			var name = tdName.textContent;

			var expressao = new RegExp(this.value, "i" )
			
			if (!expressao.test(name) ){
				console.log(name);
				patient.classList.add("invisivel");
			}else {
				patient.classList.remove("invisivel");
			}

		}

	}else{
		for (var i = 0; i < patients.length; i++) {
			var patient = patients[i];
			patient.classList.remove("invisivel");
		}

	}

})