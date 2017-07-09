module.exports.generateMessage = (from, text) => {
  return {from:from, text:text, createdAt:new Date().getTime()};
}
