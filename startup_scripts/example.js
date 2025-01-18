StartupEvents.registry('item', event => {
    event.create('bedrock_breaker', 'basic')
      .tooltip('Right click to break')
      /**
       * The use animation of the item, can be  "spear" (trident),
       * "crossbow", "eat" (food), "spyglass", "block", "none", "bow", "drink"
       * When using certain animations, corresponding sound will be played.
       */
      .useAnimation('block')
      /**
       * The duration before the item finishs its using,
       * if you need something like hold-and-charge time (like bow),
       * consider set this to 72000 (1h) or more.
       * A returned value of 0 or lower will render the item not usable.
       */
      .useDuration(itemstack => 1)
      /**
       * When item is about to be used.
       * If true, item will starts it use animation if duration > 0.
       */
      .use((level, player, hand) => {
              return true
          })
      .finishUsing((itemstack, level, entity) => {
        /*
        if (block.y > 122 && block.y <= 128){
          for (let i = 123; i <= 128; i++) {
            if (block == "minecraft:bedrock") {
              // Break block
            }
          }
        }
        */
        console.log(entity.facing)
        console.log(entity.getFacing())
        console.log(entity.getLookAngle())
      })
  })
  