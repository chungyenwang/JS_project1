const account = require('./account.js')//put gmail account in another js file
const filepath = './customer.xlsx'// filepath for email attachment
const readXlsxFile = require('read-excel-file/node');//import package of read excel file
//Put variable on top makes maintenance easier for the future
const schema = {    //to let excel read the row by these keys
  'name': {
    prop: '姓名',
    type: String},
  'job': {
    prop: '職業',
    type: String},
  'age': {
    prop: '年齡',
    type: String},
  'email': {
    prop: 'email',
    type: String},}

const send = require('gmail-send')({//import package of gmail-send
  user: account.user,
  pass: account.password,
  to:   account.user,
  subject: 'test subject' ,
});


readXlsxFile('customer.xlsx', { schema }).then((rows) => {
  console.log(rows['rows'])
})
////缺多筆資料用foreach判斷某一攔, 例如年齡或職業 if rows['年齡'] > 30 , 寄某信

///可將send包成function
// send({
//   files: [ filepath ],
//   text:    'gmail-send example 1',  
// }, (error, result, fullResult) => {
//   if (error) console.error(error);
//   console.log(result);
// })