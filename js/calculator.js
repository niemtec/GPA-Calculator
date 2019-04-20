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
    var groupProjectValue = $('#Group-Project').find("option:selected");
    var groupProject = convertGradeToPoints(groupProjectValue) * 2;

    var softwareDevelopmentValue = $('#Software-Development').find("option:selected");
    var softwareDevelopment = convertGradeToPoints(softwareDevelopmentValue);

    var usabilityEngineeringValue = $('Usability-Engineering').find("option:selected");
    var usabilityEngineering = convertGradeToPoints(usabilityEngineeringValue);

    var optional1Value = $('#Optional-Module-1').find("option:selected");
    var optional1 = convertGradeToPoints(optional1Value);

    var optional2Value = $('#Optional-Module-2').find("option:selected");
    var optional2 = convertGradeToPoints(optional2Value);

    return groupProject + softwareDevelopment + usabilityEngineering + optional1 + optional2;
}

function getPlacementValue() {
    var placementValue = $('#Placement').find("option:selected");
    var placement = 0;

    if (placementValue === "N/A") {
        placement = 0;
        numberOfModules = 5;
    } else {
        placement = convertGradeToPoints(placementValue);
        placement = placement * 3;
        numberOfModules = 6;
    }

    return placement;
}

// Get values from drop down for level 3
function getLevel3Values() {
    var fypValue = $('#Final-Year-Project').find("option:selected");
    var fyp = convertGradeToPoints(fypValue);

    var advancedValue = $('#Advanced-Topics').find("option:selected");
    var advanced = convertGradeToPoints(advancedValue);

    var option1Value = $('#Option-1').find("option:selected");
    var option1 = convertGradeToPoints(option1Value);

    var option2Value = $('#Option-2').find("option:selected");
    var option2 = convertGradeToPoints(option2Value);

    var option3Value = $('#Option-3').find("option:selected");
    var option3 = convertGradeToPoints(option3Value);

    return fyp + advanced + option1 + option2 + option3;
}


function calculateAverage(level2, placement, level3) {
    if (placement !== 0) {
        return ((2 * level3) + (placement + level2)) / 3;
    } else {
        return ((2 * level3) + level2) / 2;
    }
}

function calculateGPA() {
    var level2 = getLevel2Values();
    var placement = getPlacementValue();
    var level3 = getLevel3Values();
    var average = calculateAverage(level2, placement, level3);

    var result = convertPointsToGrade(average);

    document.getElementById('Result').innerHTML = result;
}


