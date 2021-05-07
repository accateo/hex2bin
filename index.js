module.exports = function hex2bin(hex) {
  return (parseInt(hex, 16).toString(2)).padStart(8, '0');
};
