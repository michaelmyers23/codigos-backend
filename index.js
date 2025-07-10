const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const codigos = {
  Rosa: {
    "Rosa": { mensagem: "Ni seulement jus, ni seulement cocktail en main,<br>
Ici se mêlent fête, rires et refrains.<br>
Glace, saveurs, couleurs qui dansent,<br>
Qui suis-je, celui qui t’invite à faire une danse?<br>
Je suis le lieu où tout se mélange,<br>
Entre amis, la joie est un mélange étrange.<br>
Quel est mon nom, où la nuit est mixée,<br>
Et où l’amusement ne cesse jamais ?<br>
" },
    "Tudo e Misturado": { 
      mensagem: `Χωρίς στέγη με σκεπάζω, μα τ’ άστρα με κοιτούν,<br>
Η φωνή μου αντηχεί όπου οι άνεμοι περνούν.<br>
Είμαι πέτρα, είμαι χορτάρι, είμαι ήχος που απλώνεται,<br>
Στη μέση του πουθενά, η τέχνη δεν σωπαίνει.<br>
Χωρίς κουρτίνες ή τοίχους να με περιορίζουν,<br>
Είμαι σκηνή της ζωής, του γέλιου και της γνώσης.<br>
Ποιος είμαι εγώ, που σχηματίστηκα στη γη και στον χώρο,<br>
Όπου ο ουρανός είναι η στέγη και ο χρόνος το μέτρο;
`
    },
    "Anfiteatro": { mensagem: "ၵဝ်ဢမ်ႇၵိူတ်ႇမႃးတီႈပၢင်ႇလၢႆႇသေတႃႉ ၵဝ်ယိပ်းၵမ်ဝႆႉၶူဝ်းၶွင် ဢၼ်မီးၼႂ်းၸိုဝ်ႈၵဝ်။<br>
ၵဝ် ဢမ်ႇၸႂ်ႈ ၵႅဝ်ႈ ဢမ်ႇၸႂ်ႈ ၵွၼ်ႈ ၵူၺ်းၵႃႈ ပဵၼ် လႅင်း ဢၼ် ဢိုပ်းယၢၵ်ႈ ၵိၼ် ၼၼ်ႉ ဢေႃႈ။<br>
ၼႂ်းၵႄႈပၢင်ႇလၢႆႇၶူဝ်လမ် လႄႈ လူမ်းထၢၼ်ႇႁိၼ်၊<br>
ၵဝ်သိမ်းဝႆႉလွင်ႈလပ်ႉလွင်း ၼႂ်းၶဝ်ႈမုၼ်း ဢၼ်တဵမ်ဝႆႉ တင်းၸႂ်ႁၵ်ႉ။<br>
သီၵဝ် ႁဵတ်းႁႂ်ႈမီးလွင်ႈလပ်ႉလွင်း ဢၢႆႁွမ်ၵဝ် လႅၼ်ႈႁိူဝ်းယူႇ၊<br>
ၸိူဝ်းႁၼ်ၵဝ်ၼၼ်ႉ ဢမ်ႇလိုမ်း- ၶဝ်တိုၼ်းပွၵ်ႈမိူဝ်း ဢႅၼ်ႇၵႃႇ။<br>
ၵဝ်ပဵၼ်ၽႂ် ဢၼ်လႅၼ်ႈၼိူဝ်ၽႅၼ်ႇသေ ဢမ်ႇလႅၼ်ႈသေ ဢွင်ႇပေႉ။
" },
    "Hamburgueria Pérola Negra": { mensagem: "ຈາກກ້າງສູງຂ້າມເບິ່ງໂລກໂດຍບໍ່ຂຍື້ນຕົວ,<br>
ເປີດເຫັນຂອບເຂດທີ່ບາງຄົນເຫັນບໍ່ໄດ້.<br>
ຂ້ອຍແມ່ນຈຸດຕິດຕາມສະຫນາມ, ຜູ້ຮັບຜິດຊອບການເບິ່ງເຫັນ,<br>
ລະຫວ່າງຟ້າແລະດິນ, ຂ້ອຍເຊີນໃຫ້ຝັນ.<br>
ບໍ່ມີປີກ, ຂ້ອຍບິນ; ບໍ່ມີຂາ, ຂ້ອຍເດີນ,<br>
ໃຜຄືຂ້ອຍ ຜູ້ທີ່ສະແດງໃຫ້ເຫັນຄວາມບໍ່ມີຂອບເຂດ ຢ່າງໂດດຫວ່າງ?
" },
    "Mirante": { mensagem: "Каде времето тече во два такта,<br>
и нозете танцуваат без звук.<br>
Полето не е на кралот, но некој го вика трон.<br>
Тлото е зелено, но не расте цвет,<br>
а она што најмногу расте тука... е врева.<br>
Ако го бараш следниот чекор од мисијата,<br>
оди таму каде што топката е повеќе од страст." },
    "Quadra de futebol society": { mensagem: "이 표지판에서 물의 힘이 드러나고,<br>
두 나라가 하나의 거대한 장면으로 연결되지요.<br>
흐름과 힘에서 태어난 에너지,<br>
세상을 움직이는 거대한 존재.<br>
나는 누구일까요? 이 진짜 이야기를 간직한,<br>
거대한 힘의 발전소를 말해주는 존재는?
" },
    "Itaipu": { mensagem: "སྒྲ་མེད་གདོང་སྐྱོང་མ། ང་ནགས་ལྡོག་དང་མྱུར་དྲག་གཉིས་དུ་མཐུན་ལམ་བཞུགས། <br>
ང་ནང་ལ་ཚོན་མོ་མ་འཕྲོས་པའི་ཚེ་སྲོག་ཞིང་ཞུ། <br>
ང་ནི་རོགས་ལེན་དང་བཀོད་སྐྱོང་ཡིན། ང་ནི་མི་རྣམ་མཁྱེན་གྱི་རྩ་རྒྱུན་ཡིན <br>
ང་སུ་ཞིག་ནམ་མཁའི་དུས་ལ་རྟོགས་མཛད་པ་རྒྱུ་ཡིན་ན <br>
" },
    "Mão": { mensagem: "ฉันแบกท้องฟ้าไว้ในสายของฉัน และสันติภาพไว้ในคู่ของฉัน <br>
ฉันคือความเงียบสงัดที่โบยบินและเป็นเครื่องเตือนใจถึงแท่นบูชา <br>
ฉันแบกดวงดาวจากยุคจักรวรรดิ <br>
ท่ามกลางทุ่งนาและเมล็ดพืช สัญญาณของฉันเป็นจริง <br>
ปราศจากคำพูด ฉันบอกเล่าตำนาน ความจงรักภักดี และราชวงศ์ <br>
ฉันคือใคร ผู้ซึ่งสั่นสะท้านด้วยพลังแห่งธรรมชาติ?
" },
    "Bandeira": { mensagem: "Entre risos que ecoam como sinos de vento, <br>
E onde o chão guarda marcas de aventuras em movimento, <br>
Há um reino sem tronos, mas com escaladas, <br>
E soldados de areia em guerras encantadas. <br>

Os adultos passam, mas poucos entendem, <br>
Que ali o tempo para e os sonhos se estendem. <br>
Se procuras o próximo passo com alegria e cor, <br>
Siga onde balanços embalam o riso e o amor." },
  },
  AzulClaro: {
    "Azul Claro": { mensagem: "ਮੈਂ ਕੇਂਦਰ ਨਹੀਂ ਹਾਂ, ਪਰ ਮੈਂ ਪ੍ਰਮੁੱਖਤਾ ਦਿੰਦਾ ਹਾਂ। <br>
ਮੈਂ ਸੁੰਦਰਤਾ ਨੂੰ ਅਪਣਾਉਂਦਾ ਹਾਂ, ਕਦੇ ਵੀ ਹਮਲਾ ਕੀਤੇ ਬਿਨਾਂ। <br>
ਮੈਂ ਕਿਨਾਰਾ ਹਾਂ, ਮੈਂ ਸੀਮਾ ਹਾਂ, ਪਰ ਜੇਲ੍ਹ ਬਣੇ ਬਿਨਾਂ। <br>
ਮੈਂ ਕੌਣ ਹਾਂ, ਜੋ ਸ਼ੁੱਧਤਾ ਨਾਲ ਰੂਪ ਰੇਖਾ ਬਣਾਉਂਦਾ ਹਾਂ?
" },
    "Moldura de quadro": { 
      mensagem: `अहं वनम् नास्मि, किन्तु तत् कथं श्रोतव्यमिति पाठयामि। <br>
अहं नदी नास्मि, परन्तु ये तस्याः मार्गदर्शनं कर्तुम् इच्छन्ति तेषां मार्गदर्शनं करोमि । <br>
प्राचीनज्ञानस्य वर्तमानविज्ञानस्य च मध्ये, <br>
अहं मनुष्यस्य प्राकृतिकजगत् च सेतुः अस्मि। <br>
यत्र पत्राणि पाठाः भवन्ति, पृथिवी च गुरुः, <br>
अहं कोऽस्मि, यः श्वः प्रतिघण्टां वपयामि ?
`
    },
    "Centro de educação ambiental": { mensagem: "
שניים יריבים מתמודדים בלי לגעת, <br>
והנשק שבו משתמשים תמיד מקפץ. <br>
אחד מתקדם, השני מגיב, <br>
אבל השיחה בלי קול — רק היזון חוזר. <br>
הבמה היא מלבן, מוקפת תשומת לב, <br>
שבו חבלים ודיוק קובעים את הכיוון. <br>
אם ברצונך לעקוב אחרי המסלול בהתמדה, <br>
לך למקום שבו מנצחים נקודה אחר נקודה... ולא באינסטינקט.
" },
    "Quadra de tênis": { mensagem: "我浩瀚無垠，卻非大海；我金碧輝煌，卻不閃耀。 <br>
在我心中，沒有想要停留的足跡。 <br>
我接受跳躍、發球、跌倒和榮耀， <br>
但我沒有勝利，只有回憶。 <br>
沒有牆壁，沒有天花板，任憑風吹拂， <br>
我是誰 在遊戲與生活相遇的地方？
" },
    "Quadra de areia": { mensagem: "Каде времето тече во два такта,<br>
и нозете танцуваат без звук.<br>
Полето не е на кралот, но некој го вика трон.<br>
Тлото е зелено, но не расте цвет,<br>
а она што најмногу расте тука... е врева.<br>
Ако го бараш следниот чекор од мисијата,<br>
оди таму каде што топката е повеќе од страст.
" },
    "Quadra de futebol society": { mensagem: "Χωρίς στέγη με σκεπάζω, μα τ’ άστρα με κοιτούν, <br>
Η φωνή μου αντηχεί όπου οι άνεμοι περνούν. <br>
Είμαι πέτρα, είμαι χορτάρι, είμαι ήχος που απλώνεται, <br>
Στη μέση του πουθενά, η τέχνη δεν σωπαίνει. <br>
Χωρίς κουρτίνες ή τοίχους να με περιορίζουν, <br>
Είμαι σκηνή της ζωής, του γέλιου και της γνώσης. <br>
Ποιος είμαι εγώ, που σχηματίστηκα στη γη και στον χώρο, <br>
Όπου ο ουρανός είναι η στέγη και ο χρόνος το μέτρο;
" },
    "Anfiteatro": { mensagem: "In hac tabula quae hic stat ad loquendum, <br>
Arcanas fabulas invenies legendum. <br>
Vicinitas est quae lutum sibi propositum fecit, <br>
Terram in artem et passionem vertit. <br>
Manus quae formant tempore ac cura, <br>
Creant ea quae ignis signat dura. <br>
Vici servantes traditionem et dignitatem, <br>
Ubi praeteritum cum amore miscetur. <br>
Si omnia haec legendo scire vis, <br>
Quae vicinitas haec tabula vocare vis?
" },
    "História de Olarias": { mensagem: "私は本でも紙の新聞でもありません。 <br>
しかし、あなたのメッセージを忠実な世界へ届けます。 <br>
創造力と才能を空に乗せて、 <br>
私は誰でしょう？あなたのブランドを輝かせる存在です。 <br>
" },
   "Placa de publicidade": { mensagem: "Entre risos que ecoam como sinos de vento, <br>
E onde o chão guarda marcas de aventuras em movimento, <br>
Há um reino sem tronos, mas com escaladas, <br>
E soldados de areia em guerras encantadas. <br>

Os adultos passam, mas poucos entendem, <br>
Que ali o tempo para e os sonhos se estendem. <br>
Se procuras o próximo passo com alegria e cor, <br>
Siga onde balanços embalam o riso e o amor." },
  },
  Laranja: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  Cinza: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  Amarelo: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  VerdeEscuro: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  Branco: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  Preto: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  Vermelho: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  VerdeClaro: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  Roxo: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  Marrom: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  },
  AzulEscuro: {
    "ABC123": { mensagem: "1" },
    "DEF456": {
      mensagem: `2<img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "3" },
    "pipipi": { mensagem: "4" },
    "papapa": { mensagem: "5" },
    "popopo": { mensagem: "6" },
    "pupupu": { mensagem: "7" },
    "pepepe": { mensagem: "8" },
    "cracra": { mensagem: "9" },
    "sabão": { mensagem: "10" }
  }
};

app.post('/verificar', (req, res) => {
  const { codigo, turma } = req.body;

  if (!turma || !codigo) {
    return res.json({ sucesso: false, mensagem: "Informe a turma e o código." });
  }

  if (codigos[turma] && codigos[turma][codigo]) {
    res.json({ sucesso: true, mensagem: codigos[turma][codigo].mensagem });
  } else {
    res.json({ sucesso: false, mensagem: "Código ou turma inválidos." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
