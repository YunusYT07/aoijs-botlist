const dbd = require("dbd.js");
var fs = require("fs");
const bot = new dbd.Bot({
  token: process.env.token,
  prefix: "!!",
  mobile: true,
  fetchInvites: true
});

bot.onMessage();
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

bot.command({
  name: "eval",
  code: `$eval[$message]
$onlyForIDs[539843855567028227;]`
});
bot.status({
  text: "!!yardım | Falsis Kremlin Botlist Botu Altyapısı",
  type: "COMPETING",
  status: "online",
  time: 12
});
bot.status({
  text: "Falsis Kremlin Botlist Botu Altyapısı",
  type: "COMPETING",
  status: "online",
  time: 12
});
bot.variables({
  hata: "Üzgünüm, Bir hata Oluştu. Lütfen Tekrar Dene.",
  bot: "",
  botlog: "",
  botekle: "",
  yetkili: "",
  onayredlog: "",
  sistem: "kapalı"
});
