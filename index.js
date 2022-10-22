let easymidi = require('easymidi');

let inputs = easymidi.getInputs();

console.log('Inputs: ', inputs);

let iac = new easymidi.Input('IAC Driver Bus 1');
iac.on('noteon', (msg) => {
  console.log('msg: ', msg);
})