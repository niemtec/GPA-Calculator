// File containing calculation logic

// Converts a letter grade into a point equivalent
function convertGradeToPoints(grade) {
    const conversionTable = {
        "A*": 17,
        "A+": 16,
        "A": 15,
        "A-": 14,
        "B+": 13,
        "B": 12,
        "B-": 11,
        "C+": 10,
        "C": 9,
        "C-": 8,
        "D+": 7,
        "D": 6,
        "D-": 5,
        "N/A": 0
    };

    return conversionTable[grade];
}

function convertPointsToGrade(points) {
    const conversionTable = {
        17: "A*",
        16: "A+",
        15: "A",
        14: "A-",
        13: "B+",
        12: "B",
        11: "B-",
        10: "C+",
        9: "C",
        8: "C-",
        7: "D+",
        6: "D",
        5: "D-",
        0: "N/A"
    };
    return conversionTable[points];
}

function convertPointsToDegree(points) {
    if (points >= 14) {
        return "1st";
    } else if (points >= 11) {
        return "2:1";
    } else if (points >= 8) {
        return "2:2";
    } else if (points >= 5) {
        return "3rd";
    } else {
        return "Fail";
    }
}


const level2Credits = {
    "Group-Project": 40,
    "Software-Development": 20,
    "Usability-Engineering": 20,
    "Optional-1": 20,
    "Optional-2": 20,
    "Placement-Portfolio": 120
};

const level3Credits = {
    "Final-Year-Project": 80,
    "Advanced-Topics": 40,
    "Option-1": 40,
    "Option-2": 40,
    "Option-3": 40
};


// Get values from drop down for level 2
function getLevel2Values() {
    var groupProjectValue = $('#Group-Project').find("option:selected").text();
    var groupProject = convertGradeToPoints(groupProjectValue) * 2;

    var softwareDevelopmentValue = $('#Software-Development').find("option:selected").text();
    var softwareDevelopment = convertGradeToPoints(softwareDevelopmentValue);

    var usabilityEngineeringValue = $('#Usability-Engineering').find("option:selected").text();
    var usabilityEngineering = convertGradeToPoints(usabilityEngineeringValue);

    var optional1Value = $('#Optional-Module-1').find("option:selected").text();
    var optional1 = convertGradeToPoints(optional1Value);

    var optional2Value = $('#Optional-Module-2').find("option:selected").text();
    var optional2 = convertGradeToPoints(optional2Value);

    return groupProject + softwareDevelopment + usabilityEngineering + optional2 + optional1;
}

function getPlacementValue() {
    var placementValue = $('#Placement').find("option:selected").text();
    var placement = 0;

    if (placementValue === "N/A") {
        return 0;
    } else {
        placement = convertGradeToPoints(placementValue);
        return placement * 3;
    }
}

// Get values from drop down for level 3
function getLevel3Values() {
    var fypValue = $('#Final-Year-Project').find("option:selected").text();
    var fyp = convertGradeToPoints(fypValue) * 2;

    var advancedValue = $('#Advanced-Topics').find("option:selected").text();
    var advanced = convertGradeToPoints(advancedValue);

    var option1Value = $('#Option-1').find("option:selected").text();
    var option1 = convertGradeToPoints(option1Value);

    var option2Value = $('#Option-2').find("option:selected").text();
    var option2 = convertGradeToPoints(option2Value);

    var option3Value = $('#Option-3').find("option:selected").text();
    var option3 = convertGradeToPoints(option3Value);

    return fyp + advanced + option1 + option2 + option3;
}


function calculateAverage(level2, placement, level3) {
    var level3gpa = 0;
    var level2gpa = 0;
    var final = 0;
    if (placement !== 0) {
        level3gpa = level3 / 6;
        level2gpa = (level2 + placement) / 9;
        final = (level3gpa + level2gpa) / 2;
        // console.log("Level 2 GPA: " + level2gpa);
        // console.log("Level 3 GPA: " + level3gpa);
        return final;
    } else {
        level3gpa = level3 / 6;
        level2gpa = level2 / 6;
        final = (level3gpa + level2gpa) / 2;
        // console.log("Level 2 GPA: " + level2gpa);
        // console.log("Level 3 GPA: " + level3gpa);
        return final;
    }
}

function calculateGPA() {
    var level2 = getLevel2Values();
    var placement = getPlacementValue();
    var level3 = getLevel3Values();

    // console.log("Level 2 Total: " + level2);
    // console.log("Placement Total: " + placement);
    // console.log("-----------------------------");
    // console.log("Level 2 + Placement: " + (level2 + placement));
    // console.log("-----------------------------");
    // console.log("Level 3 Total: " + level3);

    // GPA Rounded UP
    var average = Math.ceil(calculateAverage(level2, placement, level3));

    // console.log("Average GPA: " + average);
    // console.log(convertPointsToGrade(average));

    var grade = convertPointsToGrade(average).toString();
    var degree = convertPointsToDegree(average).toString();
    document.getElementById('Result').innerHTML = "GPA: " + average + "  ∙  Degree: " + degree;
}


