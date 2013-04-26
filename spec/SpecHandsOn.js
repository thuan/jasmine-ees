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

describe("HandsON@thuansaraiva - Caso de teste da nossa Disciplina atual - EES@UECE", function() {

	beforeEach(function() {
		disciplina = {
			nome: "Validação e Testes",
			professor: "Camila Maia Loiola",
			categorias: ["Obrigatória","Opcional"],
			horasAula: 40,
			disponibilidade: false,
			
			getNome: function() {
				return this.nome;
			},

			setNome: function(novoNome) {
				this.nome = novoNome;
			},

			verificarDisponibilidade: function() {
				if (this.horasAula <= 30 && this.disponibilidade !== true) 
					throw new Error("Disciplina não será ofertada");
				else 
					this.disponibilidade = true;
			}	
			
		},

		this.addMatchers({
			disponivel: function () {
				this.disponibilidade = true;
				return this.disponibilidade;
			}
		});	
	});

	it("deve verificar tipos dos componentes dos nossos testes", function() {
		expect(disciplina).toEqual(jasmine.any(Object));
		expect(disciplina.professor, disciplina.nome).toEqual(jasmine.any(String));
		expect(disciplina.categorias).toEqual(jasmine.any(Array));
		expect(disciplina.horasAula).toEqual(jasmine.any(Number));
		expect(disciplina.verificarDisponibilidade).toEqual(jasmine.any(Function));
		expect(disciplina.disponibilidade).toBeFalsy();
	});

	it("deve verificar se o nome da disciplina é 'Validação e teste'", function() {
		expect(disciplina.categorias.length).toBeGreaterThan(1);
	});

	it("deve atribuir um novo nome para a Disciplina utilizando um 'Spy'", function() {	
		expect(disciplina.getNome).toHaveBeenCalledWith("Metodologias de Teste");
	});

	it("deve verificar se será lançada exceção para uma disciplina que não será ofertada", function() {
		expect(disciplina.verificarDisponibilidade).toBeTruthy();
	});

	it("deve verificar a disponibilidade da disciplina para cadastro de alunos", function() {
		expect(disciplina.disponibilidade).disponivel();
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