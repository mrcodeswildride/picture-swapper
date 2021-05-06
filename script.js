let image1 = document.getElementById(`image1`)
let image2 = document.getElementById(`image2`)
let image3 = document.getElementById(`image3`)

let selectedImage

image1.addEventListener(`click`, clickImage)
image2.addEventListener(`click`, clickImage)
image3.addEventListener(`click`, clickImage)

function clickImage() {
  if (selectedImage == null) {
    selectedImage = this
    selectedImage.classList.add(`selected`)
  } else {
    let temp = selectedImage.src
    selectedImage.src = this.src
    this.src = temp

    selectedImage.classList.remove(`selected`)
    selectedImage = null
  }
}
