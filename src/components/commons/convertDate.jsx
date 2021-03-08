const AftTmw = new Date();
AftTmw.setDate(AftTmw.getDate() + 2);

const findLastYear = new Date();
findLastYear.setDate(findLastYear.getDate()-365);

const find3YearsAgo = new Date();
find3YearsAgo.setDate(findLastYear.getDate()-1095);

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join("-");
}

function convertDate2(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1),d.getFullYear()].join("/");
}

export function displayDate(inputFormat){
  return inputFormat.split("").slice(0,9).join("");
}

export function apiDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return `${[d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join("-")}T07:59:10.788Z`;
}

export const jourPlus2 = convertDate(AftTmw);

export const ojd = convertDate(new Date());

export const lastYear = convertDate2(findLastYear);

export const years3ago = convertDate2(find3YearsAgo);
