/*
 *
 * A simple bot demo https://github.com/PrismarineJS/prismarine-viewer
 * Start it then open your browser to http://localhost:3007 and enjoy the view
 *
 */

const mineflayer = require('mineflayer')
const mineflayerViewer = require('prismarine-viewer').mineflayer

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node viewer.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

const bot = mineflayer.createBot({
  host: 'Omar_HeroYT.aternos.me',
  port: 25565,
  username: 'viewer',
})

bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: false })
})
