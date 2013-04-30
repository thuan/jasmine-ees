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

	it("Deve verificar quem é o manolo que esta fazendo o handsOn", function() {
		expect(tester.expert).not.toContain("@thuansaraiva");
	});
});

describe("HandsON@thuansaraiva - Caso de teste da nossa Disciplina - EES@UECE", function() {

	beforeEach(function() {
		disciplina = {
			nome: "Validação e Testes",
			professor: "Camila Maia Loiola",
			categoria: ["Obrigatória","Presencial"],
			horasAula: 30,
			disponibilidade: false,
			
			setNome: function(novoNome) {
				this.nome = novoNome;
			},

			getNome: function() {
				return this.nome;
			},

			verificarDisponibilidade: function() {
				if (this.horasAula <= 30 && this.disponibilidade !== true) 
					throw new Error("Disciplina não será ofertada");
				else 
					this.disponibilidade = true;
			}	
			
		},

		this.addMatchers({
			disponibilizar: function () {
				this.disponibilidade = true;
				return this.disponibilidade;
			}
		});	
	});

	it("deve verificar tipos dos componentes dos nossos testes", function() {
		expect(disciplina).toEqual(jasmine.any(Object));
		expect(disciplina.professor, disciplina.nome).toEqual(jasmine.any(String));
		expect(disciplina.categoria).toEqual(jasmine.any(Array));
		expect(disciplina.horasAula).toEqual(jasmine.any(Number));
		expect(disciplina.verificarDisponibilidade).toEqual(jasmine.any(Function));
		expect(disciplina.disponibilidade).toBeFalsy();
	});

	it("deve atribuir o nome para a nova Disciplina 'Padroes de Projeto' utilizando um 'Spy'", function() {
		spyOn(disciplina, "getNome").andCallThrough();
		disciplina.setNome("Padroes de Projeto");
		expect(disciplina.nome).toEqual('Padroes de Projeto');
	});

	it("deve verificar se o nome da disciplina é 'Validação e teste'", function() {
		expect(disciplina.nome).toEqual('Validação e Testes');
	});

	it("deve verificar se será lançada exceção para uma disciplina quando não for ofertada", function() {
		expect(function () {
			disciplina.verificarDisponibilidade();
		}).toThrow("Disciplina não será ofertada");
	});

	it("deve verificar se o numero de categoria é maior do que 1", function() {
		expect(disciplina.categoria.length).toBeGreaterThan(1);
	});

	it("deve forçar a disponibilidade de uma disciplina", function() {
		expect(disciplina.disponibilidade).disponibilizar();
	});

});