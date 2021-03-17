module.exports = {
  name: "onayredlog",
  alisase: ["onayred-log", "onayred-ayarla", "onayredkanal", "onayred-kanal"],
  code: `
  $setServerVar[onayredlog;$mentionedChannels[1]]
  $reply[$messageID;Onay Red Log kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı;yes]
  $argsCheck[>1;Lütfen Onay Red Log kanalını etiketleyin]
  $onlyPerms[admin;Bu komutu sadece **Yönetici** yetkisine sahip olanlar kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]
  `
};
