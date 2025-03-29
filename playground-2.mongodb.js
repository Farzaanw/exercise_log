// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('user_exercise_log');

// Create a new document in the collection.
db.getCollection('exercises').insertOne({

    "name": "Pushups",
    "reps": 15,
    "weight": 4,
    "unit": "lbs",
    "date": "03-13-20"

});
