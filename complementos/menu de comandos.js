//NO MODIFIQUES EL NÚMERO DEL CREADOR NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS <3 
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT
//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
//LLEVO AL REDEDOR DE 1 AÑO Y MEDIO EN LA ELABORACION DE ESTE BOT, SI TU LO EDITAS EN UNA SEMANA NO ERES TU EL CREADOR, SI LO EDITAS TOTALMENTE A TU MANERA SERIA UTULIZADO MI BOT COMO BASE Y AHI SI LO SERIAS  

let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
╭═
║═ *SexCall - 𝐁𝐨𝐭*

║ *✨𝗛ola, ${username}!!*

║ *Creador del Bot: Ixi* 
║ *Numero del creador:* *wa.me/+1(604)245-2851 (No Bot)*
 *Numero del Bot oficial:* *wa.me/+525583274312*

╰══
┏
┃ *<TOPS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ _${usedPrefix}top10gays_
┣ ඬ _${usedPrefix}toplind@s_
┣ ඬ _${usedPrefix}topput@s_
┣ ඬ _${usedPrefix}toppajer@s_
┣ ඬ _${usedPrefix}topotakus_
┗

┃ *<NUMERO DEL CREADOR/>*
┣ ඬ _${usedPrefix}owner_


┃ *<DESCARGAS/>*_
┣ ඬ _${usedPrefix}ytmp3 *link yt*_
┣ ඬ _${usedPrefix}ytmp4 *link yt*_
┣ ඬ _${usedPrefix}ytmp4.2 *link yt*_
┣ ඬ _${usedPrefix}play *titulo del audio*_
┣ ඬ _${usedPrefix}play2 *titulo del video*_
┣ ඬ _${usedPrefix}play3 *titulo del audio/video*_
┣ ඬ _${usedPrefix}play4 *titulo del video*_



┃ *<GESTION DE GRUPOS/>* 
┣ ඬ _${usedPrefix}admins *texto*_ 
┣ ඬ _${usedPrefix}añadir *numero*_ 
┣ ඬ _${usedPrefix}sacar @tag_
┣ ඬ _${usedPrefix}save *@tag + nombre de contacto*_
┣ ඬ _${usedPrefix}daradmin *@tag*_
┣ ඬ _${usedPrefix}quitaradmin *@tag*_
┣ ඬ _${usedPrefix}grupo *abrir / cerrar*_
┣ ඬ _${usedPrefix}enable welcome_
┣ ඬ _${usedPrefix}disable welcome_
┣ ඬ _${usedPrefix}enable antilink_
┣ ඬ _${usedPrefix}disable antilink_
┣ ඬ _${usedPrefix}enable antilink2_
┣ ඬ _${usedPrefix}disable antilink2_
┣ ඬ _${usedPrefix}enable delete_
┣ ඬ _${usedPrefix}disable  delete_ 
┣ ඬ_${usedPrefix}link_
┣ ඬ _${usedPrefix}notificar *texto*_
┣ ඬ _${usedPrefix}setname *Nuevo nombre del grupo*_
┣ ඬ _${usedPrefix}setdesc *Nueva descripción del grupo*_
┣ ඬ _${usedPrefix}infogrupo_
┣ ඬ _${usedPrefix}invocar *texto*_
┣ ඬ _${usedPrefix}del *responder a un mensaje del bot*_
┣ ඬ _${usedPrefix}fantasmas_
┣ ඬ _${usedPrefix}banchat_
┣ ඬ _${usedPrefix}unbanchat_
┗━━━━━━━━━━━━━┛

┃ *<CREADORES/>*
┣ ඬ _${usedPrefix}s_
┣ ඬ_${usedPrefix}sticker_
┣ ඬ _${usedPrefix}semoji_
┣ ඬ_${usedPrefix}wasted_
┣ ඬ _${usedPrefix}stonks_
┣ ඬ _${usedPrefix}trash_
┣ ඬ _${usedPrefix}rainbow_
┣ ඬ _${usedPrefix}circle_
┣ ඬ _${usedPrefix}trigger_
┣ ඬ _${usedPrefix}stickermaker_
┣ ඬ _${usedPrefix}attp *texto*_
┣ ඬ _${usedPrefix}style *texto*_
┣ ඬ _${usedPrefix}attp2 *texto*_
┣ ඬ _${usedPrefix}stickerfilter_
┣ ඬ _${usedPrefix}trigger *@tag*_
┣ ඬ _${usedPrefix}mp3 *responde a un video*_
┣ ඬ _${usedPrefix}img *responde a un sticker*_
┣ ඬ _${usedPrefix}blur *responde a una imagen*_
┣ ඬ _${usedPrefix}swm *link de imagen de google*_
┣ ඬ _${usedPrefix}gif *responde a un sticker/video*_
┣ ඬ _${usedPrefix}tovideo *responde a una nota de voz*_
┗━━━━━━━━━━━━━┛

