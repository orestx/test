var clients = {
    "id": 1,
    "fname": "Иван",
    "lname": "Иванов",
    "email": "ivanov@mail.ua",
    "pay_system": ["QIWI", "Webmoney"],
    "type_of_company": "ЧП",
    "number_Qiwi": "380436737565",
    "address": "Мой милый дом",
    "spep": "49605346",
    "inn": "439056839478397",
    "vad": false
};















var jsonString = JSON.stringify( clients );
function test_json () {
var res = JSON.parse(jsonString)
alert (res.fname);
}