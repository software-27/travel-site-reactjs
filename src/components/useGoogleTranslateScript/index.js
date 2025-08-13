export const setCookie = (cName, cValue, exDays) => {
    let d = new Date(),
      expires = exDays;
  
    if (typeof exDays === 'number') {
      d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
      expires = 'expires=' + d.toUTCString();
    }
  
    document.cookie = cName + '=' + cValue + ';' + expires + ';path=/';
  };