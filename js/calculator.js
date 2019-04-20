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
    var groupProjectSelector = document.getElementById('Group-Project');
    var groupProjectValue = groupProjectSelector[groupProjectSelector.selectedIndex].value;
    var groupProject = convertGradeToPoints(groupProjectValue) * 2;

    var softwareDevelopmentSelector = document.getElementById('Software-Development');
    var softwareDevelopmentValue = softwareDevelopmentSelector[softwareDevelopmentSelector.selectedIndex].value;
    var softwareDevelopment = convertGradeToPoints(softwareDevelopmentValue);

    var usabilityEngineeringSelector = document.getElementById('Usability-Engineering');
    var usabilityEngineeringValue = usabilityEngineeringSelector[usabilityEngineeringSelector.selectedIndex].value;
    var usabilityEngineering = convertGradeToPoints(usabilityEngineeringValue);

    var optional1Selector = document.getElementById('Optional-Module-1');
    var optional1Value = optional1Selector[optional1Selector.selectedIndex].value;
    var optional1 = convertGradeToPoints(optional1Value);

    var optional2Selector = document.getElementById('Optional-Module-2');
    var optional2Value = optional2Selector[optional2Selector.selectedIndex].value;
    var optional2 = convertGradeToPoints(optional2Value);

    return groupProject + softwareDevelopment + usabilityEngineering + optional1 + optional2;
}

function getPlacementValue() {
    var placementSelector = document.getElementById('Placement');
    var placementValue = placementSelector[placementSelector.selectedIndex].value;
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
    var fypSelector = document.getElementById('Final-Year-Project');
    var fypValue = fypSelector[fypSelector.selectedIndex].value;
    var fyp = convertGradeToPoints(fypValue);

    var advancedSelector = document.getElementById('Advanced-Topics');
    var advancedValue = advancedSelector[advancedSelector.selectedIndex].value;
    var advanced = convertGradeToPoints(advancedValue);

    var option1Selector = document.getElementById('Option-1');
    var option1Value = option1Selector[option1Selector.selectedIndex].value;
    var option1 = convertGradeToPoints(option1Value);

    var option2Selector = document.getElementById('Option-2');
    var option2Value = option2Selector[option2Selector.selectedIndex].value;
    var option2 = convertGradeToPoints(option2Value);

    var option3Selector = document.getElementById('Option-3');
    var option3Value = option3Selector[option3Selector.selectedIndex].value;
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


