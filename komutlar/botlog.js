module.exports = {
  name: "botlog",
  alisase: ["bot-log", "botlog-ayarla", "botlog-kanal"],
  code: `
  $setServerVar[botlog;$mentionedChannels[1]]
  $reply[$messageID;Botlog kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı;yes]
  $argsCheck[>1;Lütfen botlog kanalını etiketleyin]
  $onlyPerms[admin;Bu komutu sadece **Yönetici** yetkisine sahip olanlar kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]
  `
};
