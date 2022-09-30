document.addEventListener('DOMContentLoaded', () => {
  console.log(1)
  window.addEventListener('scroll', function () {
    if (pageYOffset != 0) {
      document.querySelector('header').classList.add('__closed')
    } else {
      document.querySelector('header').classList.remove('__closed')
    }
  })
})

