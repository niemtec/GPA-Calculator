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
    let numberOfModules = 0;

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

    var placementSelector = document.getElementById('Placement');
    var placementValue = placementSelector[placementSelector.selectedIndex].value;
    var placement = 0;

    if (placementValue === "N/A") {
        placement = 0;
        numberOfModules = 5;
    } else {
        placement = convertGradeToPoints(placementValue);
        numberOfModules = 6;
    }

    var gpa = groupProject + softwareDevelopment + usabilityEngineering + optional1 + optional2 + placement;
    return gpa / numberOfModules;
}
