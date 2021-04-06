module.exports = {
  future: {
    webpack5: true
  },
  async headers() {
    return [
      {
        source: "/.well-known/pki-validation/AB59D8989CBE68FAFC42C3509C6704D2",
        headers: [
          {
            key: "Content-Type",
            value: "text/html"
          }
        ]
      }
    ]
  }
}
