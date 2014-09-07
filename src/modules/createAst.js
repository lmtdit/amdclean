// createAst.js
// ============
// Returns an AST (Abstract Syntax Tree) that is generated by Esprima

define([
  'errorMsgs',
  'utils',
], function(
  errorMsgs,
  utils
) {
  return function createAst(providedCode) {
    var amdclean = this,
      options = amdclean.options,
      filePath = options.filePath,
      code = providedCode || options.code || (filePath ? utils.readFile(filePath) : ''),
      esprimaOptions = options.esprima;

    if (!code) {
      throw new Error(errorMsgs.emptyCode);
    } else {
      if (!_.isPlainObject(esprima) || !_.isFunction(esprima.parse)) {
        throw new Error(errorMsgs.esprima);
      }
      return esprima.parse(code, esprimaOptions);
    }
  };
});