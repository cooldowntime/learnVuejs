// 这里就取不到全局的flag和sum函数了
// if(flag){
//   console.log('小明是天才')
// }

(function(){
  if(moduleA.flag){
    console.log("小明是天才");
    console.log(moduleA.sum(40,50));
  }
})();