const City = require('../models/cityModel');

exports.create = function create(req,res) {
    // console.log(req.body.city)
  let item = {
    city: req.body.city
  };
  let newCity = new City(item)
  newCity.save();
}

exports.list = function list(req,res) {
  City.find((e,v)=>{
    return res.json(v);
  });
}

exports.show = function show(req, res) {
  City.findById(req.params.id, (err,v)=>{
      return res.json(v);
  });
}