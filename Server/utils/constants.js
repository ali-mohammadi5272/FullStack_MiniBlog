const configs = {
  db: {
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
  },
  tokens: {
    accessToken: {
      secretKey: process.env.ACCESS_TOKEN_SECRET,
      expireIn: process.env.ACCESS_TOKEN_EXPIRE,
    },
    refreshToken: {
      secretKey: process.env.REFRESH_TOKEN_SECRET,
      expireIn: process.env.REFRESH_TOKEN_EXPIRE,
    },
  },
  port: +process.env.PORT,
};

module.exports = { configs };
