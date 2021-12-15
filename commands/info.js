const {

    MessageEmbed
} = require('discord.js');
const { Collection } = require('discord.js');
const botinfo = require('./infobot.json')

module.exports = {
    name: 'info',
    description: 'babu',
    execute(message) {

        const infoembed = new MessageEmbed()
            .setTitle('Informasi bot')
            .addField('Nama Bot : ', botinfo.namabot)
            .setURL(botinfo.url)
            .setDescription(botinfo.info)
            .addField('Versi : ', botinfo.versi)
            .setColor('#5584AC')
            .addField('Author : ', botinfo.author)
            .setFooter(botinfo.namabot + ' ' + botinfo.versi);
        message.channel.send(infoembed)

    }
}