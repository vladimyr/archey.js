module.exports = humanSize;

var mags = ' KMGTPEZY';

function humanSize(bytes, base, precision) {
  if (base === undefined) base = 1024;
  if (precision === undefined) precision = 2;
  var magnitude = Math.min(Math.log(bytes) / Math.log(base) | 0, mags.length - 1);
  var result = bytes / Math.pow(base, magnitude);
  var suffix = mags[magnitude].trim() + 'B';
  return result.toFixed(precision) + suffix;
}
