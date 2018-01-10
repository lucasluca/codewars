function printerError(s) {

    var totalString = s.length;

    var totalCorrect = s.match(/[a-m]+/g).join("").length;

    var totalError = totalString - totalCorrect;

    var errorLog = `${totalError}/${totalString}`;

    console.log(errorLog);
    
    return errorLog;
    
    }

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz");

/*

function printerError(s) {
    
    var regex = /[a-m]+/g;

    var totalString = s.length;

    var received = s;

    var arrayResut = received.match(regex);

    var totalStringCorrect = arrayResut.join("");

    var totalStringNumber = totalStringCorrect.length;

    console.log(totalString);

    console.log(totalStringNumber);

    var totalError = totalString - totalStringNumber;

    console.log(totalError);

    console.log(`${totalError}/${totalString}`)
    
    //return errorLog;
    
    }

    */