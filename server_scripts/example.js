// priority: 0

// Visit the wiki for more info - https://kubejs.com/
BlockEvents.leftClicked(event => {
    console.log(event.block)
    console.log(event.block.y)
    console.log(event.item)
    if (event.item == "bedrock_breaker" && 
        event.block == "minecraft:bedrock" && 
        event.block.y > 122 && 
        event.block.y < 130){
            event.level.tell("Ouii!")
    }
})