#!/usr/bin/env node

const { program } = require('commander');
const command = require("./command.js")

program
    .version('1.0.0')
    .description('CLI made to preprocess WGSL scripts')
    .name("better-wgsl-preprocessor")

program.command('run')
    .description('Runs the preprocessor on a WGSL file')
    .argument('<input file>', 'The WGSL file to preprocess')
    .argument('<output file>', 'The file where to store the output')
    .action((input, output) => {
        command(input, output)
    });

program.parse(process.argv);