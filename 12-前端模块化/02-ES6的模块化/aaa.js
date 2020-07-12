var name = "小明";
var age = 18;
var flag = true;

function sum(num1, num2){
  return num1 + num2;
};

if(flag){
  console.log(sum(20, 30))
}

//1、导出方式1
export {
  flag, sum
}

//2、到处方式2
export var num1 = 1000;
num1 = 2000;

//3、导出函数或类
export function mul(num1, num2){
  return num1 * num2;
}

export class Person{
  run() {
    console.log("在奔跑");    
  }
}

//4、export default, 一个模块只能有一个，
//导入的时候可以重新命名
const address = "北京市";
export default address;