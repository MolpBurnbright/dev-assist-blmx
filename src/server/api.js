'use strict';

var accountCtrl = require('./controllers/account.controller')();

module.exports = (express) => {

    var api = express.Router();

    api.post('/account', accountCtrl.createAccount);
    api.get('/template', accountCtrl.getTemplates);
    api.post('/df_hook', accountCtrl.dialogHook);

    return api;
};