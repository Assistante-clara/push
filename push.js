exports.action = (data)=> {
  
var reg="/"+data.push+"(.+)/i" ; var rgxp = eval(reg) ; var temp = JarvisIA.reco.match(rgxp) ; console.log(temp)
var PhrasePush = temp[1].trim() ; console.log("on envoie : ",PhrasePush)


var Pushover = require('node-pushover');
var push = new Pushover({
  token: "token",
  user: "user"
});

push.send("Some title", PhrasePush ,  (err, res)=> {
  if(err) return console.log(err);
  console.log(res);
});

return
}

