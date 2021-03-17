module.exportsn= ({
  name:"botekle",
  code:`$channelSendMessage[$getServerVar[botlog];{title:Yeni Bir Bot Eklendi}{description:Botun Bilgileri
  Bot Adı : $userTag[$message[1]]
  Bot ID'si : $message[1]
  Bot Etiketi : <@$message[1]>
  Bot Sahibi Adı : $userTag[$authorID]
  Bot Sahibi ID'si : $username[$authorID]
  Bot Sahibi Etiketi : <@$authorID>
  
  Bot Prefixi : $message[2]
  Bot DBL onay durumu : $message[3] $message[4] $message[5] $message[6]
  
  [0 Perm Davet Linki\\](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=0) | [8 Perm Davet Linki\\](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=8)}{footer:Falsis Kremlin Botlist Sistemi}{color:303136}]
  `
})