module.exports = {
  name: "onay",
  aliases: ["onayla", "botonay", "botonayla"],
  code: `$channelSendMessage[$getServerVar[onayredlog];{title:Bir bot onaylandı}{description:Botun Bilgileri
  Bot Adı : <@$getUserVar[bot]>
  Bot ID'si : $getUserVar[bot]
  Bot Etiketi : <@$getUserVar[bot]>
  Bot Sahibi Adı : $username
  Bot Sahibi ID'si : $message[1]
  Bot Sahibi Etiketi : <@$message[1]>}{footer:Falsis Kremlin Botlist Sistemi}{color:GREEN}]
  $reply[$messageID;Onaylandı;yes]
  $argsCheck[>1;Lütfen Bot onaylamayı Düzgün Kullanın. Doğrusu : \`!!botonayla sahipid\`]
  $onlyIf[$hasRole[$authorid;$getServerVar[yetkili]]==true;Bu komutu sadece $roleName[$getServerVar[yetkili]] rolündekiler kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]`
};
