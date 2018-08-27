function spinalCase(str) {
  let regex = /(([A-Z])?[a-z]+)/g;
  let str1 = str.match(regex).join('-').toLowerCase()
  return str1
}