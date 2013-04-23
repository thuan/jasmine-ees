describe("Suite de Testes do nosso HandsOn", function() {
	var caraDosTestes = {
		expert: "@emanuel_canuto",
		noob: "@thuansaraiva"
	};

	it("should be - Deve ser o nosso primeiro exemplo de comportamento", function() {
	  var soma = 2 + 2;
	  expect(soma).toBe(4);
	});

	it("Deveria ser o cara dos 'testes' fazendo esse HandsOn", function() {  
	  expect(caraDosTestes.expert).toEqual("@emanuel_canuto");
	});

	it("Deve verificar quem e o malacabado que esta fazendo o handsOn", function() {
	  expect(caraDosTestes.noob).toEqual("@thuansaraiva");
	});

});

describe("Agora vamos aos testes sérios #soQueNao", function() {
	  var disciplina = new Disciplina();
	  
	  beforeEach(function() {
	  	disciplina = {
	  		nomeDaDisciplina: "Validação e Testes",
	  		professorDaDisciplina: "Camila Maia",
	  		cargaHoraria: 30,
	  		
	  		buscarDisciplina: function (argument) {
	  			if (nomeDaDisciplina != argument) {
	  				throw new Error("a disciplina não é Validação e testes");
	  			}
	  		}
	  	}

	  	spyOn(disciplina, 'buscarDisciplina');
	  	disciplina.buscarDisciplina("Validação e Testes");
	  	
	  	this.addMatchers({
	  		seraOfertada : function (expected) {
	  			if (this.actual != expected) {
	  				return true;
	  			};
	  		}
	  	});	
	  });

	  it("deve verificar se o nome da disciplina é 'Validação e teste'", function() {
	    expect(disciplina.nomeDaDisciplina).toEqual("Validação e Testes");
	  });

	  it("Deve verificar se uma disciplina e seus metodos foram definidos", function() {
	     expect(disciplina.buscarDisciplina).toHaveBeenCalled();
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