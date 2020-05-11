
var aad = require('azure-ad-jwt');

var unauthorised = function (req,res) {
    res.status(401).send('unauthorised');
}
var auth = function (req, res, next) {
    const audience = '301c6b16-3e3d-4e80-b429-9a4123653b43';
    var token = req.headers['authorization'];
    if (token) {
        token = token.split('Bearer ')[1];
    } else {
        unauthorised(req, res);
    }
    if (token) {
        aad.verify(token, {audience: audience}, (err,result) => {
            console.log(err);
            if (result) {
                req.verified = true;
                next();
            } else {
                unauthorised(req, res);
            }
        });
    } else {
        unauthorised(req, res);
    }
}

module.exports = auth;
