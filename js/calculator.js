// File containing calculation logic

// Converts a letter grade into a point equivalent
function convertGradeToPoints(grade) {

    var conversionTable = {
        "A*": 17,
        "A+": 16,
        "A": 15,
        "A-": 14,
        "B+": 13,
        "B":  12,
        "B-": 11,
        "C+": 10,
        "C":  9,
        "C-": 8,
        "D+": 7,
        "D":  6,
        "D-": 5,
        "N/A": 0
    };

    return conversionTable[grade];
}


