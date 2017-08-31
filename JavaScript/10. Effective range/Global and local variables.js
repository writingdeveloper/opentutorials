//Global Variable

var vscope = 'global';

function fscope() {
  console.log(vscope)
};

fscope();

// Local Variable

var vscope = 'global';

function fscope() {
  var vscope = 'local';
  console.log('함수안 ' + vscope);
}

fscope();
console.log('함수밖' + vscope);

// If not use var it will be global function
