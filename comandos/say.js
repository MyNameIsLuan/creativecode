const client = new Discord.Client({disableEveryone: false});

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(message.author.toString() + " Desculpe, apenas administradores podem usar esse comando");
    const Aviso = args.join(" ");

    let semnada = new Discord.RichEmbed()
    .setColor("edac2a")
    .setAuthor(client.user.username, client.user.avatarURL)
    .addField("!say", "Manda uma mensagem que você enviou;")
    .addField("Uso correto", "`!say <mensagem>`")
    .addField("Permissão", "Você necessita de permissão de administrador para executar este comando.")

    if(!Aviso)
    return message.author.send(semnada)
    message.delete().catch();
    return message.channel.send(Aviso);
  }
