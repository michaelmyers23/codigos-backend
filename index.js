const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mensagens organizadas por turma e código
const codigos = {
  turmaA: {
    "ABC123": { mensagem: "Ο καθηγητής Γκάμπριελ είναι πολύ καλός." },
    "DEF456": { 
      mensagem: `Ótimo! Aqui está a Mensagem 2 para turma A.<br>Quebrou a linha<br><img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "Sucesso! Mensagem secreta 3 revelada para turma A." },
    "Azerbaijão": { mensagem: "Ainda assim funciona para turma A.<br>Quebrou a linha" },
  },
  turmaB: {
    "ABC123": { mensagem: "Tudo certo, mas diferente para turma B" },
    "DEF456": { 
      mensagem: `Ótimo! Aqui está a Mensagem 2 para turma B.<br>Quebrou a linha<br><img src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image04_grd.png" alt="Imagem" style="max-width:100%;">`
    },
    "XYZ789": { mensagem: "Sucesso! Mensagem secreta 3 revelada para turma B." },
    "Azerbaijão": { mensagem: "Ainda assim funciona para turma B.<br>Quebrou a linha" },
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
