module.exports = {
  name: "onay",
  aliases: ["onayla", "botonay", "botonayla"],
  code: `$channelSendMessage[$getServerVar[onayredlog];{title:Bir bot onaylandı}{description:Botun Bilgileri
  Bot Adı : $userTag[$getUserVar[bot;$message[1]]]
  Bot ID'si : $getUserVar[bot;$message[1]]
  Bot Etiketi : <@$getUserVar[bot;$message[1]]>
  Bot Sahibi Adı : $userTag[$message[1]]
  Bot Sahibi ID'si : $username[$message[1]]
  Bot Sahibi Etiketi : <@$message[1]>}{footer:Falsis Kremlin Botlist Sistemi}{color:GREEN}]
  $reply[$messageID;Onaylandı;yes]
  $argsCheck[>1;Lütfen Bot onaylamayı Düzgün Kullanın. Doğrusu : \`!!botonayla sahipid\`]
  $onlyIf[$hasPerms[$authorid;$getServerVar[yetkili]]==true;Bu komutu sadece $roleName[$getServerVar[yetkili]] rolündekiler kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]`
};
