// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(' ')[1];
//     // jwt.verify(token, process.env.JWT_SECRET);
//     jwt.verify(token, 'TU_SECRET_KEY');
//     next();
//   } catch (error) {
//     // En lugar de redirigir, envía un estado y mensaje específico
//     res.status(401).json({ redirect: true, message: 'Autenticación fallida' });
//   }
// };

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // Verificar el token usando la clave secreta de las variables de entorno
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ redirect: true, message: 'Autenticación fallida' });
  }
};
