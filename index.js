const { Client } = require('discord.js');
const { Collection } = require('discord.js');
const bot = new Client();
const config = require('./config.json')
const fs = require('fs');
const { type } = require('os');
const commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



for (const file of files) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command)
}

bot.on('ready', () => {
    console.log('Bot Online')
    bot.user.setActivity('in Aripp Server', {
        type: "PLAYING"
    }).catch(console.error)

});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'pendatang-baru');

    if (!channel) return;

    if (member.guild.name === 'Nongkrong') {
        channel.send(`Halo ${member}, Selamat Datang di Nongkrong!`)
    }
})

bot.on('message', message => {
    let args = message.content.substring(config.PREFIX.length).split(' ');
    switch (args[0]) {
        case 'play':
            message.reply('soba lu dih, lun pandai mmbuek ny')
            break;
        case 'info':
            commands.get('info').execute(message)
            break;
        case 'help':
            commands.get('help').execute(message)
            break;

        case 'clear':
            commands.get('clear').execute(message, args)
            break;
    }

})

bot.login(config.token)