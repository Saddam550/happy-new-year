// console.clear()
function happ() {
  var cound = 500
  var section = document.querySelector('section')
  var i = 0
  while (i < cound) {
    var ster = document.createElement('i')

    var x = Math.floor(Math.random() * window.innerWidth)
    var n = Math.floor(Math.random() * window.innerHeight)

    var size = Math.random() * 4
    ster.style.left = x + 'px'
    ster.style.top = n + 'px'
    ster.style.width = 1 + size + 'px'
    ster.style.height = 1 + size + 'px'
    ster.style.position = 'absolute'

    var anima = Math.random() * 2
    ster.style.animationDuration = 2 + anima + 's'
    ster.style.animationDuration = 2 + anima + 's'
    section.appendChild(ster)
    ster.classList.add('star')

    i++
  }
}

// happ()
// var toggle = document.querySelector('.toggle')
// function togglef() {
//   document.querySelector('.container').classList.toggle('microsoft')
// }
// toggle.addEventListener('click', togglef(), false)
function showTime() {
  var date = new Date()
  var d = date.getDate()
  var y = date.getFullYear()
  var h = date.getHours() // 0 - 23
  var m = date.getMinutes() // 0 - 59
  var s = date.getSeconds() // 0 - 59

  var session = 'AM'

  if (h == 0) {
    h = 12
  }

  if (h > 12) {
    h = h - 12
    session = 'PM'
  }

  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  function getMunthDay(munth, year) {
    return new Date(munth, year, 0).getDate()
  }
  var getNewYearDay = getMunthDay(d, y)
  var getDayCount = getNewYearDay - d

  var time =
    getDayCount +
    ' Days ' +
    h +
    ' Hrs ' +
    m +
    ' Min ' +
    s +
    ' ' +
    session +
    ' Sec Earliar'
  document.getElementById('MyClockDisplay').innerText = time
  document.getElementById('MyClockDisplay').textContent = time

  setTimeout(showTime, 1000)
}

showTime()

// googleTranslateElementInit

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  )
}

// sendUserName
var send_name = document.querySelector('.send_name')
var send_names = document.querySelector('.send_names')
var userGetName = document.querySelector('.userBox')

function sendUserName() {
  var userValue = userGetName.value
  console.log(userValue)
  if (userValue < 1) {
    send_name.innerHTML = 'Saddam'
    send_names.innerHTML = 'Saddam'
  } else {
    send_name.innerHTML = userValue
    send_names.innerHTML = userValue
  }

  const speechSynth = window.speechSynthesis
  var voiceText = 'happy new year' + userValue

  if (!speechSynth.speaking && voiceText.trim().length) {
    const newUtter = new SpeechSynthesisUtterance(voiceText)
    speechSynth.speak(newUtter)
    // console.log(voiceText)
  }
}

window.addEventListener('load', function promtvoice() {
  var pValue = prompt('type favorite name  only English')
  send_name.innerHTML = pValue
  send_names.innerHTML = pValue

  const speechSynth = window.speechSynthesis
  var voiceTexts = 'happy new year' + pValue

  if (!speechSynth.speaking && voiceTexts.trim().length) {
    const newUtters = new SpeechSynthesisUtterance(voiceTexts)
    speechSynth.speak(newUtters)
  }
})

// crate happy new years + user name end

// facebook share buton start
function shareOnFacebook() {
  var href = document.location.href
  var fbLink = 'https://www.facebook.com/sharer/sharer.php?u=' + href
  window.open(fbLink, 'facebook-share-dialog', 'width=626,height=436')
}

window.addEventListener('load', function () {
  let myaudio = document.getElementById('myaudio')
  // audio play start
  myaudio.volume = 0.1
  // audio play end
  myaudio.start
})
