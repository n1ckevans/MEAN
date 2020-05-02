const Quote = require('mongoose').model('Quote');

module.exports = {
  index(_, res) {
    Quote.find()
      .then(allQuotes => res.render('index', { quotes: allQuotes }))
      .catch(err => {
        console.log(err);

        res.render('index', { quotes: [] })
      });
  },
  create(req, res) {
      Quote.create(req.body)
        .catch(err => console.log(err))
        .finally(() => res.redirect('/'));
  },

}