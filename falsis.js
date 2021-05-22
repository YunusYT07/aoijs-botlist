const falsis = require("aoi.js");
var fs = require("fs");
const bot = new falsis.Bot({
  token: "Token Giriniz",
  prefix: "!!",
  mobile: true,
  fetchInvites: true
});

bot.onMessage();
bot.loadCommands(`./komutlar/`)

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
