describe("Suite-EES - (Cenários de testes - Jasmine)", function (){
	describe('Suite-EES - (Specs)', function () {
		var disciplina, nomeDisciplina, buscaDisciplina;
		beforeEach(function() {
			disciplina = {

				setNomeDisciplina: function (value) {
					nomeDisciplina = value;
				},

				getNomeDisciplina: function () {
					return nomeDisciplina;
				},

				professor: function (nomeProf) {

				},

				cargaHoraria : function (argument) {

				}
			};

			this.addMatchers({
				toBeOffered: function () {

				}
			});

			spyOn(disciplina, "getNomeDisciplina").andCallThrough();
			disciplina.setNomeDisciplina("Validação e testes");
			disciplina.getNomeDisciplina();


		});

		it("deve verificar se o spy do metodo getNomeDisciplina sera chamado", function() {
			expect(disciplina.getNomeDisciplina).toHaveBeenCalled();
		});

		it("deve verificar se nomeDaDisciplina é 'Validação e testes' ", function() {
			expect(nomeDisciplina).toEqual("Validação e testes");
		});

		it("deve passar se buscaDisciplina", function() {
			expect(disciplina.getNomeDisciplina).toHaveBeenCalledWith("Validação e testes");
		});

		xit("Deveria testar o matcher personalizado", function() {
			expect(disciplina.cargaHoraria).toBeOffered();
		});

		xit("Deveria definir os metodos professor e nome", function() {
			expect(disciplina.professor).toBeDefined();
			expect(disciplina.nome).not.toBeUndefined();
		});

		xit("Deveria existir somente 1 Professor para essa Disciplina", function() {
			expect(disciplina.professor.calls.length).toEqual(1);
		});
		
		xit('A Disciplina deveria ser chamada de "Validacao e Teste"', function(){
			expect(disciplina.nome.calls[0].args[0]).toEqual('Validacao e Testes');
		});

		xit("Verificar se a variavel 'matcher' vai ser true", function(){
			expect(matcher.nome).toBe(true);
		});

	});

});  