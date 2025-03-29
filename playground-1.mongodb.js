// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('user_exercise_log');

// Create a new document in the collection.
db.getCollection('exercises').insertOne({
    "name": "Bicep Curls",
    "reps": 20,
    "weight": 25,
    "unit": "lbs",
    "date": "07-30-21"
});
