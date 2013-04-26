function Disciplina () {
	disciplina = {
		nomeDaDisciplina: "Validação e Testes",
		professorDaDisciplina: "Camila Maia Loiola",
		preRequisito: "Qualidade de Softwares",
		qtdCreditos: 0,
		cargaHoraria: 0,
		disponibilidade: false
	};
}

Disciplina.prototype.status = function() {
	if (this.cargaHoraria <= 0 && this.disponibilidade !== true) 
		throw new Error("Disciplina indisponivel");
};