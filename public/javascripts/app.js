var hint = document.getElementById('hint')
var showhint = document.getElementById('showhint')

console.log('hint', hint)

if (hint) {
  hint.addEventListener('click', function (e) {
    showhint.className = 'hinty'
  })  
}
