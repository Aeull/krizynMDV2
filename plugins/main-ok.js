let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/4bc66872a9a4ea62fa6e7.png', m, { packname: "Ini Bot", author: "@Arull" })
}

handler.customPrefix = /^(ok|y|iya|oke)$/i
handler.command = new RegExp

module.exports = handler
