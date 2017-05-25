var mongoData = require('./monListData.js');

mongoData.personList(function (res) {
    console.log('res', res);
})