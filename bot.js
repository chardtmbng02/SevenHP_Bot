const mineflayer = require('mineflayer');

function createBot () {
    const bot = mineflayer.createBot({
    host: "sevenhp.aternos.me",
    port: "35034",
    username: "SevenHP_BOT",
    version: false
    })
    bot.on('login', function() {
      bot.chat('/register 123123123 123123123')
      bot.chat('/login 123123123 123123123')
    })
    bot.on('chat', (username, message) => {
      if (username === bot.username) return
      switch (message) {
        case ';start':
          bot.chat('SevenHP_BOT > Bot started! - Made By rdltmbng')
          bot.setControlState('forward', true)
          bot.setControlState('jump', true)
          bot.setControlState('sprint', true)
          break
          case ';stop':
            bot.chat('SevenHP_BOT > Bot stoped! - Made By rdltmbng')
            bot.clearControlStates()
            break
          }
        })
        bot.on('spawn', function() {
          bot.chat('Hi there! I am the bot to let this server online 24/7.')
        })
        bot.on('death', function() {
          bot.chat('No worries! I will be back to keep the server online.')
        })
        bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
        bot.on('error', err => console.log(err))
        bot.on('end', createBot)
}
createBot()