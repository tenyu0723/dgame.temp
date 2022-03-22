const http = require('http');
const querystring = require('querystring');
const discord = require('discord.js-selfbot');
const client = new discord.Client();
const target_ch_id = "回したいところのchIDを貼ってください" // You must change
const log_ch_id = "各種ログを流すchIDを貼ってください" // You must change
const your_id = "あなたのIDを貼ってください" // You must change
const bot_id = "あなたの回させるアカウントのIDを貼ってください" // You must change

http.createServer(function(req, res){
 if (req.method == 'POST'){
   var data = "";
   req.on('data', function(chunk){
     data += chunk;
   });
   req.on('end', function(){
     if(!data){
        console.log("No post data");
        res.end();
        return;
     }
     var dataObject = querystring.parse(data);
     console.log("post:" + dataObject.type);
     if(dataObject.type == "wake"){
       console.log("Woke up in post");
       res.end();
       return;
     }
     res.end();
   });
 }
 else if (req.method == 'GET'){
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Discord Bot is active now\n');
 }
}).listen(3000);

client.on("ready", async () => {
client.channels.cache.get(log_ch_id).send("[起動ログ]\nログイン/再起動完了しました！")
const user = client.users.cache.get("304932786286886912")
let ch = user.dmChannel
if (!ch) ch = await user.createDM();
ch.messages.fetch().then(collected => {
const first = collected.first();
if(first.author.id == "304932786286886912"){
client.channels.cache.get(target_ch_id).send("::atk")
}else{
return;
}
})
console.log(`${client.user.tag} is ready!`)
});

client.on('message', async message => {
const receivedEmbed = message.embeds[0];
if(!receivedEmbed || !receivedEmbed.title){
return;
}
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
if(receivedEmbed.title.match(/超激レア/) || message.content.match(/はやられてしまった。。。/) || message.content.match(/ファイアボール/)){
return;
 }
 if(receivedEmbed.title.match(/待ち構えている...！/)){
   setTimeout(() => {
      message.channel.send("::atk");
    }, 150)
   }
  }
 }
});
client.on('message', async message => {
const receivedEmbed = message.embeds[0];
if(!receivedEmbed || !receivedEmbed.description){
return;
}
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
 if(receivedEmbed.description.match(/::a/) && receivedEmbed.description.match(/処理がまだ終わっていません/)){
   setTimeout(() => {
      message.channel.send("::atk");
    }, 3500);
   }
  }
 }
});
client.on('message', async message => {
const receivedEmbed = message.embeds[0];
if(!receivedEmbed || !receivedEmbed.description){
return;
}
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
  if(receivedEmbed.description.match(/仲間になりたそうに/)){
      setTimeout(() => {
      message.channel.send("no");
    }, 500)
   }
  }
 }
});
client.on('message', async message => {
const receivedEmbed = message.embeds[0];
if(!receivedEmbed || !receivedEmbed.description){
return;
}
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
  if(receivedEmbed.description.match(/エリクサーを使って/)){
      setTimeout(() => {
      message.channel.send("::atk");
    }, 500)
   }
  }
 }
});
/*This part will be used when TAO's WEB is restored*/
//client.on('message', async message => {
//const receivedEmbed = message.embeds[0];
//if(!receivedEmbed || !receivedEmbed.description){
//return;
//}
//if(message.channel.id === target_ch_id){
//if(message.author.id === "526620171658330112"){
//  if(receivedEmbed.description.match(/仮BANをしました。10分間の解除時間を設けます。/)){
//      const messages = await message.channel.messages.fetch();
//      let filtered = messages.filter((msg) => msg.content.startsWith("```diff\n- 属性"));
//      const fetch = filtered.first()
//      if(fetch.embeds[0]){
//      const split = fetch.embeds[0].title.split("\n")
//      const third = split[2]
//      const third_ = third.split(" ")
//      const lv = third_[0]
//      const japanStandardTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
//      const hour = new Date(japanStandardTime).getHours();
//      const minute = new Date(japanStandardTime).getMinutes();
//      const second = new Date(japanStandardTime).getSeconds();
//      client.channels.cache.get(log_ch_id).send(`[BANログ]\nBANされました。\nBANされたサーバー:${message.guild.name}/${message.guild.id}\nBAN時の敵のレベル:${lv}\nBANされた時刻:${hour}時${minute}分${second}秒\n解除に行ってください。(https://taogames.net/unlock)`)
//      }
//      if(!fetch.embeds[0]){
//      const split = fetch.content.split("\n")
//      const third = split[3]
//      const third_ = third.split(" ")
//      const lv = third_[1]
//      const japanStandardTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
//      const hour = new Date(japanStandardTime).getHours();
//      const minute = new Date(japanStandardTime).getMinutes();
//      const second = new Date(japanStandardTime).getSeconds();
//      client.channels.cache.get(log_ch_id).send(`[BANログ]\nBANされました。\nBANされたサーバー:${message.guild.name}/${message.guild.id}\nBAN時の敵のレベル:${lv}\nBANされた時刻:${hour}時${minute}分${second}秒\n解除に行ってください。(https://taogames.net/unlock)`)
//      }
//      client.users.cache.get(your_id).send("BANされました。");
//   }
//  }
// }
//});

