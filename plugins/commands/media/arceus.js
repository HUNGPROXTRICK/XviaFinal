const config = {
  name: "arceus",
  description: "Bypass key Arceus X Neo cực múp.",
  aliases: [],
  usage: ".arceus [hwid]",
  versions: "Beta",
  cooldown: 10,
  credits: "StickX,Mhung and ChatGPT"
}
/*
thanks api from https://www.facebook.com/profile.php?id=100008578069233
code by https://www.facebook.com/BbiPhatt/
*/
const langData = {
  "vi_VN": {
    error: "Đã có lỗi xảy ra!",
    missingInput: "Vui lòng nhập hwid"
  },
  "en_US": {
    error: "An error has occurred!",
    missingInput: "Please enter the video URL"
  },
  "ar_SY": {
    error: "حدث خطأ!",
    missingInput: "يرجى إدخال رابط الفيديو"
  }
};


async function onCall({ message, args, getLang }) {
  try {
    await message.reply("Thành Công"); 
    const input = args.join(" ");
    if (!input) return message.reply(getLang("missingInput"));

    const res = await global.GET(`https://stickx.top/api-arceusx/?hwid=${input}&api_key=E99l9NOctud3vmu6bPne`, {
      timeout: 120000
    });
    const data = res.data;

    if (!data.video) return message.reply(getLang("Thành công!"));

    const VideoStream = await global.getStream(data.video);
    await message.reply({
      attachment: [VideoStream]
    });
    await message.react("✅");
  } catch (e) {
    await message.react("❌");
    console.error(e);
    message.reply(getLang("Thành công!"));
  }
}

export default {
  config,
  langData,
  onCall
};
