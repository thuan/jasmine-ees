describe "Calculadora", ->
	calculadora = null

	beforeEach ->
		calculadora = new Calculadora()

	it "somar dois numeros positivos ", ->
		resultado = calculadora.somar 2,3
		expect(resultado).toBe 5

	it "somar um numero negativo com um positivo", ->
		resultado = calculadora.somar -10,5
		expect(resultado).toBe -5

	it "subtrair dois numeros positivos", ->
		resultado = calculadora.subtrair 10,4
		expect(resultado).toBe 6

	it "dividir dois numeros divisiveis", ->
		resultado = calculadora.dividir 10,2
		expect(resultado).toBe 5

	it "multiplicar dois numeros", ->
		resultado = calculadora.multiplicar 10,2
		expect(resultado).toBe 20
