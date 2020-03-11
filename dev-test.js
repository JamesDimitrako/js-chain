const Block = require('./block');

// previous tests
// const block = new Block('foo', 'bar', 'zoo', 'baz');

// console.log(block.toString());

// console.log(Block.genesis().toString());


// console.log("----------------------");

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');

console.log(fooBlock.toString());