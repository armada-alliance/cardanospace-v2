const fs = require("fs").promises
const Throttle = require("promise-parallel-throttle")
const upperFirst = require('lodash/upperFirst')
const coordinates = require("./coordinates.json")

const quotes = [
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
"There will be Boobs!",
]

async function main() {

    const updated_coordinates = await Throttle.sync(
        coordinates.map((coordinate, index) => async () => {

            return {
                ...coordinate,
                url: "https://adamantium.online/",
                msg: upperFirst(quotes[index % quotes.length])
            }
        })
    )

    // write updated coordinates to coordinates.json
    await fs.writeFile(__dirname + '/coordinates.json', JSON.stringify(updated_coordinates, null, 2))

    console.log('written updates to coordinates.json')
}

main()