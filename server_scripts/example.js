// priority: 0

// Visit the wiki for more info - https://kubejs.com/
BlockEvents.leftClicked(event => {
    console.log(event.block)
    console.log(event.block.x)
    console.log(event.block.y)
    console.log(event.block.z)
    console.log(event.item)
})