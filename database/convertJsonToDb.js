const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('question_test.db');

const jsonData = [
    [
        {
            "key": "1",
            "class":"",
            "level":"",
            "chapter":"",
            "subject":"",
            "question":"kk",
            "solution":"jee easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"2",
            "class":"CBSE 11th board",
            "level":"Easy",
            "subject":"Physics",
            "chapter":"02] SEMICONDUCTOR ELECTRONICS",
            "question":"11 board easy If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"11 board easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"3",
            "class":"CBSE 11th board",
            "level":"Medium",
            "subject":"Physics",
            "chapter":"03] COMMUNICATION SYSTEM",
            "question":"11 board medium If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"11 board medium one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"4",
            "class":"CBSE 11th board",
            "level":"Hard",
            "subject":"Biology",
            "chapter":"04] RAY OPTICS",
            "question":"11 board hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"11 board hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"5",
            "class":"JEE Main + NEET + JEE Advanced",
            "level":"Easy",
            "subject":"Biology",
            "chapter":"05] WAVE OPTICS",
            "question":"jee easy If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"jee easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"6",
            "class":"CBSE 12th board",
            "level":"Easy",
            "subject":"Biology",
            "chapter":"06] UNIVERSE",
            "question":"12 board easy If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"12 board easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"7",
            "class":"JEE Main + NEET + JEE Advanced",
            "level":"Easy",
            "subject":"Chemistry",
            "chapter":"07] FRICTION",
            "question":"jee easy 7If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"jee easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"8",
            "class":"JEE Main + NEET + JEE Advanced",
            "level":"Medium",
            "subject":"Chemistry",
            "chapter":"08] ELECTROSTATICS",
            "question":"jee medium 7If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"jee medium one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"9",
            "class":"JEE Main + NEET + JEE Advanced",
            "level":"Hard",
            "subject":"Chemistry",
            "chapter":"09] MAGNETISM AND MATTER",
            "question":"Jee Hard 8If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"Jee Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"10",
            "class":"CBSE 12th board",
            "level":"Easy",
            "subject":"Chemistry",
            "chapter":"10] MOVING CHARGE AND MAGNETISM",
            "question":"12 board easy If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"12 board easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"11",
            "class":"CBSE 12th board",
            "level":"Medium",
            "subject":"Chemistry",
            "chapter":"11] MOVING CHARGE AND MAGNETISM" ,
            "question":"12 board Medium If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"12 board Medium one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"12",
            "class":"CBSE 12th board",
            "level":"Hard",
            "subject":"",
            "chapter":"12] MOVING CHARGE AND MAGNETISM" ,
            "question":"12 board hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"12 board hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"13",
            "class":"CBSE 10th board",
            "level":"Easy",
            "subject":"Math",
            "chapter":"13] MOVING CHARGE AND MAGNETISM" ,  
            "question":"10 board easy If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"14",
            "class":"CBSE 10th board",
            "level":"Medium",
            "subject":"Math",
            "chapter":"14] MOVING CHARGE AND MAGNETISM" ,
            "question":"10 board medium If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board medium one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"15",
            "class":"CBSE 10th board",
            "level":"Hard",
            "subject":"Math",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"16",
            "class":"CBSE 10th board",
            "level":"Hard",
            "subject":"",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"17",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"18",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"19",
            "class":"CBSE 10th board",
            "level":"Hard", 
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"20",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"21",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"22",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"23",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"24",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"25",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"26",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"27",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"28",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"29",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"10 v board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"30",
            "class":"CBSE 10th board",
            "level":"Hard",
            "question":"100 board Hard If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"10 board Hard one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        },
        {
            "key":"31",
            "class":"JEE Main + NEET + JEE Advanced",
            "level":"Easy",
            "subject":"Physics",
            "chapter":"01] ATOMIC AND NUCLEAR PHYSICS",
            "question":"Jee easy If the roots of the equation x²-px+q = 0 differ by unity, then",
            "solution":"Jee easy one possible set of roots for the equation r1=p+1/2 and r2 = 2q/p+1"
        }
    
    ]
];

db.serialize(function() {
    // Create table
    db.run("CREATE TABLE IF NOT EXISTS questions (key TEXT, class TEXT, level TEXT, chapter TEXT, subject TEXT, question TEXT, solution TEXT)");

    // Prepare insert statement
    const stmt = db.prepare("INSERT INTO questions (key, class, level, chapter, subject, question, solution) VALUES (?, ?, ?, ?, ?, ?, ?)");

    // Insert JSON data into table
    jsonData.forEach((item) => {
        stmt.run([item.key, item.class, item.level, item.chapter, item.subject, item.question, item.solution] , function(err) {
            if (err) {
                console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
    });

    // Finalize statement and close database
    // stmt.finalize();
    console.log('Data inserted successfully.');
});

