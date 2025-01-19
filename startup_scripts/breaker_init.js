StartupEvents.registry('item', event => {
    event.create('bedrock_breaker', 'basic')
      .tooltip('Left click to break')
      .useAnimation('block')
      .useDuration(itemstack => 1)
      .use((level, player, hand) => {
              return true
          })
  })
  