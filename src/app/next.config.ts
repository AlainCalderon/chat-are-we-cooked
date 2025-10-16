module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/chat',
        destination: process.env.OLLAMA_CHAT,
      },
      {
        source: '/api/generate',
        destination:process.env.OLLAMA_STREAM
      }
    ]
  },
}