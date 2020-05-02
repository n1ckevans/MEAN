// const mongoose = require('mongoose');

// const Ninja = mongoose.model('Ninja');

// module.exports = {
//   index(req, res) {
//     Ninja.find()
//       .then(allNinjas => res.jeson({
//         ninjas: allNinjas
//       }))
//       .catch(err => {
//         res.json({ error: err });
//       });
//   },
//   create(req, res) {
//     Ninja.create(req.body)
//       .then(newNinja => {
//         res.json({ ninja: newNinja });
//       })
//       .catch(err => {
//         res.json({ error: err });
//       });
//   },

//   update(req, res) {
//     Ninja.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         runValidators: true,
//         // will return the new updated obj rather than
//         // the object before the update
//         new: true
//       }
//     )
//     .then(newNinja => {
//       res.json({ ninja: newNinja });
//     })
//     .catch(err => {
//       res.json({ error: err });
//     });
//   },

//   getById(req, res) {
//     Ninja.findById(req.params.taskId)
//       .then(ninja => {
//         res.json({ ninja: ninja });
//       })
//       .catch(err => {
//         res.json({ error: err });
//       });
//   },

//   delete(req, res) {
//     Ninja.findByIdAndDelete(req.params.id)
//       .then(deletedNinja => {
//         res.json({ ninja: deletedNinja });
//       })
//       .catch(err => {
//         res.json({ error: err });
//       });
//   }

// }