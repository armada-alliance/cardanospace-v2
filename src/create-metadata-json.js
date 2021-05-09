const fs = require('fs')
const coordinates = require('./coordinates.json')

const metadata = coordinates.reduce((result, coordinate) => {

    // const { x, y } = coordinate
    // const within_bounds = x > 2 && x < 7 && y > 2 && y < 7

    result["808"][coordinate.cs_key] = {
        url: "https://adamantium.online/",
        msg: coordinate.msg,
        img: coordinate.ipfs,
    }
    return result

}, {
    "808": {}
})

fs.writeFileSync(__dirname + '/metadata.json', JSON.stringify(metadata, null, 2))