const config = require("config");
const jwt = require("jsonwebtoken");

// Whenever we want a private route, add this middleware as second parameter in the endpoint
function auth(req, res, next) {
  const token = req.header("x-auth-token");

  //check for token
  if (!token) res.status(401).json({ msg: "No token, authorization denied." })
  
  try {
 // Verify token
 const decoded = jwt.verify(token, config.jwtSecretKey)

 // Take user id from token and put it into req.user. When token is sent, we have that user stores in the request value
 req.user = decoded;
 next();
  } catch(exception) {
    // bad request
    res.status(400).json({ msg: "Token is not valid." })
  }
}

module.exports = auth;