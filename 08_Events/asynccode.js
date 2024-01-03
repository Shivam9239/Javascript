// // javascrpit is synchronus
// // single threaded and slow
// // Its engine will not be lonely iw iwll always be with a browser or node js engine

// Execution Context
// >execute one line of code at a TimeRanges
// this is single thread++++>
// |-->console log -->1
// |-->console log -->2
// | ____________  _____________
// | |Call Stack|  |Memory Heap|     each operation waits for the last one to complete before excuting

// BLocking Code  V/S Non Blockking code
//     |                   |
//  Block the flow     Does not block Execution
//     of program             |
//        |                   | 
//  Read File Sync         Read File Async   
  
