const account = require('./account.js')
// const readXlsxFile = require('read-excel-file/node');

// const schema = {
//   'name': {
//     prop: '姓名',
//     type: String
//   },
//   'job': {
//     prop: '職業',
//     type: String
//   },
//   'age': {
//     prop: '年齡',
//     type: String
//   },
//   'email': {
//     prop: 'email',
//     type: String
//   },
// }

// readXlsxFile('customer.xlsx', { schema }).then((rows) => {

//   console.log(rows['rows'])
// })



//import package of gmail-send

const filepath = './customer.xlsx'

const send = require('gmail-send')({
  user: account.user,
  pass: account.password,
  to:   'b9902032@gmail.com',
  subject: 'test subject' ,
});

send({
  files: [ filepath ],
  text:    'gmail-send example 1',  
}, (error, result, fullResult) => {
  if (error) console.error(error);
  console.log(result);
})