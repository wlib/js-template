# JS-Template - A quick and simple javascript module template

## The best way to write your next javascript module

+ Write all your code in the latest ECMAScript version
+ Builds with a simple [Gulp](http://gulpjs.com/) script
  - Bundles using [Rollup](https://rollupjs.org/)
  - Transpiles using [TypeScript's Compiler](https://www.typescriptlang.org/)
  - Minifies using [Babili](https://github.com/babel/babili)
+ [UMD](http://davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd/#umd-universal-module-definition) modules are output into dist/
+ Tests are run with [Mocha](http://mochajs.org/)

`git clone https://github.com/wlib/js-template.git my-module && cd my-module && rm -rf .git/`

```sh
npm run dev # get coding, gulp builds when a js file in src/ changes
npm run build # format the project files and then build
npm run test # test with mocha
```
