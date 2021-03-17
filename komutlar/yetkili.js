module.exports = {
  name: "yetkili",
  alisase: ["botlist-yetkilisi", "yetkili-ayarla", "yetkili-rol"],
  code: `
  $setServerVar[yetkili;$mentionedRoles[1]]
  $reply[$messageID;Botlist yetkilisi rolü başarıyla $roleName[$mentionedRoles[1]] olarak ayarlandı;yes]
  $argsCheck[>1;Lütfen yetkili rolünü etiketleyin]
  $onlyPerms[admin;Bu komutu sadece **Yönetici** yetkisine sahip olanlar kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]
  `
};