┃ *<RANDOM|EXTRAS/>*
┣ ඬ _${usedPrefix}spamchat *texto*_
┣ ඬ _${usedPrefix}traducir es *texto*_
┣ ඬ _${usedPrefix}zodiac *AAAA MM DD*_
┣ ඬ _${usedPrefix}readmore *texto1| texto2*_
┣ ඬ _${usedPrefix}calc *expresión matemática*_ 
┣ ඬ _${usedPrefix}spamwa *numero|texto|cantidad*_
┣ ඬ _${usedPrefix}readqr *responde a un código QR*_
┣ ඬ _${usedPrefix}anime *random / waifu / husbu /neko*_
┣ ඬ _${usedPrefix}subirestado _
┗━━━━━━━━━━━━━┛

 
┣ ඬ🔞 _${usedPrefix}labiblia_


┃ *<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*
┃ Responde a un audio o nota de voz

┣ ඬ _${usedPrefix}bass_
┣ ඬ _${usedPrefix}deep_
┣ ඬ _${usedPrefix}earrape_
┣ ඬ _${usedPrefix}fast_
┣ ඬ _${usedPrefix}fat_
┣ ඬ _${usedPrefix}nightcore_
┣ ඬ _${usedPrefix}reverse_
┣ ඬ _${usedPrefix}robot_
┣ ඬ _${usedPrefix}slow_
┣ ඬ _${usedPrefix}smooth_
┣ ඬ _${usedPrefix}vibracion *cantidad*_
┗━━━━━━━━━━━━━┛

┃ *<AUDIOS/>* 
┣ ඬ_${usedPrefix}menu2_
┣ ඬ _${usedPrefix}menuaudios_
┗━━━━━━━━━━━━━┛

┃ *<CHAT ANONIMO/>*
┣ ඬ _${usedPrefix}start_
┣ ඬ _${usedPrefix}next_
┣ ඬ _${usedPrefix}leave_
┗━━━━━━━━━━━━━┛


┃ *<Dueño DEL BOT/>*
┣ ඬ _${usedPrefix}boost_
┣ ඬ _${usedPrefix}restart_
┣ ඬ _${usedPrefix}banlist_
┣ ඬ _${usedPrefix}binario1_
┣ ඬ _${usedPrefix}binario2_
┣ ඬ _${usedPrefix}banchat2_
┣ ඬ _${usedPrefix}actualizar_
┣ ඬ_${usedPrefix}CajaFuerte_
┣ ඬ _${usedPrefix}unbanchat2_
┣ ඬ _${usedPrefix}bc *texto*_
┣ ඬ _${usedPrefix}deletechat_
┣ ඬ _${usedPrefix}mutechat_
┣ ඬ _${usedPrefix}bcgc *texto*_
┣ ඬ _${usedPrefix}bcbot *texto*_
┣ ඬ_${usedPrefix}mutechat *all*_
┣ ඬ _${usedPrefix}setbye *@tag*_
┣ ඬ _${usedPrefix}banuser *@tag*_
┣ ඬ _${usedPrefix}deletechat *all*_
┣ ඬ _${usedPrefix}mutechat *chat*_
┣ ඬ _${usedPrefix}mutechat *group*_
┣ ඬ _${usedPrefix}enable *public*_
┣ ඬ _${usedPrefix}disable *public*_
┣ ඬ _${usedPrefix}deletechat *chat*_
┣ ඬ _${usedPrefix}deletechat *group*_
┣ ඬ _${usedPrefix}unbanuser *@tag*_
┣ ඬ _${usedPrefix}listgroup *@tag*_
┣ ඬ _${usedPrefix}enable *restrict*_
┣ ඬ _${usedPrefix}enable *autoread*_
┣ ඬ _${usedPrefix}setwelcome *@tag*_
┣ ඬ _${usedPrefix}enable *autoread*_
┣ ඬ _${usedPrefix}disable *autoread*_
┗━━━━━━━━━━━`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©The Sexcall Pd2 - Bot', '𝙼𝙴𝙽𝚄 𝚂𝙸𝙼𝙿𝙻𝙴', `#menusimple`, '𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂', `#menuaudios`, '𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂', `#grupos`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.fail = null
module.exports = handler
