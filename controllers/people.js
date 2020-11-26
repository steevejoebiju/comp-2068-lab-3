const People = require('../models/person');

exports.documentation = (req, res) => {
    res.status(200).json([
      {
        path: '/people',
        description: 'An array of 4 people objects.'
      },
      {
        path: '/people/:id',
        description: 'Returns a person with the passed ID'
      }
    ]);
  };


  exports.index = async (req, res, next) => {
    try {
        const people = await People.find();
        res.status(200).json(people);
    } catch (error) {
        next(error);
    }
};


  exports.show = async (req, res, next) => {
    try {
      const person = await People.findById(req.params.id);
      res.status(200).json(person);
    } catch (error) {
      next(error);
    }
  };