const cors = require('cors');
const sqlite = require('sqlite3').verbose();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const app = express();
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

            console.log("successful 1 input", className, level, subject, chapter);
            
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


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/login-backend', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.post('/src/components/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Create new user
    const newUser = new User({ username, password }); // Use the User model
    await newUser.save();
    // User created successfully
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
