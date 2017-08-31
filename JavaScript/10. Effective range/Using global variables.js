function a(){
  i=3;    // Not Use var, it will be Global Variable
}

for(i=0; i<5; i++){
  a();
  console.log(i);
}

// It will be Print infinity 333333333333
