// Smooth scroll





// Create empty object to contain code

const archerAssist = {};

// Create data set for arrow spines
const archerAssist.arrows = {
    wood: [
            {
                length: 'Early Bird',
                poundage: '$$'
            }
        ],
    carbon: [
            {


            },
        ],
    aluminum: [
            {


            },
        ]
};

archerAssist.getResult = () => {
    $('form').on('submit', (e) => {
        // Prevent page from reloading
        e.preventDefault();

        
        // Create object with the input values
        const results = {
            armSpan:        Number($('input[name=armSpan]').val()),
            bowType:        $('input[name=bowType]:checked').val(),
            shaftMaterial:  $('input[name=shaftMaterial]:checked').val(),
            poundage:       Number($('select[name=poundage]').val()),
            usage:          $('input[name=usage]:checked').val()
        };

        // Testing object key value pairs
        console.log(results.armSpan, results.bowType, results.shaftMaterial, results.poundage, results.usage);
        // Return object to use in other functions

        // Conversions & Filters

        // Convert armSpan to drawLength
        const drawLength = (results.armSpan / 2.5);
        console.log(`Your draw length is ${drawLength}"`);

        // Determine bow height from armSpan
        if (drawLength <= 16) {
            bowHeight = 48;
        } else if (drawLength <= 20) {
            bowHeight = 54;
        } else if (drawLength <= 22) {
            bowHeight = 58;
        } else if (drawLength <= 24) {
            bowHeight = 62;
        } else if (drawLength <= 26) {
            bowHeight = 66;
        } else if (drawLength <= 28) {
            bowHeight = 68;
        } else if (drawLength <= 30) {
            bowHeight = 70;
        } else {
            bowHeight = 72;
        };

        console.log(`Your bow height is ${bowHeight}"`);

        // Filter arrow spine from arrow type, poundage, and draw length

        // Determine fletching type based on bow type

        if (results.bowType == 'traditional') {
            fletching = 'feathers';
        } else if (results.bowType == 'olympic') {
            fletching = 'feathers and vanes';
        } else {
            fletching = 'vanes';
        };

        console.log(`You can use ${fletching} for your arrow fletching type`);

        // Determine arrow head type based on bow usage

        if (results.usage == 'target') {
            arrowHead = 'bulletpoint';
        } else {
            arrowHead = 'broadhead';
        };

        console.log(`You will be using a ${arrowHead} arrowhead`);
    });

};

// Display poundage select options in increments of 5
archerAssist.displayPoundage = function () {
    for (i = 15; i < 61; i = i + 5) {
        $('select[name=poundage]').append(`<option value="${i}">${i}</option>`);
    };
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