const AftTmw = new Date();
  AftTmw.setDate(AftTmw.getDate()+2);
  

  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-')
  }
  
 export const jourPlus2 = convertDate(AftTmw);

 export const ojd = convertDate(new Date());


