const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    const m = await message.channel.send(`:ping_pong: Pong!`);
    if(args[0] == "api") {
        message.channel.send(`:satellite: **|** ${message.author}, latência da API: ${Math.round(client.ping)}ms.`)
        return m.delete().catch(O_o=>{});
    }
    message.channel.send(`:satellite: **|** ${message.author}, latência de: ${m.createdTimestamp - message.createdTimestamp}ms.`)
    m.delete().catch(O_o=>{});

}
