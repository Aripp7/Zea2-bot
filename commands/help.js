const botinfo = require('./infobot.json')
const {
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: 'help',
    description: 'embed help',
    execute(message) {
        const embedhelp = new MessageEmbed()
            .setTitle('Commands Bot')
            .addField('informasi bot', '?info')
            .addField('Bantuan', '?help')
            .addField('hapus chat', '?clear <count> ')
            .setURL(botinfo.url)
            .addField('Versi : ', botinfo.versi)
            .setColor('#5584AC')
            .setFooter(botinfo.namabot + ' ' + botinfo.versi);
        message.channel.send(embedhelp)

    }

}