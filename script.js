page = 1
totalimage = 0
loadimage = 0
apikey = `95qVIM-w2fSzWIDWyV2EnuS1csTeGQDuWk1Vz0EMhi0`

function scrollfunc () {
  loadimage++
  if (loadimage === totalimage) {
    loadimage = 0
    page++
  }
}

const func = async () => {
  apiURL = `https://api.unsplash.com/photos/?client_id=${apikey}&page=${page}`
  let res = await fetch(apiURL)
  let data = await res.json()
  totalimage = data.length
  let div = document.createElement('div')
  div.style.display="flex"
  div.style.flexWrap="wrap"
  div.style.justifyContent="center"
  div.style.alignContent="center"
  document.body.append(div)

  for (let i of data) {
    let image = document.createElement('img')
    image.setAttribute('src', i.urls.thumb)
    image.style.width = '300px'
    image.style.height = '300px'
    image.style.margin = '3px'
    image.addEventListener('load', scrollfunc)
    div.append(image)
  }
}
func()

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
    func()
  }
})
