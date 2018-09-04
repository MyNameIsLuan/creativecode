const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    const m = await message.channel.send(`:ping_pong: Pong!`);
    if(args[0] == "api") {
        return message.channel.send(`:satellite: **|** ${message.author}, latência da API: ${Math.round(client.ping)}ms.`)
    }
    message.channel.send(`:satellite: **|** ${message.author}, latência de: ${m.createdTimestamp - message.createdTimestamp}ms.`)

}
