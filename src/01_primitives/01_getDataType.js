/**
 * Returns the data type of the given variable.
 *
 * @param {*} variable - The variable whose data type is to be determined.
 * @returns {string} - The data type of the variable.
 */
function getDataType(variable) {
  if (variable === null) {
    return "object";
  } else {
    return typeof variable;
  }
}

module.exports = getDataType;
