const concatName = function (last, first) {
  if (!last || !first) {
    throw new Error('missing parameter to concatName')
  }
  return last + '^' + first
}

module.exports = {
  concatName: concatName
}
