const sharp = require('sharp')
const coordinates = require("./coordinates.json")

const inputs = coordinates.map(coordinate => ({
  input: __dirname + '/images/' + coordinate.imageId,
  top: (coordinate.y * 10),
  left: (coordinate.x * 10)
}))

console.log(inputs)

async function main() {

  await new Promise((resolve) => {
    sharp(inputs[0].input)
      .resize(100, 100)
      .composite(inputs)
      .toFile('output.png', function (err) {
        console.log('err', err)
        // output.jpg is a 300 pixels wide and 200 pixels high image
        // containing a scaled and cropped version of input.jpg

        console.log('done.')
        resolve()
      });
  })
}

main()