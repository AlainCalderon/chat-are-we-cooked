module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/chat',
        destination: process.env.OLLAMA_HOST,
      },
    ]
  },
}