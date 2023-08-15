const express = require('express');
const fetch = require('node-fetch'); 
const app = express();

app.get('/api/exemploQuestoes', async (req, res) => {
  try {
    const response = await fetch('https://hardworkmedicina.com.br/exemploQuestoes.json');
    const jsonData = await response.json();
    res.json(jsonData);
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    res.status(500).json({ error: 'Erro ao buscar os dados' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
