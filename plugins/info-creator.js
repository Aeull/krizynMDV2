let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, m)
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
