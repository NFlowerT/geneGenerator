import fs from "fs"
import {generate} from "./generator.js";

const main = (amount) => {
	let dnaArray = []
	for(let i = 0; i < amount; i++){
		dnaArray.push(generate())
	}
	fs.writeFileSync("data.txt", dnaArray.join("\n\n"))
	fs.writeFileSync("data.json", JSON.stringify(dnaArray))
}

main(5)
