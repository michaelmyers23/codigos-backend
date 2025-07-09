const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const codigos = {
  "ABC123": { texto: "Tudo certo" },
  "DEF456": { 
    texto: "Ótimo! Aqui está a Mensagem 2.\nQuebrou a linha", 
    imagem: "https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" 
  },
  "XYZ789": { texto: "Sucesso! Mensagem secreta 3 revelada." },
  "Azerbaijão": { texto: "Ainda assim funciona.\nQuebrou a linha" },
};

app.post('/verificar', (req, res) => {
  const { codigo } = req.body;

  if (codigos[codigo]) {
    res.json({ sucesso: true, ...codigos[codigo] });
  } else {
    res.json({ sucesso: false, texto: "Código inválido." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
