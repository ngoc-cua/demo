var express = require('express');
var router = express.Router();
var hanghoa = require('../models/hanghoa');
//localhost:3000
// router.get('/', function(req, res, next) {
//  hanghoa.find({})
//     .then(dshh => res.render('xemhh.ejs', { dshh }))
//     .catch(err => console.log('Không xem được'))
// });
//localhost:3000/them
router.get('/them', function(req, res, next) {
  res.render('themhh.ejs');
});

router.post('/them', function(req, res, next) {
  var hh = new hanghoa({
    name: req.body.txtTen,
    price:req.body.txtGia
  })
  hh.save()
    .then(kq => res.redirect('/them'))
    .catch(err => console.log('không thêm được'))
});
//localhost:3000/sua
router.get('/sua', function(req, res, next) {
  res.render('suahh.ejs');
});
router.post('/sua', function(req, res, next) {
  hanghoa.findOne({
    name:req.body.txtTen
  })
    .then(hh => {
      hh.price = req.body.txtGia
      hh.save()
        .then(kq => res.redirect('/sua'))
        .catch(err => console.log('Không sửa được'))
    })
    .catch(err => console.log('Không tìm thấy'))
});
//localhost:3000/xoa
router.get('/xoa', function(req, res, next) {
  res.render('xoahh.ejs');
});
router.post('/xoa', function (req, res, next) {
  hanghoa.deleteOne({ name: req.body.txtTen })
    .then(kq => res.redirect('/xoa'))
    .catch(err => console.log('Không xóa được'))
});

// //localhost:3000/xem
router.get('/', function (req, res, next) {
  hanghoa.find({})
    .then(dshh => res.render('index.ejs', { dshh }))
    .catch(err => console.log('Không xem được'))
});


module.exports = router;
