module.exports = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/my-tasks',
        permanent: true,
      },
      {
        source: '/',
        destination: '/dashboard/my-tasks',
        permanent: true,
      },
    ]
  },
   images: {
    domains: ['lh3.googleusercontent.com'],
  },
}