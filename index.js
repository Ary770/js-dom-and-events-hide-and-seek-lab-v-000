function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li')

  for (const element of list) {
    element.innerHTML = parseInt(element.innerHTML) + n
  }
}
