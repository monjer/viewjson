const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  // sassOptions: {
  //   includePaths: [
  //     path.join(__dirname, 'styles'),
  //     path.join(__dirname, 'slots'),
  //     path.join(__dirname, 'components')
  //   ],
  // },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig