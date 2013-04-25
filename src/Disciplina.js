function Disciplina () {
	nomeDaDisciplina = "Validação e Testes";
	professor = "Camila Maia Loiola";
	cargaHoraria = 0;
	disponibilidade = true;
}

Disciplina.prototype.status = function() {
	if (this.cargaHoraria <= 0 && this.disponibilidade !== true) 
		throw new Error("Disciplina indisponivel");
};