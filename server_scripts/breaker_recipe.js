ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('kubejs:bedrock_breaker', [
      '       ',
      '       ',
      '  PAND ',
      'PPPNSND',
      '  PAND ',
      '       ',
      '       ',
    ], {
      D: 'create:mechanical_drill',
      N: 'minecraft:netherite_ingot',
      S: 'minecraft:nether_star',
      A: 'create:andesite_alloy',
      P: 'create:fluid_pipe',
    })
  })
