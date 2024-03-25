const config = {
        name: "pexels",
        aliases: ["pexels", "searchimg", "image", "img"],
        description: "Searching Images Pexels",
        usage: "pexels <text>",
        versinos: "1.0.0",
        credits: "github.com/huynhletanphat",
        cooldown: 5
      };

const langData = {
  "vi_VN": {
    "missingInput": "Bạn chưa nhập từ khóa tìm kiếm",
    "error": "Đã có lỗi xảy ra"
  },
  "en_US": {
    "missingInput": "You haven't entered a search keyword",
    "error": "An error has occurred"
  },
  "ar_SY": {
    "missingInput": "لم تدخل كلمة البحث",
    "error": "حدث خطأ"
  }
};

async function onCall({ message, args, getLang }) {
  try {
    const input = args.join(" ");
    if (!input) return message.reply(getLang("missingInput"));

    const res = await global.GET(`https://9ed4d954-1057-4616-903f-7e2fe6fa0dba-00-2u57hnq9p7cxm.spock.replit.dev/media/pexels?img=${encodeURIComponent(input)}`, {
      timeout: 120000
    });
    const data = res.data;

    if (!data.img) return message.reply(getLang("error"));

    const imgStream = await global.getStream(data.img);
    await message.reply({
      attachment: [imgStream]
    });
    
  } catch (e) {
    console.error(e);
    message.reply(getLang("error"));
  }
}

export default {
  config,
  langData,
  onCall
};