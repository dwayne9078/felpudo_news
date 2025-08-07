import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/config.js";

class Tokenizer {
  static createToken(payload, userId) {
    const token = jwt.sign(payload, JWT_SECRET, {
      issuer: "localhost",
      subject: `${userId}`,
      audience: "/api",
      expiresIn: "5m",
      notBefore: "2s",
    });

    return token;
  }

  static verifyToken(req, res, next) {
    const { access_token } = req.cookies;

    if (!access_token) {
      return res
        .status(401)
        .json({ message: "User not Authenticated", status: 401 });
    }

    jwt.verify(access_token, jwtSecret, (error, decoded) => {
      if (error) {
        console.error(error);

        let statusCode;
        let message;

        statusCode = 403;
        message = "Invalid Token";

        if (error.name === "TokenExpiredError") {
          statusCode = 401;
          message = "Token Expired";
        }
        return res
          .status(statusCode)
          .json({ message: message, status: statusCode });
      }

      req.user = {
        userId: decoded.sub,
        isAdmin: decoded.user.isAdmin,
      };
      next();
    });
  }
}

export default Tokenizer;
