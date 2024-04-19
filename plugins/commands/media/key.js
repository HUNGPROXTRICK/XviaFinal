async function onCall({ message, args, getLang }) {
  try {
    const input = args.join(" ");
    if (!input) return message.reply(getLang("missingInput"));

    // Gọi API và chờ kết quả
    const res = await global.GET(`https://stickx.top/api-arceusx/?hwid=${input}&api_key=E99l9NOctud3vmu6bPne`, {
      timeout: 120000
    });
    const data = res.data;

    // Kiểm tra data trả về từ API
    if (!data.key) {
      message.reply("Không có key được trả về!");
    } else {
      // Nếu có data.key, trả về cho người dùng
      message.reply(`Thành công! Key của bạn là: ${data.key}`);
    }

    // Phản hồi đã thực hiện lệnh thành công
    await message.react("✅");
  } catch (e) {
    // Nếu có lỗi, phản hồi báo lỗi và log lỗi
    await message.react("❌");
    console.error(e);
    message.reply(getLang("error"));
  }
}
