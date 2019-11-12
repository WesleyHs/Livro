const livrosController = require('../models/livrosModels.js');

module.exports = {
  
  livrosMenu

}  

function livrosMenu(req, res) {
  res.render('livros/frm_livrosMenu.ejs', {
    title: 'Livros',
    empresa: 'Fatec Franca - Programação Script - WEB',
    rota: req.originalUrl
  });      
}

