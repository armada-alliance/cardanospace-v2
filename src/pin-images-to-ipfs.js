const fs = require("fs").promises
const pinToIpfs = require("./pin-to-ipfs")
const Throttle = require("promise-parallel-throttle")
const wait = ms => new Promise((resolve) => setTimeout(resolve, ms))
const coordinates = require("./coordinates.json")

async function main() {

    await Throttle.sync(
        coordinates.map(coordinate => async () => {

            if (coordinate.ipfs) return

            const { ipfsLink: image, httpLink: imageLink } = await pinToIpfs(coordinate.imageId, __dirname + "/images/" + coordinate.imageId)
            console.log(`[${coordinate.cs_key}, ${coordinate.imageId}] pinned image to ipfs (${imageLink})`)

            const coordinates = await fs.readFile(__dirname + '/coordinates.json').then(res => JSON.parse(res))
            const updated_coordinates = coordinates.map(coord => {
                if (coord.key === coordinate.key) {
                    return {
                        ...coord,
                        ipfs: image,
                        ipfsLink: imageLink
                    }
                }
                return coord
            })

            await fs.writeFile(__dirname + '/coordinates.json', JSON.stringify(updated_coordinates, null, 2))

            await wait(2000)
        })
    )

    // write updated coordinates to coordinates.json

    console.log('written updates to coordinates.json')
}

main()