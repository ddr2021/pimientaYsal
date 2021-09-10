const fs = require('fs');
const path = require('path');

module.exports = {
    index: (req, res) => {
        return res.render('index', {
            title: 'Pimienta y sal',
            menu: JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'menu.json'), 'utf-8'))

        });
    },

}