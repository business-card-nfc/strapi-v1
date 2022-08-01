module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f78bc3af3f8a4a5ac425a08c452144fe'),
  },
});
