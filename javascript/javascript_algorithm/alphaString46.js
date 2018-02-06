function alpha(s) {
  if (s.length >= 4 && s.length <= 6) {
    var result = isNaN(s);
    if (!result) return true;
    else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(alpha('1234'))
