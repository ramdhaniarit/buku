const { Buku } = require("../models/index");

class Controller {
  static listbuku = async (req, res, next) => {
    try {
      let data = await Buku.findAll();
      res.status(200).json(data);
    } catch (error) {
      //   next(error);
      console.log(error);
    }
  };

  static create = async (req, res, next) => {
    try {
        const {name, price} = req.body;
        
        const data = await Buku.create({
            name,
            price
            
        })

        res.status(201).json(data);
    } catch(err) {
        next(err);
    }
}

static destroy = async (req, res, next) => {
    try {
        const {id} = req.params;

        const data = await Buku.update({
            status: "inactive"
        }, {
            where: {
                id
            }
        })

        if(data[0] === 1) {
            res.status(200).json({
                message: "Delete successfully"
            })
        } else {
            throw {name: "ErrorNotFound"}
        }

    } catch(err) {
        next(err)
    }
}


}

module.exports = Controller;