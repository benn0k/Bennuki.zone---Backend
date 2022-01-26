module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '53c36320f31f155438acaa7de94f731d'),
  },
});
