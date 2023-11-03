#!/usr/bin/env node

const path = require("path")
const fs = require("fs/promises")

async function readFile(file) {
    file = path.resolve(file)

    try {
        return await fs.readFile(file, 'utf8');
    } catch (err) {
        console.error(`File at path ${file} doesn't exist.`)
        console.error(`Stopping process.`)
        return
    }
}

async function replaceAsync(input, regex, asyncReplacer) {
    const promises = [];
    input.replace(regex, (match, ...args) => {
      const promise = asyncReplacer(match, ...args);
      promises.push(promise);
    });

    const replacements = await Promise.all(promises);
    return input.replace(regex, () => replacements.shift());
  }

async function modifyScript(originalFilePath, script) {
    // Implement #import

    script = await replaceAsync(script, /#include "([^"]+)"/g, async (match, filePath) => {
        let modulePath = path.join(`${path.dirname(originalFilePath)}/${filePath}`);
        let result = await modifyScript(modulePath, await readFile(modulePath));

        if(!result) throw ""

        return result;
    });

    // Returning the output

    return script
}

module.exports = async function (input, output) {
    let outputPath = path.resolve(output)
    let scriptContents = await readFile(input)
    if (!scriptContents) return;

    try {
        let newScript = await modifyScript(input, scriptContents)
        await fs.writeFile(outputPath, newScript, "utf-8")
        console.log(`Finished preprocessing file`)
    } catch (err) {
        if(!err) return;

        console.error(err)
        console.error(`An unknown error happened.`)
        console.error(`Stopping process.`)
    }
}