var src = [
    {"year" : 2015, "month" : "JAN", "value" : 0},
    {"year" : 2015, "month" : "FEB", "value" : 0},
    {"year" : 2015, "month" : "MAR", "value" : 0},
    {"year" : 2014, "month" : "JAN", "value" : 0},
    {"year" : 2014, "month" : "FEB", "value" : 0},
    {"year" : 2014, "month" : "MAR", "value" : 0}
  ];

var newRecord = {
    "year": 2017,
    "month": "MAY",
    "value": 2.33
};

function updateJSON(src, newRecord) {
    flag = false;
    for (var z = 0; z < src.length; z++) {
        if(src[z].year==newRecord.year && src[z].month==newRecord.month){
            src[z].value= newRecord.value;
            flag = flag || true;
        } else { 
            flag = flag || false;
        }
    }
    if (!flag){
        src.push(newRecord)
    }
    return src;
}
src = updateJSON(src, newRecord);
console.log("src",src);
var now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
console.log(now);