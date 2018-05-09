// NOTE: All rows and columns in google sheet are indexed from 1. So first row or column no. will be 1 not 0.
function onEdit(e) {
    if (e) { 
        var ss = e.source.getActiveSheet();
        var r = e.source.getActiveRange(); 

        // If you want to be specific
        // do not work in first row
        // do not work in other sheets except "Production Deployment"
        if (r.getRow() != 1 && ss.getName() == "Production Deployment") {

            // E.g. staging column is 5th (E)
            var staging = ss.getRange(r.getRow(), 5).getValue();

            // E.g. completed column is 6th (F)
            var completed = ss.getRange(r.getRow(), 6).getValue();

            // Specify the range with which You want to highlight
            // with some reading of API you can easily modify the range selection properties
            // (e.g. to automatically select all columns)
            // getRange params: start-row, start-column, no-of-rows, no-of-columns
            var rowRange = ss.getRange(r.getRow(),1,1,6);

            // This changes row background color
            if (staging == true && completed == true) {
                rowRange.setBackground("#d9ead3"); // light green
            } else if (staging == true && completed == false) {
                rowRange.setBackground("#fff2cc"); // light yellow
            } else { 
                rowRange.setBackground("#ffffff"); // white
            }   
        }
    }
}
