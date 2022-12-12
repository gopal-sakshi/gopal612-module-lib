import { add } from './add.js';
import { subtract } from './subtract.js';
import { mostUclTitles, mostUclTitlesParams } from './clubStuff.js';
export {
  add,
  subtract,
  mostUclTitles,
  mostUclTitlesParams
}


// A user can get at our functions 
    // by importing just what they need         import { add } from 'maths-package';
    // by importing everything                  import * as MathsPackage from 'maths-package';


// file extensions. 
    // we used "./add.js" & not "./add"
    // This isn't necessary if you only want to support Node.js & build tools (such as webpack)
    // but if you want to support browsers that support ES modules, you’ll need the file extensions.