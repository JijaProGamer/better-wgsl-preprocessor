# Better WGSL Preprocessor

## Overview

The Better WGSL Preprocessor is a versatile tool designed to simplify, optimize and preprocess your WebGPU Shading Language (WGSL) code. With this preprocessor, you can streamline your workflow and make your code more efficient, ultimately enhancing your graphics programming experience.

## Features

* Import External Modules: The preprocessor allows you to include external WGSL modules using the #include directive, making it easy to manage and reuse code.

* Automatic Path Resolution: You don't need to worry about the intricacies of file paths. The preprocessor takes care of automatically resolving paths for your included modules.

* Asynchronous Processing: The preprocessor is equipped to handle asynchronous operations efficiently, ensuring that your code remains responsive and high-performing.

## Getting Started

### Installation

To use the WGSL Preprocessor, you must have Node.js installed. If you haven't already, you can download and install it from nodejs.org.

Next, install the preprocessor:

```bash
npm install -g better-wgsl-preprocessor
```

### Usage

Once the preprocessor is installed, you can use it as a command-line tool. The basic syntax is as follows:

```bash
better-wgsl-preprocessor input.wgsl output.wgsl
```

Replace input.wgsl with the path to your source WGSL file and output.wgsl with the desired output file.
Example

Suppose you have a WGSL file main.wgsl that includes other modules:

```wgsl
// main.wgsl

#include "utils.wgsl"
// Now you can use both the utils and vectors contents

```

```wgsl
// utils.wgsl

#include "vector.wgsl"

struct SomeUtilStruct {

}
```

Run the preprocessor as follows:

```bash

better-wgsl-preprocessor main.wgsl new.wgsl
```

The preprocessor will process the file, resolve the included modules, and generate an new output in new.wgsl.