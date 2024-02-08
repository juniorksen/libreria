const path = require('path');
const express = require('express');
const sqlite = require('sqlite3');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors())
app.use('/imgs', express.static(path.join(__dirname, 'imgs')));

app.get('/api/libros', (req, res) => {
    const db = new sqlite.Database('./database.sqlite');
    db.all('SELECT * FROM libros', (err, rows) => {
            if(err){
                console.error(err);
                return res.status(500).json({error: 'Error al obtener los datos'});
            }
            res.json(rows);
    });
    db.close();
});

app.listen(port, () => {
    console.log('Server activo...');
});

