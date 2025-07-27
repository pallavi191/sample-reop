
module.exports.jwtAuth = function (req, res, next) {
    var token = req.cookies && req.cookies.accessToken;
    var api_key =  req.query.api_key || req.headers["x-api-key"] || (req.cookies && req.cookies.api_key);
    if (token) {
        try {
              var decoded = jwt.verify(token, process.env.JwT);
              if (decoded.exp <= new Date().getTime())
                  res.status(401).end('token_expired')
              else {
                  req.AuthUser = decoded.data;
                  return next()
              }
        } catch (err) {
            res.status(401).json({ error: 'invalid_token', message: "Unauthorized: Access is denied due to invalid credentials, Please try to login again." }).end();
        }
    } else {
        res.status(401).json({ error: 'invalid_token', message: "Unauthorized: Access is denied due to invalid credentials, Please try to login again." }).end();
    }
}

