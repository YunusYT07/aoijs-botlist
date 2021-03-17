module.exports = ({
  name:"red",
  aliases:['reddet','botred','botreddet'],
  code:`$channelSendMessage[$getServerVar[onayredlog];{title:Bir bot reddedildi}{description:Botun Bilgileri
  Bot Adı : $userTag[$getUserVar[bot;$message[1]]]
  Bot ID'si : $message[1]
  Bot Etiketi : <@$getUserVar[bot;$message[1]]>
  Bot Sahibi Adı : $userTag[$message[1]]
  Bot Sahibi ID'si : $username[$message[1]]
  Bot Sahibi Etiketi : <@$message[1]>
  
  Bot Prefixi : $message[2]
  Bot DBL onay durumu : $message[3] $message[4] $message[5] $message[6]}{footer:Falsis Kremlin Botlist Sistemi}{color:RED}]
  $reply[$messageID;Reddedildi;yes]
  $argsCheck[>1;Lütfen Bot reddetmeyi Düzgün Kullanın. Doğrusu : \`!!botreddet sahipid\`]
  $onlyIf[$hasPerms[$authorid;$getServerVar[yetkili]]==true;Bu komutu sadece $roleName[$getServerVar[yetkili]] rolündekiler kullanabilir.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]`
})