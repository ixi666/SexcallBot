let PhoneNumber = require('awesome-phonenumber')
let leveling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mencionadoJid && m.mencionadoJid[0] ? m.mencionadoJid[0] : m.fromMe ? conn.user.jid : m.sender
tratar {
// pp = espera conn.getProfilePicture(quién)
} atrapar (e) {
} por fin {
let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let { nombre, límite, exp, prohibido, último reclamo, registrado, regTime, edad, nivel } = global.DATABASE.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let nombre de usuario = conn.getName(quién)
let str = `

║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║ *✨𝗛ola, ${nombre de usuario}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡


┃ *<MENÚ SIMPLE/>*
┣ ඬ _${usedPrefix}sc_
┣ ඬ _${usedPrefix}donar_
┣ ඬ _${usedPrefix}infobot_
┣ ඬ _${usedPrefix}grupos_
┣ ඬ _${usedPrefix}instalarbot_
┣ ඬ _${usedPrefix}menussimple_
┣ ඬ _${usedPrefix}menuaudios_
┣ ඬ _${usedPrefix}menu2_
┣ ඬ _${usedPrefix}labiblia_
┣ ඬ _${usedPrefix}estado_
┣ ඬ _Bot_
┣ ඬ _¿Qué es un Bot?_
┣ ඬ _Codigos para audios_
┣ ඬ _Términos y condiciones_
┣ ඬ _${usedPrefix}bug_
┣ ඬ _${usedPrefix}informe_
┣ ඬ _${usedPrefix}join_
┣ ඬ _${usedPrefix}bots_
┣ ඬ _${usedPrefix}top10gays_
┣ ඬ _${usedPrefix}toplind@s_
┣ ඬ _${usedPrefix}topput@s_
┣ ඬ _${usedPrefix}toppajer@s_
┣ ඬ _${usedPrefix}topotakus_
┣ ඬ _${usedPrefix}propietario_
┣ ඬ _${usedPrefix}matemáticas_
┣ ඬ _${usedPrefix}ttt_
┣ ඬ _${usedPrefix}delttt_
┣ ඬ _${usedPrefix}2gay_
┣ ඬ _${usedPrefix}gay_
┣ ඬ _${usedPrefix}lesbi_
┣ ඬ _${usedPrefix}pajero_
┣ ඬ _${usedPrefix}pajera_
┣ ඬ _${usedPrefix}puta_
┣ ඬ _${usedPrefix}puto_
┣ ඬ _${usedPrefix}rata_
┣ ඬ _${usedPrefix}manco_
┣ ඬ _${usedPrefix}manca_
┣ ඬ _${usedPrefix}formarpareja_
┣ ඬ _${usedPrefix}dado_
┣ ඬ _${usedPrefix}simsimi_
┣ ඬ _${usedPrefix}formartrio_
┣ ඬ _${usedPrefix}amor_
┣ ඬ _${usedPrefix}amigorandom_
┣ ඬ _${usedPrefix}slot_
┣ ඬ _${usedPrefix}ppt_
┣ ඬ _${usedPrefix}prostituta_
┣ ඬ _${usedPrefix}prostituto_
┣ ඬ _${usedPrefix}doxear_
┣ ඬ _${usedPrefix}imagen_
┣ ඬ _${usedPrefix}ytsearch_
┣ ඬ _${usedPrefix}dlaudio_
┣ ඬ _${usedPrefix}dlvid_
┣ ඬ _${usedPrefix}ytmp3_
┣ ඬ _${usedPrefix}ytmp4_
┣ ඬ _${usedPrefix}ytmp4.2_
┣ ඬ _${usedPrefix}play_
┣ ඬ _${usedPrefix}play2_
┣ ඬ _${usedPrefix}play3_
┣ ඬ _${usedPrefix}play4_
┣ ඬ _${usedPrefix}letra_
┣ ඬ _${usedPrefix}google_
┣ ඬ _${usedPrefix}googlef_
┣ ඬ _${usedPrefix}wikipedia_
┣ ඬ _${usedPrefix}pinterestvideo_
┣ ඬ _${usedPrefix}tiktokaudio_
┣ ඬ _${usedPrefix}tiktok_
┣ ඬ _${usedPrefix}spotify_
┣ ඬ _${usedPrefix}acortar_
┣ ඬ _${usedPrefix}pinterest_
┣ ඬ _${usedPrefix}xnxx_
┣ ඬ⃟ _${usedPrefix}xnxxsearch_

┗━━━━━━━━━━━━━┛
`.recortar()
dejar mencionadoJid = [quién]
conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mencionadoJid }})
}}
controlador.comando = /^(menúsimple)$/i
controlador.fallo = nulo
módulo.exportaciones = controlador
