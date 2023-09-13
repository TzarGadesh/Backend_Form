const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});
app.get('/o-nama', (req, res) => {
  res.sendFile(__dirname + '/views/o-nama.html');
});
app.get('/kontakt', (req, res) => {
  res.sendFile(__dirname + '/views/kontakt.html');
});
app.get('/usluge', (req, res) => {
  res.sendFile(__dirname + '/views/usluge.html');
});

// Povezivanje na MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Pravljenje scheme za mongoDB bazu
const formDataSchema = {
  tipTransporta: String,
  mestoUtovara: String,
  mestoIstovara: String,
  podaciORobi: String,
  ukupnaTezina: Number,
  dimenzije: String,
  nazivFirme: String,
  imeIPrezime: String,
  telefon: String,
  email: String,
  datumUtovara: Date,
  dodatnaNapomena: String,
};

const FormData = mongoose.model('FormData', formDataSchema);

const db = mongoose.connection;

// Event handler za gresku pri konekciji
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Event handler za uspesnu konekciju
db.once('open', () => {
  console.log('Connected to MongoDB');
});

function writeToJSONFile(data) {
  const jsonData = JSON.stringify(data, null, 2); // Pretvaramo podatke u JSON format sa 2-space indentacijom
  fs.writeFileSync('podaciIzForme.json', jsonData); // Upišemo podatke u "formdata.json"
}

function writeAllToJSONFile(data) {
  const jsonData = JSON.stringify(data, null, 2); // Pretvaramo podatke u JSON format sa 2-space indentacijom
  fs.writeFileSync('svipodaci.json', jsonData);
}
app.post('/submit', async (req, res) => {
  try {
    // Izvlacimo podatke iz zahteva
    const {
      tipTransporta,
      mestoUtovara,
      mestoIstovara,
      podaciORobi,
      ukupnaTezina,
      dimenzije,
      nazivFirme,
      imeIPrezime,
      telefon,
      email,
      datumUtovara,
      dodatnaNapomena,
    } = req.body;

    // Instanca FormData modela
    const newFormData = new FormData({
      tipTransporta,
      mestoUtovara,
      mestoIstovara,
      podaciORobi,
      ukupnaTezina,
      dimenzije,
      nazivFirme,
      imeIPrezime,
      telefon,
      email,
      datumUtovara,
      dodatnaNapomena,
    });

    // Sacuvaj form podatke u mongoDB
    await newFormData.save();
    const allFormData = await FormData.find();
    // Pisanje podataka iz forme u json file
    writeToJSONFile(newFormData);
    writeAllToJSONFile(allFormData);
    // Saljemo uspesan odgovor klijentu
    res.status(200).send('Podaci iz forme su uspešno sačuvani!');
  } catch (error) {
    console.error('Greška pri obradi slanja forme:', error);
    // Saljemo gresku klijentu
    res.status(500).send('Greška pri obradi slanja forme.');
  }
});

app.get('/viewdata', async (req, res) => {
  try {
    // Vraća podatke iz FormData kolekcije
    const formData = await FormData.find(); // Skuplja sve iz kolekcije FormData

    const formattedData = formData.map((item) => ({
      tipTransporta: item.tipTransporta,
      mestoUtovara: item.mestoUtovara,
      mestoIstovara: item.mestoIstovara,
      podaciORobi: item.podaciORobi,
      ukupnaTezina: item.ukupnaTezina,
      dimenzije: item.dimenzije,
      nazivFirme: item.nazivFirme,
      imeIPrezime: item.imeIPrezime,
      telefon: item.telefon,
      email: item.email,
      datumUtovara: item.datumUtovara,
      dodatnaNapomena: item.dodatnaNapomena,
    }));

    // Vraća sređeni format JSON fajla sa podacima iz forme
    res.json(formattedData);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).send('Error fetching data');
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
