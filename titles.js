const titles = ["ILIOSKI //", "webdev & cybersecurity", "ilioski.xyz"];
let index = 0;
setInterval(() => {
  document.title = titles[index++ % titles.length];
}, 3000);
