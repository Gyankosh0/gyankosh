const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
const db = new sqlite3.Database('./questions.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Query to select all data
const sql = "SELECT * FROM questions";

db.all(sql, [], (err, rows) => {
  if (err) {
    console.error('Enter fetching data', err.message);
    db.close();
    return;
  }
  // Log the rows to the console
  console.log(rows);

  // Check if data is present
  if(rows.length > 0) {
    console.log('Data retrieved successfully. Number of records:', rows.length);
  } else {
    console.log('No data found.');
  }
});

// Close the database connection
db.close((err) => { 
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});
