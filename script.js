let image1 = document.getElementById(`image1`)
let image2 = document.getElementById(`image2`)
let image3 = document.getElementById(`image3`)
let image4 = document.getElementById(`image4`)
let image5 = document.getElementById(`image5`)
let image6 = document.getElementById(`image6`)
let image7 = document.getElementById(`image7`)
let image8 = document.getElementById(`image8`)

let selectedImage

image1.addEventListener(`click`, clickImage)
image2.addEventListener(`click`, clickImage)
image3.addEventListener(`click`, clickImage)
image4.addEventListener(`click`, clickImage)
image5.addEventListener(`click`, clickImage)
image6.addEventListener(`click`, clickImage)
image7.addEventListener(`click`, clickImage)
image8.addEventListener(`click`, clickImage)

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
