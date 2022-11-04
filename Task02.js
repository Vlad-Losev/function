'use strict'

const str = prompt();

const modifiedString = (str) => {
  return alert(str.charAt(0).toUpperCase() + str.toLowerCase(1));
}

modifiedString(str);