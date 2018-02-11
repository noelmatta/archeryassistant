// Smooth scroll


// Create empty object to contain code

const archerAssist = {};

// Create data set for arrow spines
archerAssist.arrows = { // There is a pattern to these datasets and I will eventually come back and write a for loop to replace this huge nested array
    wood: { // data taken from http://tradbow.com/wood-arrow-spine/ 
        drawLength: { 
            24: { // length in inches
                44: 'less than 30', // key is poundage aka draw weight, value is spine measurement
                49: '30 to 35',
                54: '35 to 40',
                59: '40 to 45',
                64: '45 to 50',
                69: '50 to 55'
            },
            25: {
                39: 'less than 30', 
                44: '30 to 35',
                49: '35 to 40',
                54: '40 to 45',
                59: '45 to 50',
                64: '50 to 55',
                69: '55 to 60'
            },
            26: {
                34: 'less than 30',
                39: '30 to 35',
                44: '35 to 40',
                49: '40 to 45',
                54: '45 to 50',
                59: '50 to 55',
                64: '55 to 60',
                69: '60 to 65'
            },
            27: {
                29: 'less than 30', 
                34: '30 to 35',
                39: '35 to 40',
                44: '40 to 45',
                49: '45 to 50',
                54: '50 to 55',
                59: '55 to 60',
                64: '60 to 65',
                69: '65 to 70'
            },
            28: {
                24: 'less than 30', 
                29: '30 to 35',
                34: '35 to 40',
                39: '40 to 45',
                44: '45 to 50',
                49: '50 to 55',
                54: '55 to 60',
                59: '60 to 65',
                64: '65 to 70',
                69: '70 to 75'
            },
            29: {
                24: '30 to 35',
                29: '35 to 40',
                34: '40 to 45',
                39: '45 to 50',
                44: '50 to 55',
                49: '55 to 60',
                54: '60 to 65',
                59: '65 to 70',
                64: '70 to 75',
                69: '75 to 80'
            },
            30: {
                24: '35 to 40',
                29: '40 to 45',
                34: '45 to 50',
                39: '50 to 55',
                44: '55 to 60',
                49: '60 to 65',
                54: '65 to 70',
                59: '70 to 75',
                64: '75 to 80',
                69: '80 to 85'
            },
            31: {
                24: '40 to 45',
                29: '45 to 50',
                34: '50 to 55',
                39: '55 to 60',
                44: '60 to 65',
                49: '65 to 70',
                54: '70 to 75',
                59: '75 to 80',
                64: '80 to 85',
                69: '85 to 90'
            },
            32: {
                24: '45 to 50',
                29: '50 to 55',
                34: '55 to 60',
                39: '60 to 65',
                44: '65 to 70',
                49: '70 to 75',
                54: '75 to 80',
                59: '80 to 85',
                64: '85 to 90',
                69: '90 to 95'
            }                    
        }
    },
    carbon: { // data taken from http://www.oldworldarchery.com/how-to-select-the-correct-arrows-for-your-traditional-recurve
        drawLength: {
            24: { // length in inches
                56: 600,
                72: 500,
                78: 400
            },
            25: {
                51: 600,
                66: 500,
                78: 400
            },
            26: {
                46: 600,
                61: 500,
                78: 400
            },
            27: {
                41: 600,
                56: 500,
                72: 400,
                78: 340
            },
            28: {
                36: 600,
                51: 500,
                66: 400,
                78: 340
            },
            29: {
                46: 500,
                61: 400,
                72: 340,
                78: 260
            },
            30: {
                41: 500,
                56: 400,
                66: 340,
                78: 260
            },
            31: {
                36: 500,
                51: 400,
                61: 340,
                78: 260
            },
            32: {
                46: 400,
                56: 340,
                78: 260
            }
        }
    },
    aluminum: { // data taken from http://tradgang.com/cgi-bin/ultimatebb.cgi?ubb=get_topic;f=1;t=085830
        drawLength: {
            24: {
                30: 1516,
                35: 1614,
                40: 1616
            },
            25: {
                25: 1516,
                30: 1614,
                35: 1616,
                40: 1714,
                45: 1716
            },
            26: {
                25: 1614,
                30: 1616,
                35: 1714,
                40: 1716,
                45: 1814
            },
            27: {
                25: 1616,
                30: 1714,
                35: 1716,
                40: 1814,
                45: 1816,
                50: 1914
            },
            28: {
                25: 1714,
                30: 1716,
                35: 1814,
                40: 1816,
                45: 1914,
                50: 1916
            },
            29: {
                25: 1716,
                30: 1814,
                35: 1816,
                40: 1914,
                45: 1916,
                50: 2014,
                55: 2115
            },
            30: {
                25: 1814,
                30: 1816,
                35: 1914,
                40: 1916,
                45: 2014,
                50: 2115
            },
            31: {
                30: 1914,
                35: 1916,
                45: 2014
            },
            32: {
                40: 2014
            }
        }
    }
};

