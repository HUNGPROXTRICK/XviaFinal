const config = {
  name: "uptime",
  aliases: ["upt","infor"],
  credits: "MiSao",
};

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  const Cpu =
    Math.floor(uptimeInSeconds % 9);
  const Ram =
    Math.floor(uptimeInSeconds % 30);
  const Ping =
    Math.floor(uptimeInSeconds % 76);
  

  try {
    const replyMessage = await message.reply(`
━━━━━━━━━━━━━━━━━
 ⚙️ᴛʜᴏ̂ɴɢ ᴛɪɴ ʜᴇ̣̂ ᴛʜᴏ̂́ɴɢ⚙️
『CPU: ${Cpu}%』☄️
『Ram: ${Ram}%』🌌
『Ping hiện tại là: ${Ping}𝑚𝑠』🌠
『Bot đã online được: ${hours} giờ ┇ ${minutes} phút ┇ ${seconds} giây』
 Bot Được Điều Hành Bởi MHungDev
━━━━━━━━━━━━━━━━━`);
    
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  onCall,
};
