import "dotenv/config";

export default {
  jwt: {
    secret: String(process.env.SECRET),
  },
};
