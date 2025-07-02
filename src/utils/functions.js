function noteGradeMentionGenerator(note) {
    const noteGradeMention = {
        formattedNote: 0.0,
        grade: "",
        mention: "",
    };

    if (note >= 0.0 && note <= 28.99) {
        noteGradeMention.formattedNote = 0.0;
        noteGradeMention.grade = "F";
        noteGradeMention.mention = "Echec";
    } else if (note >= 29.0 && note <= 34.99) {
        noteGradeMention.formattedNote = 0.0;
        noteGradeMention.grade = "E";
        noteGradeMention.mention = "Echec";
    } else if (note >= 35.0 && note <= 39.99) {
        noteGradeMention.formattedNote = 1.0;
        noteGradeMention.grade = "D";
        noteGradeMention.mention = "Crédits capitalisés non transférables";
    } else if (note >= 40.0 && note <= 44.99) {
        noteGradeMention.formattedNote = 1.3;
        noteGradeMention.grade = "D+";
        noteGradeMention.mention = "Crédits capitalisés non transférables";
    } else if (note >= 45.0 && note <= 49.99) {
        noteGradeMention.formattedNote = 1.7;
        noteGradeMention.grade = "C-";
        noteGradeMention.mention = "Crédits capitalisés non transférables";
    } else if (note >= 50.0 && note <= 54.99) {
        noteGradeMention.formattedNote = 2.0;
        noteGradeMention.grade = "C";
        noteGradeMention.mention = "Passable";
    } else if (note >= 55.0 && note <= 59.99) {
        noteGradeMention.formattedNote = 2.3;
        noteGradeMention.grade = "C+";
        noteGradeMention.mention = "Passable";
    } else if (note >= 60.0 && note <= 64.99) {
        noteGradeMention.formattedNote = 2.7;
        noteGradeMention.grade = "B-";
        noteGradeMention.mention = "Assez bien";
    } else if (note >= 65.0 && note <= 69.99) {
        noteGradeMention.formattedNote = 3.0;
        noteGradeMention.grade = "B";
        noteGradeMention.mention = "Assez bien";
    } else if (note >= 70.0 && note <= 74.99) {
        noteGradeMention.formattedNote = 3.3;
        noteGradeMention.grade = "B+";
        noteGradeMention.mention = "Bien";
    } else if (note >= 75.0 && note <= 79.99) {
        noteGradeMention.formattedNote = 3.7;
        noteGradeMention.grade = "A-";
        noteGradeMention.mention = "Bien";
    } else if (note >= 80.0 && note <= 100.0) {
        noteGradeMention.formattedNote = 4.0;
        noteGradeMention.grade = "A";
        noteGradeMention.mention = "Très bien";
    } else {
        throw new Error("La note doit être comprise entre 0 et 100");
    }

    return noteGradeMention;
}

function calculateAverage(notes) {
    let sumNotes = 0;
    let sumCredits = 0;

    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];

        const average = element.formattedNote * element.credit;
        sumNotes += average;
        sumCredits += parseInt(element.credit);
    }

    const result = sumNotes / sumCredits;

    return result.toFixed(2);
}

export {
    noteGradeMentionGenerator,
    calculateAverage
}