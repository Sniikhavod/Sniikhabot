const Discord = require('discord.js')
const client = new Discord.Client();


var prefix = "//";


client.login(process.env.Token);
client.on("ready",()=>{
    console.log("All systeme Online Sniik !")
    client.user.setGame("//aide pour... l'aide !")
});


client.on('message',message =>{
    if (message.content ==="Bonjour"){
       message.reply("Bonsoir enculé, t'as vus l'heure ?");
       console.log('Le bot dis de la merde');
    }


    if(message.content=== prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici les commandes d'aides :")
        .setDescription("Je suis un monstre hybride venant du trou du cul du monde")
        .addField("//aide","Affiche les commandes de ce truc")
        .addField("Bonjour","Le bot repond, pas poliement mais IL PARLE !!!!!")
        .addField("//stats","Le bot te Mp et te donne des infos sur ton profil")
        .addField("//info", "donne des infos sur le serveur et toi")
        .addField("//Kick","Kick le gens mentionné, si vous avez le droit :joy: ~~plebes~~")
        .addField("//Clear (args)", "Supprime le nombre de message entré en arguments. Exemple : ```//Clear 7```\nPuis : `7 messages ont été supprimés !`")



        .setFooter("Menu d'aide - si t pas content c la meme HolySinner de merde ")
        message.channel.sendMessage(help_embed);
        console.log("qqlq a ouvert l'aide ! des gens on en un truc a foutre !")
    }

    if(message.content=== prefix + "info"){
        var info_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici des infos sur toi et le serv")
        .addField(":robot: Nom :",`${client.user.tag}`,true)
        .addField("Descrinateur du bot :hash:",`#${client.user.discriminator}`)//#3131, le tag du bot
        .addField(":id:",`${client.user.id}`)//#6969, le tag du joueur
        .addField("Nombre de memnbres :", message.guild.members.size)//Guild = serveur discord, sous menu Member, sous menu Size
        .addField("Nombre de salons/Categorie",message.guild.channels.size)//Sous menu Channels, sous menu Size
        .setFooter("Info - Randnom trash")
        message.channel.sendMessage(info_embed)
        console.log("La commande info a été jouer")
    }
    if (message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !"); //Verifie si la personne peut kick avec son roles
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devenez @qqlq pour le kick lol")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if (!kick){
            return message.channel.send("Il existe pas ton gars")
        }
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
            return message.channel.send("OUPS je peux pas kick, contact un gradé");
        }
        kick.kick().then(member =>{
            message.channel.send(`${member.user.username} est kick par ${message.auhtor.username}`)//message.auhtor.username Celui qui vien de parler
        });
    }


    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);
        
        if(!args[0]) return message.channel.send("Tu doit dire combien de message tu veux surprimer!");
         message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
        })
    }


    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()){
        case "stats":
        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgAuthor = message.author.id;
        var stats_embed = new Discord.RichEmbed()
        .setColor("#FCDC12")
        .setTitle(`Statisque de toi : ${message.author.username}`)
        .setDescription("Voicie certain de t'es statistique :")
        .addField(`:id: de toi :`,msgAuthor,true)
        .addField("Date de creation de toi :",userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Go Mp bro")
        message.author.send({embed: stats_embed});
        break;
    }



});
