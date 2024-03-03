const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database("./questions.db", sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err);
});

app.use(cors());
app.use(bodyParser.json());

//post request
app.post('/api/questions', (req, res) => {
    try {
        const { className, level, subject, chapter } = req.body;
        const sql = 'SELECT question, solution FROM questions WHERE class=? AND level=? AND subject=? AND chapter=?';

        db.all(sql, [className, level, subject, chapter], (err, rows) => {
            if (err) return res.json({ status: 300, success: false, error: err });

            console.log("successful input", className, level, subject, chapter);
            
            return res.json({
                status: 200,
                success: true,
                data: rows,
            });
        });
    } catch (error) {
        return res.json({
            status: 400,
            success: false,
            error: 'Bad request'
        });
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
