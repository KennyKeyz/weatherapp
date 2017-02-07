/*function getTempPromise(location){
  return new Promise(function (resolve,reject){
    setTimeout (function (){
      resolve(79);
      reject('City not found');
    },1000);



  });
}

getTempPromise('Philadelphia').then(function(temp){
console.log('promise success',temp);
},function (err){
console.log('promise error',err);
})
*/

function addPromise(a,b){

  return new Promise(function (resolve,reject){
    if (typeof a ==='number' && typeof b ==='number'){
    
    resolve(a+b);
  }else{
    reject ('not valid ');
  }



  });

}

addPromise(7,7).then(function(sum){
  console.log('promise success',sum);
},function (err){
console.log('promise error',err);

})
