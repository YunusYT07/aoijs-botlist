module.exports = ({
  name:"onay",
  aliases:['onayla','botonay','botonayla'],
  code:`$channelSendMessage[$getServerVar[onayredlog];{title:Bir bot onaylandı}{description:Botun Bilgileri
  Bot Adı : $userTag[$message[1]]
  Bot ID'si : $message[1]
  Bot Etiketi : <@$message[1]>
  Bot Sahibi Adı : $userTag[$authorID]
  Bot Sahibi ID'si : $username[$authorID]
  Bot Sahibi Etiketi : <@$authorID>
  
  Bot Prefixi : $message[2]
  Bot DBL onay durumu : $message[3] $message[4] $message[5] $message[6]}{footer:Falsis Kremlin Botlist Sistemi}{color:GREEN}]
  $reply[$messageID;Onaylandı;yes]
  $argsCheck[>1;Lütfen Bot onaylamayı Düzgün Kullanın. Doğrusu : \`!!botonayla sahipid\`]
  $onlyIf[$hasPerms[$authorid;$getServerVar[yetkili]]==true;Bu komutu sadece $roleName[$getServerVar[yetkili]] rolündekiler kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]`
})