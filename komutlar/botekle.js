module.exports = {
  name: "botekle",
  alisase: ["bot-ekle", "addbot", "add-bot"],
  code: `$channelSendMessage[$getServerVar[botlog];{title:Yeni Bir Bot Eklendi}{description:Botun Bilgileri
  Bot Adı : <@$nomentionmessage[1]>
  Bot ID'si : $nomentionmessage[1]
  Bot Etiketi : <@$nomentionmessage[1]>
  Bot Sahibi Adı : $userTag[$authorid]
  Bot Sahibi ID'si : $authorID
  Bot Sahibi Etiketi : <@$authorID>
  
  Bot Prefixi : $nomentionmessage[2]
  Bot DBL onay durumu : $replaceText[$message;$message[1];;-1]
  
  [0 Perm Davet Linki](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=0) | [8 Perm Davet Linki](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=8)}             {footer:Falsis Kremlin Botlist Sistemi}{color:303136}]
  $setUserVar[bot;$message[1];$authorid]
  $reply[$messageID;Başvurunuz Başarıyla Alındı;yes]
  $deleteIn[5s]
  $deletecommand
  $argsCheck[>3;Lütfen Bot Eklemeyi Düzgün Kullanın. Doğrusu : \`!!botekle botid prefix dbl onay durumu\`]
  $onlyForChannels[$getServerVar[botekle];Burası Bot Ekleme Kanalı Değil! Lütfen kanalları doğru kullan]
  $onlyIf[$getUserVar[bot]!=$message[1];Sunucuya Sadcece 1 tane bot ekleyebilirsin.]
  $onlyIf[$getServerVar[sistem]==açık;Botlist Sistemi Aktif Edilmemiş]
  $suppressErrors[$getServerVar[hata]]
  `
};
