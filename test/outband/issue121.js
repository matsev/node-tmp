/* eslint-disable no-octal */
// vim: expandtab:ts=2:sw=2

const
  tmp = require('../../lib/tmp');

// https://github.com/raszi/node-tmp/issues/121
module.exports = function () {

  tmp.setGracefulCleanup();

  const result = tmp.dirSync({ unsafeCleanup: true });

  this.out(result.name, function () { });

  setTimeout(function () {
    throw new Error('ran into timeout');
  }, 10000);
};
