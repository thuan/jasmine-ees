describe("HandsON@thuansaraiva - Suites, Specs e Matchers - EES@UECE", function() {
	var tester = {
		expert: "@emanuel_canuto",
		noob: "@thuansaraiva"
	};

	it("should be - Deve ser o exemplo de teste mais 'begginer' do mundo", function() {
		var soma = 2 + 2;
		expect(soma).toBe(4);
	});

	it("Deveria ser o cara dos testes fazendo esse HandsOn", function() {  
		expect(tester.expert).toContain("@emanuel_canuto");
	});
	it("Deve verificar quem e o manolo que esta fazendo o handsOn", function() {
		expect(tester.expert).not.toContain("@thuansaraiva");
	});
});

describe("HandsON@thuansaraiva - Suites, Specs e Matchers - EES@UECE", function() {

	beforeEach(function() {
		disciplina = {
			nomeDaDisciplina: "Validação e Testes",
			professorDaDisciplina: "Camila Maia Loiola",
			preRequisito: "Qualidade de Softwares",
			qtdCreditos: 0,
			cargaHoraria: 0,
			disponibilidade: false,

			informarEstado: function() {
				if (this.cargaHoraria <= 0 && this.disponibilidade !== true) 
					throw new Error("Disciplina não será ofertada");
			}
		},

		this.addMatchers({
			abrirDisponibilidade: function () {
				this.disponibilidade = true;
				return this.disponibilidade;
			}
		});	
	});

	it("deve verificar os tipos de cada atributo da disciplina", function() {
		expect(disciplina).toEqual(jasmine.any(Object));
		expect(disciplina.professorDaDisciplina, disciplina.nomeDaDisciplina).toEqual(jasmine.any(String));
		expect(disciplina.qtdCreditos).toEqual(jasmine.any(Number));
	});

	it("deve verificar se o nome da disciplina é 'Validação e teste'", function() {
		expect(disciplina.nomeDaDisciplina).toEqual("Validação e Testes");
	});

	it("deve verificar se será lançada exceção para uma disciplina que não será ofertada", function() {
		expect(function () {
			disciplina.informarEstado();
		}).toThrow("Disciplina não será ofertada");
	});

	it("deve verificar a disponibilidade da disciplina para cadastro de alunos", function() {
		expect(disciplina.disponibilidade).abrirDisponibilidade();
	});

	xit("Deve verificar se uma disciplina e seus metodos foram definidos", function() {
		expect(disciplina.informarEstado).toHaveBeenCalled();
	});

	xit("deve verificar se a variavel armazena value", function() {
		expect(disciplina.buscarDisciplina).toHaveBeenCalledWith("Validação e Testes");
	});

	xit("deve verificar se o retorno do metodo buscarDisciplina dispara o Error", function() {
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