archerAssist.getResult = () => {
    $('form').on('submit', function(e) {
        // Prevent page from reloading
        e.preventDefault();

        if ($(this).attr('id') === 'firstInput') {
            const armSpan = Number($('input[name=armSpan]').val());
            archerAssist.validateNumber(armSpan);
            console.log(armSpan);
            return armSpan;
        } else if ($(this).attr('id') === 'secondInput') {
            const bowType = $('input[name=bowType]:checked').val();
            console.log(bowType);
            return bowType;
        } else if ($(this).attr('id') === 'thirdInput') {
            const shaftMaterial = $('input[name=shaftMaterial]:checked').val();
            console.log(shaftMaterial);
            return shaftMaterial;
        } else if ($(this).attr('id') === 'fourthInput') {
            const poundage = Number($('select[name=poundage]').val());
            console.log(poundage);
            return poundage;
        } else if ($(this).attr('id') === 'fifthInput') {
            const usage = $('input[name=usage]:checked').val();
            console.log(usage);
            return usage;
        };
    });    
};

archerAssist.getDrawLength = (armSpan) => {
    const drawLength = Math.round((armSpan / 2.5) * 2) / 2; // draw length is arm span divided by 2.5 then rounded up to nearest 0.5
    return drawLength;
};

// Convert armSpan to drawLength

archerAssist.getBowHeight = (drawLength) => {
    // Determine bow height from armSpan
    if (drawLength <= 16) {
        bowHeight = 48;
        return bowHeight;
    } else if (drawLength <= 20) {
        bowHeight = 54;
        return bowHeight;
    } else if (drawLength <= 22) {
        bowHeight = 58;
        return bowHeight;
    } else if (drawLength <= 24) {
        bowHeight = 62;
        return bowHeight;
    } else if (drawLength <= 26) {
        bowHeight = 66;
        return bowHeight;
    } else if (drawLength <= 28) {
        bowHeight = 68;
        return bowHeight;
    } else if (drawLength <= 30) {
        bowHeight = 70;
        return bowHeight;
    } else {
        bowHeight = 72;
        return bowHeight;
    };
};

// console.log(`Your bow height is ${bowHeight}"`);

// Filter arrow spine from arrow type, poundage, and draw length

// Determine fletching type based on bow type

// if (results.bowType === 'traditional') {
//     fletching = 'feathers';
// } else if (results.bowType === 'olympic') {
//     fletching = 'feathers or vanes';
// } else {
//     fletching = 'vanes';
// };

// console.log(`We recommend ${fletching} for your arrow fletching type`);

// Determine arrow head type based on bow usage

// if (results.usage === 'target') {
//     arrowHead = 'bulletpoint';
// } else {
//     arrowHead = 'broadhead';
// };

// console.log(`You will be using a ${arrowHead} arrowhead`);

archerAssist.validateNumber = (validate) => {
    if (isNaN(validate) || validate < 1) {
        alert("Please enter a valid number");
    };
};

// Retrieve arrow spine

// Display poundage select options in increments of 5
archerAssist.displayPoundage = function () {
    for (i = 25; i < 84; i = i + 5) {
        $('select[name=poundage]').append(`<option value="${i}">${i}</option>`);
    };
};

// Change class of third question input tags to hide options based on second question
archerAssist.filterArrowMaterial = function () {
    if (results.bowType === 'compound' || results.bowType ==='olympic') { // if bow type is compound or olympic then hide wood arrow option

    } else { // if bow type is traditional then show all

    };

    // for (i = 25; i < 84; i = i + 5) {
    //     $('select[name=poundage]').append(`<option value="${i}">${i}</option>`);
    // };
};


// Initialize
archerAssist.init = () => {
    archerAssist.displayPoundage();
    archerAssist.getResult();
    // archerAssist.outputs();
};

// calls our init function on page load
$(function () {
    archerAssist.init();
});