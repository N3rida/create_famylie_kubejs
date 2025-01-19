// priority: 0

// Visit the wiki for more info - https://kubejs.com/
BlockEvents.leftClicked(event => {
    if (event.item == "kubejs:bedrock_breaker"){
        if (event.block == "minecraft:bedrock"){
            if ( event.block.y > 122 && event.block.y <= 128){
                for (let y = 123;y<=127;Y++){
                    dblock = new BlockPos(event.block.x,y,event.block.z)
                    event.level.destroyBlock(dblock)            
                }
            }
        }
    }
})