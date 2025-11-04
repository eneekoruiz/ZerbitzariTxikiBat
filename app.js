const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let erabiltzaileak = [
  { id: 1, izena: 'Jon', abizena: 'Garcia', email: 'jon@example.com' },
  { id: 2, izena: 'Itxaso', abizena: 'Urgoitia', email: 'itxaso@example.com' }
];


app.get('/erabiltzaileak', (req, res) => {
  res.json({ erabiltzaileak: erabiltzaileak });
});

app.get('/erabiltzaileak/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const erabiltzailea = erabiltzaileak.find(e => e.id === id);
  if (!erabiltzailea) return res.status(404).json({ errorea: 'Ez da aurkitu' });
  res.json({ erabiltzailea: erabiltzailea });
});

app.post('/erabiltzaileak', (req, res) => {
  const { izena, abizena, email } = req.body;
  if (!izena || !abizena || !email) {
    return res.status(400).json({ errorea: 'Datu guztiak beharrezkoak' });
  }
  const id = erabiltzaileak.length + 1;
  const berria = { id, izena, abizena, email };
  erabiltzaileak.push(berria);
  res.status(201).json({ mezua: 'Ondo sortu da', erabiltzailea: berria });
});

app.listen(PORT, () => {
  console.log('Zerbitzaria ' + PORT + ' portuan: http://localhost:' + PORT);
});
