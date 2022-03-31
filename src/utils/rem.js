const baseWidth = 375
const baseSize = 50
function setHtmlFontSize () {
  const widthWidth = window.innerWidth
  document.querySelector('html').style.fontSize = widthWidth / baseWidth * baseSize + 'px'
}
setHtmlFontSize()
window.addEventListener('resize', setHtmlFontSize)
