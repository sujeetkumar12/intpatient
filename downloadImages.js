;(function () {
  // Get all image elements on the page
  const images = document.querySelectorAll('img')

  // Loop over all the images and download each one
  images.forEach((img, index) => {
    // Get the image URL (src attribute)
    const imgUrl = img.src

    // Create an anchor element
    const link = document.createElement('a')
    link.href = imgUrl

    // Give the file a name (using the image's URL or index)
    link.download = imgUrl.split('/').pop() || `image${index + 1}.jpg`

    // Trigger the download by programmatically clicking the link
    link.click()
  })
})()
