const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Construí mensagens HTML já prontas com <br> e <img> onde quer imagem
const codigos = {
  "ABC123": { mensagem: "Tudo certo" },
  "DEF456": { 
    mensagem: `Ótimo! Aqui está a Mensagem 2.<br>Quebrou a linha<br><img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
  },
  "XYZ789": { mensagem: "Sucesso! Mensagem secreta 3 revelada." },
  "Azerbaijão": { mensagem: "Ainda assim funciona.<br>Quebrou a linha" },
};

app.post('/verificar', (req, res) => {
  const { codigo } = req.body;

  if (codigos[codigo]) {
    res.json({ sucesso: true, mensagem: codigos[codigo].mensagem });
  } else {
    res.json({ sucesso: false, mensagem: "Código inválido." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
