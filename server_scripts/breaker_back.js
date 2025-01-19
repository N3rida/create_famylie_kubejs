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
