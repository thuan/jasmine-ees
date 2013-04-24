xdescribe("Suite de Testes do nosso HandsOn", function() {
	var caraDosTestes = {
		expert: "@emanuel_canuto",
		noob: "@thuansaraiva"
	};

	it("should be - Deve ser o nosso primeiro exemplo de comportamento", function() {
		var soma = 2 + 2;
		expect(soma).toBe(4);
	});

	it("Deveria ser o cara dos testes fazendo esse HandsOn", function() {  
		expect(caraDosTestes.expert).toEqual("@emanuel_canuto");
	});

	it("Deve verificar quem e o manolo que esta fazendo o handsOn", function() {
		expect(caraDosTestes.noob).toEqual("@thuansaraiva");
	});

});

describe("Agora vamos aos testes sérios #soQueNao", function() {
	var disciplina = new Disciplina();

	beforeEach(function() {
		disciplina = {
			nomeDaDisciplina: "Validação e Testes",
			professorDaDisciplina: "Camila Maia Loiola",
			cargaHoraria: 30,
			ofertada: true,

			verificarDisponibilidade: function(disponibilidade) {
				if (this.cargaHoraria > 0 && this.ofertada === true)
					return true;
				else throw new Error("não é possível ofertar a disciplina"); 
			}
		},

		this.addMatchers({
			setNovoProfessor: function (expected) {
				if (this.nomeDaDisciplina !== expected) return true;
			}
		});	
	});

	it("deve verificar se disciplina é um 'Objeto', se nomeDaDisciplina e professorDaDisciplina são do tipo 'String' se cargaHoraria é um 'Number'", function() {
		expect(disciplina).toEqual(jasmine.any(Object));
		expect(disciplina.professorDaDisciplina, disciplina.nomeDaDisciplina).toEqual(jasmine.any(String));
		expect(disciplina.cargaHoraria).toEqual(jasmine.any(Number));
	});

	it("deve verificar se o nome da disciplina é 'Validação e teste'", function() {
		expect(disciplina.nomeDaDisciplina).toEqual("Validação e Testes");
	});

	it("deve verificar se essa disciplina sera ofertada", function() {
	  expect(disciplina.verificarDisponibilidade).toEqual("true");
	});

	it("Deve verificar se uma disciplina e seus metodos foram definidos", function() {
		expect(disciplina.verificarDisponibilidade).toHaveBeenCalled();
	});

	it("deve verificar se a variavel armazena value", function() {
		expect(disciplina.buscarDisciplina).toHaveBeenCalledWith("Validação e Testes");
	});

	it("deve verificar se o retorno do metodo buscarDisciplina dispara o Error", function() {
		expect(disciplina.buscarDisciplina).not.toThrow();
	});

	xit("Deve retornar o nome da Disciplina e o nome do professor", function() {
		expect(disciplina.setNome).toHaveBeenCalled();
		expect(disciplina.setProf).toHaveBeenCalled(); 
	});

	xit("Deve retornar o nome da Disciplina e o nome do professor - UTILIZANDO SPIES", function() {
		expect(disciplina.setProf).toHaveBeenCalledWith("Camila Maia");
		expect(disciplina.setNome).toHaveBeenCalledWith("Validacao e Testes");
	});
});