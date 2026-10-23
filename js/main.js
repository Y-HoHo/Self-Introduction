const darkBtnEl = document.querySelector('.darkbtn')
darkBtnEl.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    darkBtnEl.textContent = '라이트모드'
  }else {
    darkBtnEl.textContent = '다크모드'
  }
})

