BlockEvents.leftClicked(event => {
    if (event.item == "kubejs:bedrock_breaker") {
        if (event.block.y > 122 && event.block.y <= 128) {
            for (let y = 123; y <= 127; y++) {
                let dblock = new BlockPos(event.block.x, y, event.block.z)
                let tryDestroy = event.level.getBlock(event.block.x, y, event.block.z)
                if (tryDestroy == "minecraft:bedrock") {
                    event.level.destroyBlock(dblock)
                }
            }
        }
    }
})
ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('kubejs:bedrock_breaker', [
      '  PAND ',
      'PPPNSND',
      '  PAND '
    ], {
      D: 'create:mechanical_drill',
      N: 'minecraft:netherite_ingot',
      S: 'minecraft:nether_star',
      A: 'create:andesite_alloy',
      P: 'create:fluid_pipe'
    })
  })