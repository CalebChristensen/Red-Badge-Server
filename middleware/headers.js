module.exports = (req, res, next) => {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Amz-Date, X-Api-Key', 'Access-Control-Request-Method', 'Access-Control-Request-Headers')

  next()
}