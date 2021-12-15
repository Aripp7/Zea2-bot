module.exports = {
    name: 'clear',
    description: 'command clear',
    execute(message, args) {
        if (!args[1]) {
            return message.reply('masukkan jumlah chat yang akan dihapus *contoh : ?clear 5');

        } else {

            message.channel.bulkDelete(args[1]);
            message.channel.bulkDelete(1);
        }
    }

}