const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const ms = require("ms");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Bot Command E!", {type: "WATCHING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find User!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Permission Buddy!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#000cff")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "🚫incidents");
    if(!kickChannel) return message.channel.send("Can't Find Incidents Channel!");

    message.guild.member(kUser).kick(kReason)
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find User!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Don't Have Permission Buddy!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~ban~")
    .setColor("#000cff")
    .addField("banned User", `${bUser} with ID ${bUser.id}`)
    .addField("banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "🚫incidents");
    if(!incidentchannel) return message.channel.send("Can't Find Incidents Channel!");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

    return;
  }

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("__**Server Information**__")
    .setColor("#000cff")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }


  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#000cff")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }




  //TALK
  if(cmd === `${prefix}Kieran`){
    return message.channel.send("Gay");
  }

  if(cmd === `${prefix}Wadu`){
    return message.channel.send("Hek");
  }

  if(cmd === `${prefix}IsYourRefrigeratorRunning`){
    return message.channel.send("Better Go Catch it!");
  }

  if(cmd === `${prefix}Kaleb`){
    return message.channel.send("Faggot!");
  }

  if(cmd === `${prefix}AlfiesDad`){
    return message.channel.send("Trash man!");
  }

  if(cmd === `${prefix}IsYourRefrigeratorRunning`){
    return message.channel.send("Better Go Catch it!");
  }

  if(cmd === `${prefix}AnneFrank`){
    return message.channel.send("Gassed!");
  }

  if(cmd === `${prefix}MadelineBabes`){
    return message.channel.send("Lost As Fuck!");
  }

  if(cmd === `${prefix}Me`){
    return message.channel.send("Blown Up!");
  }



});

bot.login(botconfig.token);