/*If TAO's WEB is restored, please delete this part.*/
client.on('message', async message => {
const receivedEmbed = message.embeds[0];
if(!receivedEmbed || !receivedEmbed.description){
return;
}
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
  if(receivedEmbed.description.match(/仮BANをしました。10分間の解除時間を設けます。/)){
      const messages = await message.channel.messages.fetch();
      let filtered = messages.filter((msg) => msg.content.startsWith("```diff\n- 属性"));
      const fetch = filtered.first()
      if(fetch.embeds[0]){
      const split = fetch.embeds[0].title.split("\n")
      const third = split[2]
      const third_ = third.split(" ")
      const lv = third_[0]
      const japanStandardTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
      const hour = new Date(japanStandardTime).getHours();
      const minute = new Date(japanStandardTime).getMinutes();
      const second = new Date(japanStandardTime).getSeconds();
      const user = client.users.cache.get("304932786286886912")
      let ch = user.dmChannel
      if (!ch) ch = await user.createDM();
      ch.startTyping()
       setTimeout(() => {
      client.users.cache.get("304932786286886912").send("BAN解除お願いします")
      ch.stopTyping()
       }, 100 * 106)
      client.channels.cache.get(log_ch_id).send(`[BANログ]\nBANされました。\nBANされたサーバー:${message.guild.name}/${message.guild.id}\nBAN時の敵のレベル:${lv}\nBANされた時刻:${hour}時${minute}分${second}秒\n解除に行ってください。(https://taogames.net/unlock)`)
      }
      if(!fetch.embeds[0]){
      const split = fetch.content.split("\n")
      const third = split[3]
      const third_ = third.split(" ")
      const lv = third_[1]
      const japanStandardTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })
      const hour = new Date(japanStandardTime).getHours();
      const minute = new Date(japanStandardTime).getMinutes();
      const second = new Date(japanStandardTime).getSeconds();
      const user = client.users.cache.get("304932786286886912")
      let ch = user.dmChannel
      if (!ch) ch = await user.createDM();
      ch.startTyping()
       setTimeout(() => {
      client.users.cache.get("304932786286886912").send("BAN解除お願いします")
      ch.stopTyping()
       }, 100 * 106)
      client.channels.cache.get(log_ch_id).send(`[BANログ]\nBANされました。\nBANされたサーバー:${message.guild.name}/${message.guild.id}\nBAN時の敵のレベル:${lv}\nBANされた時刻:${hour}時${minute}分${second}秒\n解除に行ってください。(https://taogames.net/unlock)`)
      }
      client.users.cache.get(your_id).send("BANされました。");
   }
  }
 }
});
client.on('message', async message => {
const receivedEmbed = message.embeds[0];
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
if(receivedEmbed){
return;
}
if(message.content.match(/追加攻撃を受けた/)){
  setTimeout(() => {
      message.channel.send("::atk");
    }, 500)
   }
  }
 }
});
client.on('message', async message => {
const receivedEmbed = message.embeds[0];
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
const repliedTo = await message.channel.messages.fetch(message.reference.messageID)
if(message.content.match(/ファイアボール/) || message.content.includes(repliedTo.author.tag + "はやられてしまった") || receivedEmbed){
return;
 }
 if(message.content.match(/かわされてしまった...！！/) || message.content.match(/ダメージを受けた。/)){
      setTimeout(() => {
      message.channel.send("::atk");
    }, 500)
 　}
  }
 }
});
client.on('message', async message => {
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
if(message.content.match(/ファイアボール/) || message.content.match(/]はやられて/) || message.content.match(/スキル発動！PETが祈りの書を勝手に使ったぞ！/)){
return;
 }
  if(message.content.match(/はやられてしまった。。。/)){
      setTimeout(() => {
      message.channel.send("::i e");
    }, 500)
   }
  }
 }
});
client.on('message', async message => {
if(message.channel.id === target_ch_id){
if(message.author.id === "526620171658330112"){
const repliedTo = await message.channel.messages.fetch(message.reference.messageID)
if(message.content.match(/ファイアボール/) || message.content.match(/スキル発動！PETが祈りの書を勝手に使ったぞ！/)){
return;
 }
  if(message.content.includes(repliedTo.author.tag + "はやられてしまった") && message.content.match(/]はやられて/)){
      setTimeout(() => {
      message.channel.send("::i e");
    }, 500)
   }
  }
 }
});

client.on('message', async message => {
  if(message.author.bot){
  return;
}
  if(message.author.id === your_id)
  if (message.content.toLowerCase().startsWith("!say")) {
   const SayMessage = message.content.slice(5).trim();
  message.delete()
  message.channel.send(SayMessage)
  }
});

client.on("message", message => {
  if(message.author.bot || message.channel.type === "dm"){
return;
}
   if (message.content.toLowerCase().startsWith("!eval")) 
     if(message.author.id === your_id){
     try {
        var result = message.content.split(" ").slice(1).join(" ")
        if(result.match(/message.channel.send/)){
        let evaled = eval(result);
        console.log(result)
        message.react("✅")
        }else if(!result.match(/message.channel.send/)){
        let evaled = message.channel.send(eval(result));
        console.log(result)
        message.react("✅")
        }
      }catch (err){
        message.react("❓")
        message.channel.send("```diff\n- ⚠️Error⚠️[ " + err.toString() + " ]```")
        }
     }else{
      return;
    }
});

//DM log
client.on('message', async message => {
const user = client.users.cache.get("304932786286886912")
let ch = user.dmChannel
if (!ch) ch = await user.createDM();
if(message.channel.id === ch.id){
if(message.author.id == "304932786286886912"){
client.channels.cache.get(log_ch_id).send(`[DMログ]\n送信者:${message.author.tag}\n内容:${message.content}`)
setTimeout(() => {
client.channels.cache.get(target_ch_id).send("::atk")
}, 1000 * 15)
}else if(message.author.id == bot_id){
client.channels.cache.get(log_ch_id).send(`[DMログ]\n送信者:${message.author.tag}\n内容:${message.content}`)
  }
 }
});

client.login("PASTE-YOUR-ACCOUNT-TOKEN");
