module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.markdown',
    './*.html',
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      boxShadow: {
        bigInner: 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: []
}
