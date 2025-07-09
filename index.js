const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const codigos = {
  "ABC123": "Tudo certo",
  "DEF456": "Ótimo! Aqui está a Mensagem 2.<br>Quebrou a linha",
  "XYZ789": "Sucesso! Mensagem secreta 3 revelada.",
  "Azerbaijão": "Ainda assim funciona.<br> Quebrou a linha",
};

app.post('/verificar', (req, res) => {
  const { codigo } = req.body;

  if (codigos[codigo]) {
    res.json({ sucesso: true, mensagem: codigos[codigo] });
  } else {
    res.json({ sucesso: false, mensagem: "Código inválido." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
