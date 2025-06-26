/**
 * Converts a numerical grade to a quality point, letter grade, and mention
 * @param {number} note - The numerical grade (0-100)
 * @returns {Object} An object containing quality note, grade, and mention
 * @throws {Error} If the note is not between 0 and 100
 */
function noteGradeMentionGenerator(note) {
    const noteGradeMention = {
        formattedNote: 0.0,
        grade: "",
        mention: ""
    };

    if (note >= 0.00 && note <= 28.99) {
        noteGradeMention.formattedNote = 0.00;
        noteGradeMention.grade = "F";
        noteGradeMention.mention = "Echec";
    } else if (note >= 29.00 && note <= 34.99) {
        noteGradeMention.formattedNote = 0.00;
        noteGradeMention.grade = "E";
        noteGradeMention.mention = "Echec";
    } else if (note >= 35.00 && note <= 39.99) {
        noteGradeMention.formattedNote = 1.00;
        noteGradeMention.grade = "D";
        noteGradeMention.mention = "Crédits capitalisés non transférables";
    } else if (note >= 40.00 && note <= 44.99) {
        noteGradeMention.formattedNote = 1.30;
        noteGradeMention.grade = "D+";
        noteGradeMention.mention = "Crédits capitalisés non transférables";
    } else if (note >= 45.00 && note <= 49.99) {
        noteGradeMention.formattedNote = 1.70;
        noteGradeMention.grade = "C-";
        noteGradeMention.mention = "Crédits capitalisés non transférables";
    } else if (note >= 50.00 && note <= 54.99) {
        noteGradeMention.formattedNote = 2.00;
        noteGradeMention.grade = "C";
        noteGradeMention.mention = "Passable";
    } else if (note >= 55.00 && note <= 59.99) {
        noteGradeMention.formattedNote = 2.30;
        noteGradeMention.grade = "C+";
        noteGradeMention.mention = "Passable";
    } else if (note >= 60.00 && note <= 64.99) {
        noteGradeMention.formattedNote = 2.70;
        noteGradeMention.grade = "B-";
        noteGradeMention.mention = "Assez bien";
    } else if (note >= 65.00 && note <= 69.99) {
        noteGradeMention.formattedNote = 3.00;
        noteGradeMention.grade = "B";
        noteGradeMention.mention = "Assez bien";
    } else if (note >= 70.00 && note <= 74.99) {
        noteGradeMention.formattedNote = 3.30;
        noteGradeMention.grade = "B+";
        noteGradeMention.mention = "Bien";
    } else if (note >= 75.00 && note <= 79.99) {
        noteGradeMention.formattedNote = 3.70;
        noteGradeMention.grade = "A-";
        noteGradeMention.mention = "Bien";
    } else if (note >= 80.00 && note <= 100.00) {
        noteGradeMention.formattedNote = 4.00;
        noteGradeMention.grade = "A";
        noteGradeMention.mention = "Très bien";
    } else {
        throw new Error("La note doit être comprise entre 0 et 100");
    }

    return noteGradeMention;
}

export {
    noteGradeMentionGenerator
};