const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347048467077";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_32_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV1dmQUZSajVOSG9keWRsaWN4S29acUtqOFZhb2MzVnQyUWJzM28wQVo1MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDQ4NDY3MDc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUI5RUI3RERDQjY4RkVEMDJEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0OTc1MjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibk1OY1hYWjJRM3lGeUZKbFd3a3h5Z1wiLFxuICBcInBob25lSWRcIjogXCJhMmVhNDdhNS1iNjlhLTRhN2UtOTJhMi05NGJmY2NmY2JiYTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICAxNjAsXG4gICAgICAxODIsXG4gICAgICA3MyxcbiAgICAgIDIzMSxcbiAgICAgIDQ1LFxuICAgICAgMjE3LFxuICAgICAgMTk3LFxuICAgICAgMzEsXG4gICAgICA1NCxcbiAgICAgIDEzNyxcbiAgICAgIDEzMSxcbiAgICAgIDE5NCxcbiAgICAgIDIyLFxuICAgICAgMTc0LFxuICAgICAgMjI0LFxuICAgICAgNDksXG4gICAgICAxMDMsXG4gICAgICAyNDcsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDIyNyxcbiAgICAgIDE2NixcbiAgICAgIDEwMSxcbiAgICAgIDE0LFxuICAgICAgMTQ4LFxuICAgICAgMTI3LFxuICAgICAgMTg4LFxuICAgICAgMTA5LFxuICAgICAgMzYsXG4gICAgICAxMjAsXG4gICAgICAxMjksXG4gICAgICAyMTgsXG4gICAgICAxOTMsXG4gICAgICA4NyxcbiAgICAgIDIyNSxcbiAgICAgIDIyMyxcbiAgICAgIDIxMyxcbiAgICAgIDU3LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3VHL05RUEVPcnpyTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwVFQ5b21ENHIvUEdJb25mdTgzeGRqcXI4U0tCR1oxckFWbjQ1U2RYUHdBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhSc3dkbTZBSEhTUkpnaHU5MVQzQ2hERk5rcmdFVHJpVlA2aVNZeFpjaUlyYlVtZlR3SG8vRmRJWGtXZmVCTlQvdk1jRUVheXNxNFZleXIzRzVLOEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJ0aVNJY0REdlJzL0VQVWlMOFJYZC9yNVhuN2FXMDhFeVBQbWtzNFdreFFMUTU4Z00wNmJvaUs5QWZEVGNnUG45SzEyMDNBeHY4TEQwcUtEaXY5SGd3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0ODQ2NzA3Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWkFERFlcIixcbiAgICBcImxpZFwiOiBcIjI3MzYzNjg5NjMwOTM2ODo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0ODQ2NzA3Nzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQ5NzUxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxWRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFZFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYjZ2NU1uWDh6a3pRak5ZcURNZ21XVDBWcTBrYTJiSHdJNWJlcjMreDNhcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MjA0NzI1MDM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0OTc1MTk1MTBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
