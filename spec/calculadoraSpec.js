// Generated by CoffeeScript 1.6.2
describe("Calculadora", function() {
  var calculadora;

  calculadora = null;
  beforeEach(function() {
    return calculadora = new Calculadora();
  });
  it("somar dois numeros positivos ", function() {
    var resultado;

    resultado = calculadora.somar(2, 3);
    return expect(resultado).toBe(5);
  });
  it("somar um numero negativo com um positivo", function() {
    var resultado;

    resultado = calculadora.somar(-10, 5);
    return expect(resultado).toBe(-5);
  });
  it("subtrair dois numeros positivos", function() {
    var resultado;

    resultado = calculadora.subtrair(10, 4);
    return expect(resultado).toBe(6);
  });
  it("dividir dois numeros divisiveis", function() {
    var resultado;

    resultado = calculadora.dividir(10, 2);
    return expect(resultado).toBe(5);
  });
  return it("multiplicar dois numeros", function() {
    var resultado;

    resultado = calculadora.multiplicar(10, 2);
    return expect(resultado).toBe(20);
  });
});
