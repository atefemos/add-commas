const faNums = "۰۱۲۳۴۵۶۷۸۹";
const arNums = "٠١٢٣٤٥٦٧٨٩";

/** digitsEnToFa
 *
 *  Description: Takes a string made of English digits only, and
 *  returns a string that represents the same number but with
 *  Persian digits
 *
 */
function digitsEnToFa(str) {
  if (!str) return;

  str = str.toString();
  for (let i = 0; i < 10; i++) {
    let replaceEntoFa = new RegExp("" + i, "g");
    str = str.toString().replace(replaceEntoFa, faNums[i]);
  }

  return str;
}

/**
 * @param {string}
 * @return {boolean}
 */
const isPersian = (str) => {
  if (!str) return;

  const letters = [];
  for (let i = 0; i <= str.length; i++) {
    letters[i] = str.substring(i - 1, i);
    if (letters[i].charCodeAt() > 255) {
      return true;
    }
  }
  return false;
};

/**
 * Add Commas into number
 * @method addCommas
 * @param   {Number}  number [Number, like: 300000]
 * @return  {String}  		 [Returned String, like: 30,000]
 */
module.exports = function addCommas(number) {
  if (!number) return;

  number = "" + number;
  number = isPersian(number) ? digitsFaToEn(number) : number;

  // return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // return number.toString().replace(/\d(?=(?:\d{3})+$)/g, '$&,')
  return number.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1" + ",");
};
