
function csvToJson(csvString) {

    let csvContent = csvString.split('\n')
    csvList = csvContent.shift();
    csvListArray = csvList.split(',');


    let output = [];
    csvContent.forEach(csvElement => {
        let obj = {};
        eachCsvElement = csvElement.split(',');
        csvListArray.forEach((csvListItem, i) => {

            obj[csvListItem.trim()] = eachCsvElement[i].trim();
        });
        output.push(obj)
    });
    return output;

}




module.exports = csvToJson;