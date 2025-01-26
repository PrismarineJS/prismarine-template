if (typeof process !== 'undefined' && parseInt(process.versions.node.split('.')[0]) < 18) {
  console.error('Your node version is currently', process.versions.node)
  console.error('Please update it to a version >= 22.x.x from https://nodejs.org/')
  process.exit(1)
}

module.exports.helloWorld = function () {
  console.log('Hello world !')
}
