const printDate = function () {
    var today = new Date()
    var date = today.getDate()
    console.log(date);

}

const printMonth = function () {
    const months = ["January","February","March","April","May","June","July","August","September",
                            "october", "november","december"]
    var today = new Date();
    var month = today.getMonth(); // Returns 5
    console.log(months[month]); 

}

const getBatchInfo = function () {
    console.log("Radon W3D3, the topic for today is Nodejs Module System")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo