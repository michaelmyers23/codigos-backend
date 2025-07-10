const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const codigos = {
  Rosa: {
    // ... conteúdo omitido para brevidade
  },
  AzulClaro: {
    // ... conteúdo omitido para brevidade
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
