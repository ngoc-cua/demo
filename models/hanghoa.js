var db = require('mongoose')
db.connect('mongodb://127.0.0.1:27017/quanlymathang')
var hanghoaSchema = db.Schema({
    name: String,
    price:Number
})
var hanghoa = db.model('hanghoa', hanghoaSchema)
module.exports=hanghoa