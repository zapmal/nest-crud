module.exports = {
  rewrites: () => [
    {
      source: '/api/:path',
      destination: 'http://localhost:4000/api/:path',
    },
  ],
};
