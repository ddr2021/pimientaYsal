const fs = require('fs');
const path = require('path');

module.exports = {
    detalleMenu: (req, res) => {
        let detalleMenu = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'detalleMenu.json'), 'utf-8'));
        return res.render('detalleMenu', {
            title: 'Detalle del plato',
            IDdish: detalleMenu.find(IDdish => IDdish.id === +req.params.id),
        })

    }


}