// priority: 0

// Visit the wiki for more info - https://kubejs.com/
BlockEvents.leftClicked(event => {
    console.log(event.block)
    console.log(event.block.y)
    console.log(event.item)
    if (event.item == "kubejs:bedrock_breaker"){
        event.level.tell("BB")
        if (event.block == "minecraft:bedrock"){
            event.level.tell("Bedrock")
            if ( event.block.y > 122 && event.block.y <= 128){
                event.level.tell("height")
                let temp = new BlockPos
                temp.x = event.block.x
                temp.z = event.block.z
                for (let y = 123; i <= 128; i++){
                    temp.y = y
                    event.level.destroyBlock(temp,false)
                }
            }
        }
    }
})