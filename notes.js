const fs = require('fs'); // no need to install (core)

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    notes = fetchNotes();
    filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0]; // returns undefined if note not found
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    
    return notes.length !== filteredNotes.length; // true if removed
};

var logNote = (note) => {
    console.log('________________________________');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}


module.exports = {
    addNote, //omg u dont need the colon
    getAll,
    getNote,
    removeNote,
    logNote,
};