//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RxblpNcExuZUYwMDl0amZoMTdROEdjZlQ1RTFjVW9iUVowaFZOUzhFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEgxL05XcC83S0h4eEVXN2lmM25jd2wvMDVjVWhaK0Fjc2ZiYStHc2MzND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUEN5c2UxQWlISzhDMWVCZGV4NjRYOTZvTDhiZkl0STFtRUNDSjdaSlZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SFFYWVlSSk41Vnp3WnZrejV3dUpKQ2xZaWFKOXNjZ05RY1dsMmtUTmtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNQZ2xlU2dieSt3aUpKY2x1RkQ2ek1LbkRzQ1hQZ28xZUdJTW9ZcktzMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9HdTJWa3BtNU45UFM2cUY3cjlwaUo0UU55dzUxcnkwdlNtTUFqZzhhd2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hScGI5cEk3SHphWEZEWW5nVXFZZjNGTU83YnkxNklRZTFJQXZkM0RXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnk3SGQrdW5TZUx6VzIzM21rSFlzQ1k2dUlQaTVRaTRLcklxcUNpcmZrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1UUTJuanF6VE9JNnZPeEp6cmxGbVh5K3kwcXA5NEJmaWtEc1RqK01MWTdoK3YrRDJJNk5ORkJsVVVyY2c3Ti9TSElLd29IR040ZXNLMGNqdnhQM0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiJGMHhpbHlJOVVJMzhBcnVwWXZDaUxIdkJ4bnRSVnBhRG9tSmFydVFTYkNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2V0g1cGx2ZlJHMlRoLVBqU2RLa1RBIiwicGhvbmVJZCI6IjI1NTI5MzYyLTVkNDYtNGMyOC1iNGJlLTViM2E4YzdhZDZjOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRENXNFpLNmpFaDRVeUhsSjBDMms5RXlFLzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW5MdHRqVnhjdWltaC8wNktkMWlRQVRJNm9FPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZHR1A2OTZXIiwibWUiOnsiaWQiOiI5NDc1MzQwMDUzNjo2MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE1ODY2MTA0MTIyOTg1OTo2MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvcnZKZ0hFTHFhdXNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijc1bkRlUGUzdmRTS1pBWU04OWxWYm1LMXMxWG44UUFGZVFSZFRMbjZwQk09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVrRmx0TVdIMVpzUTd1VFNoR0dXRUpOb21UZkZtLzEvZ3Z6WEIzVTloSzdSeG5heTBraDJVdHgrZHZlTHpBMHhNMFVoMTN3TktjQnZZL2Y0RytqMUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSbkdCN0kyM3M5TW91Q01GK2wxazhHZXVkVi9JVVJ0VmV0WlgyazVVU05XVmNoZDRsT3R4ZXMwTUxGcE5Nc1Ixais5NmxYRDNNOFdWRlNhOVFQYThBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUzNDAwNTM2OjYxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUrWnczajN0NzNVaW1RR0RQUFpWVzVpdGJOVjUvRUFCWGtFWFV5NStxUVQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTk3ODQzOSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdHNSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94753400536",
  PASSWORD: 
    process.env.PASSWORD || "Star pay 8",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94729478513", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
