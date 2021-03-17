module.exports = {
  name: "başvuru",
  alisase: [
    "başvuru-kanal",
    "başvurukanal-ayarla",
    "başvurukanal",
    "boteklekanal"
  ],
  code: `
  $setServerVar[botekle;$mentionedChannels[1]]
  $reply[$messageID;Bot ekleme kanalı başarıyla <#$mentionedChannels[1]> olarak ayarlandı;yes]
  $argsCheck[>1;Lütfen bot ekleme kanalını etiketleyin]
  $onlyPerms[admin;Bu komutu sadece **Yönetici** yetkisine sahip olanlar kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]
  `
};
