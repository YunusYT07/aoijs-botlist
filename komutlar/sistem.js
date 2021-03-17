module.exports = {
  name: "sistem",
  alisase: ["sistem-aç", "sitemaç"],
  code: `
  $setServerVar[sistem;açık]
  $reply[$messageID;Sistem açıldı;yes]
  $onlyPerms[admin;Bu komutu sadece **Yönetici** yetkisine sahip olanlar kullanabilir.]
  $suppressErrors[$getServerVar[hata]]
  `
};
