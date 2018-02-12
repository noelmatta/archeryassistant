// Create empty object to contain code
const archerAssist = {};

// Create data set for arrow spines
archerAssist.arrows = {
    wood: { // data taken from http://tradbow.com/wood-arrow-spine/ 
        24: { // draw length in inches
            44: 'less than 30', // poundage key and corresponding spine measurement value
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
    },
    carbon: { // data taken from http://www.oldworldarchery.com/how-to-select-the-correct-arrows-for-your-traditional-recurve
        24: { // draw length in inches
            56: 600, // poundage key and corresponding spine measurement value
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
    },
    aluminum: { // data taken from http://tradgang.com/cgi-bin/ultimatebb.cgi?ubb=get_topic;f=1;t=085830
        24: { // draw length in inches
            30: 1516, // poundage key and corresponding spine measurement value
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
};


// Collect results to use in outputs function
archerAssist.results = {
    armSpan: '',
    bowType: '',
    shaftMaterial: '',
    poundage: '',
    usage: ''
};

// Gets input values to return to the results object
archerAssist.getResult = () => {
    $('form').on('submit', function(e) {
        // Prevent page from reloading
        e.preventDefault();

        scrollToLocation = function(location) {
            document.querySelector(location).scrollIntoView({
                behavior: 'smooth'
            });
        };

        if (($(this).attr('id') === 'intro')) {
            scrollToLocation('.setup');
        } else if ($(this).attr('id') === 'prereq') {
            scrollToLocation('.armSpan');
        } else if ($(this).attr('id') === 'firstInput') {
            const armSpan = Number($('input[name=armSpan]').val());
            archerAssist.validateNumber(armSpan);
            if (armSpan >= 60) {
                scrollToLocation('.bowType');
            };
            $('input[name=armSpan').val('');
            return archerAssist.results['armSpan'] = armSpan;
        } else if ($(this).attr('id') === 'secondInput') {
            const bowType = $('input[name=bowType]:checked').val();
            scrollToLocation('.shaftMaterial');
            return archerAssist.results['bowType'] = bowType;
        } else if ($(this).attr('id') === 'thirdInput') {
            const shaftMaterial = $('input[name=shaftMaterial]:checked').val();
            scrollToLocation('.poundage');
            return archerAssist.results['shaftMaterial'] = shaftMaterial;
        } else if ($(this).attr('id') === 'fourthInput') {
            const poundage = Number($('select[name=poundage]').val());
            scrollToLocation('.usage');
            return archerAssist.results['poundage'] = poundage;
        } else if ($(this).attr('id') === 'fifthInput') {
            const usage = $('input[name=usage]:checked').val();
            scrollToLocation('.showMe');
            return archerAssist.results['usage'] = usage;
        };
    });    
};

// Outputs final equipment recommendations
archerAssist.outputs = function() {
    $('#outputs').on('click', function (e) {
        // Prevent page from reloading
        e.preventDefault();
        
        drawLength = archerAssist.getDrawLength(archerAssist.results['armSpan']);
        finalArmSpan = archerAssist.results['armSpan'];
        bowHeight = archerAssist.getBowHeight(drawLength);
        finalBowType = archerAssist.results['bowType'];
        fletching = archerAssist.getFletching(archerAssist.results['bowType']);
        shaftMaterial = archerAssist.results['shaftMaterial'];
        arrowHead = archerAssist.getArrowHead(archerAssist.results['usage']);
        poundage = archerAssist.results['poundage'];
        finalUsage = archerAssist.results['usage'];
        spine = archerAssist.getSpine(shaftMaterial, drawLength, poundage);

        document.querySelector('.finalResults').scrollIntoView({
            behavior: 'smooth'
        });
        
        // Outputs final results in footer section of page
        $('.finalResults').append(`<p class="summary">You should buy a bow of <span class="dynamic">${finalBowType}</span> type with a height of <span class="dynamic">${bowHeight}"</span> and draw weight of <span class="dynamic">#${poundage}</span>.</p><p class="summary">Your arm span is <span class="dynamic">${finalArmSpan}"</span> so your <span class="dynamic">${shaftMaterial}</span> arrows should be cut with a draw length of <span class="dynamic">${drawLength}"</span> and <span class="dynamic">${spine}</span> spine rating with <span class="dynamic">${fletching}</span> for fletchings.</p><p class="summary">Also, you will be using <span class="dynamic">${arrowHead}</span> tips for <span class="dynamic">${finalUsage}</span> purposes!</p>`);
    });
};
    

// Match to the closest key value integer in an object, modified from https://stackoverflow.com/questions/43056837/find-closest-integer-in-object
archerAssist.getClosestInteger = (items, target) => {
    let closestVal = Infinity;
    let closestObj = null;

    for (let key in items) {
        let obj = parseInt(key);
        let curDiff = Math.abs(obj - target);

        if (curDiff < closestVal) {
            closestVal = curDiff;
            closestObj = obj;
        }
    };
    return closestObj;
};
    
// Filter arrow spine from arrow type, poundage, and draw length
archerAssist.getSpine = (shaftMaterial, drawLength, poundage) => {

    // Get variables first for filters
    const tempDrawLength = Math.round(drawLength);
    const tempArrowData = archerAssist.arrows[shaftMaterial][tempDrawLength];
    const tempPoundage = archerAssist.getClosestInteger(tempArrowData, tempDrawLength);

    // Use variables to filter through data and pass spine strength value to spine
    return spine = archerAssist.arrows[shaftMaterial][tempDrawLength][tempPoundage];
};
    
// Convert armSpan to drawLength
archerAssist.getDrawLength = (armSpan) => {
    return drawLength = Math.round((armSpan / 2.5) * 2) / 2; // Draw length is arm span divided by 2.5 then rounded up to nearest 0.5
};

// Determine fletching type based on bow type
archerAssist.getFletching = (bowType) => {
    if (bowType === 'traditional') {
        return fletching = 'feathers';
    } else if (bowType === 'olympic') {
        return fletching = 'feathers or vanes';
    } else {
        return fletching = 'vanes';
    };
};

// Determine bow height from armSpan, data taken from http://www.learn-archery.com/proper-bow-size.html
archerAssist.getBowHeight = (drawLength) => {
    if (drawLength <= 16) {
        return bowHeight = 48;
    } else if (drawLength <= 20) {
        return bowHeight = 54;
    } else if (drawLength <= 22) {
        return bowHeight = 58;
    } else if (drawLength <= 24) {
        return bowHeight = 62;
    } else if (drawLength <= 26) {
        return bowHeight = 66;
    } else if (drawLength <= 28) {
        return bowHeight = 68;
    } else if (drawLength <= 30) {
        return bowHeight = 70;
    } else {
        return bowHeight = 72;
    };
};

// Determine arrow head type based on bow usage
archerAssist.getArrowHead = (usage) => {
    if (usage === 'target') {
        return arrowHead = 'bulletpoint';
    } else {
        return arrowHead = 'broadhead';
    };
};

// Determine if user inputs a valid number
archerAssist.validateNumber = (validate) => {
    // Currently only accepts arm spans longer than 55, as there is no data available for children sizes.
    if (isNaN(validate) || validate < 60) {
        alert("Please enter an arm span longer than 59");
    };
};

// Display poundage select options in increments of 5
archerAssist.displayPoundage = function () {
    for (i = 25; i < 84; i = i + 5) {
        $('select[name=poundage]').append(`<option value="${i}">${i}</option>`);
    };
};

// Initialize
archerAssist.init = () => {
    archerAssist.displayPoundage();
    archerAssist.getResult();
    archerAssist.outputs();
};

// calls our init function on page load
$(function () {
    archerAssist.init();
    
});