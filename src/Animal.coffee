class Animal
  constructor: (@nome) ->

  mover: (metros) ->
    console.log @nome + " se moveu #{metros} metros."

class Cobra extends Animal
  mover: ->
    console.log "Rastejando..."
    super 5

class Cavalo extends Animal
  mover: ->
    console.log "Galopando..."
    super 45

cobra = new Cobra "A cobra"
cavalo = new Cavalo "O cavalo"

cobra.mover()
cavalo.mover()