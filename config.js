const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256709547277";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_05_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICAzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MixcbiAgICAgICAgMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQnlJRllBYng0RUtUU0ZMSVVQcU54UlNYU0l5YU9DMnhRZmpJMk80U3prWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MDk1NDcyNzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkVGMjZEOUQxNEE3RkU3QzZFNDQ5NEQ5OTI2MUZFNkNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODc2MzUyMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NjcwOTU0NzI3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUNFM0ZCNzA3MURGMzc2MUMzNzQ3OEM2MkYxOERDQzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NzYzNTI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVNTjM4aXZoVHBLNWVKS0gtd0dPLXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTNjMjJmYTktYzBhMi00M2Y1LTgwYWItYTRhYjVlOTZiYWE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDIyOSxcbiAgICAgIDEyNSxcbiAgICAgIDMzLFxuICAgICAgNTUsXG4gICAgICAyMTIsXG4gICAgICAxNyxcbiAgICAgIDI5LFxuICAgICAgMTMzLFxuICAgICAgMTQsXG4gICAgICA3NCxcbiAgICAgIDEzNSxcbiAgICAgIDEyMixcbiAgICAgIDUyLFxuICAgICAgMTUxLFxuICAgICAgMTU5LFxuICAgICAgMTMzLFxuICAgICAgMTcsXG4gICAgICA4NixcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDE1OSxcbiAgICAgIDI3LFxuICAgICAgMTc5LFxuICAgICAgMjQ3LFxuICAgICAgMTkzLFxuICAgICAgMjAyLFxuICAgICAgNzYsXG4gICAgICAxMixcbiAgICAgIDEwOSxcbiAgICAgIDg0LFxuICAgICAgMzIsXG4gICAgICAxOTEsXG4gICAgICAxNTAsXG4gICAgICAxMzgsXG4gICAgICAyMyxcbiAgICAgIDEyNCxcbiAgICAgIDEzOSxcbiAgICAgIDgwLFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw4N0o1U01DXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDk1NDcyNzc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI4MDIwNjI3MDgzMzY0OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi6qeB4piG4pisw5DEmMWkxZTDlMOOxaTimKzimIbqp4JcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLcTc2OElDRVBXc3E3Z0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInBXWUdEaG41Vm5WMWVBYUNUcnJUU0N2SndaQktZTTJxdWlhQkovVDcvM2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWGZYQXhXRXdEZ3dpQnFvZzJjMEN0Rm1GOG51MmZwM282eERWZEZZbUFreWZtU3ZoUlNoUjBMbVVoNmtXVDhoQTdOVW1mNm1MK0c0Vit1V3JSQXBYRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMjRKdGQ3R1RIM2RkVkJkSUI5dFVjcVVKQkJXcnZtR1Y5TUVVZnRPZnFnWlErWWxPRnZKMXFPZG5WMEtpWmdjcFZSQ01PS1hvT3hCdk9HK1F2RTJtQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA5NTQ3Mjc3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4NzYzNTE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjg1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCODUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJMkl4bzJVTHh2ZnJ5enNBSUlLcHFnRFY5L1dXV2djbWszUDJwWDhKM0tRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3NzA0MzYyNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4NzYzNTE5MjA1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "uhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
