import {flag, sum, num1, mul, Person} from "./aaa.js"

const p = new Person();
p.run();


if(flag){
  console.log("小明是天才");
  console.log(sum(30, 50));
  console.log(num1);
  console.log(mul(10, 66));
}

import addr from "./aaa.js"
console.log(addr);

//全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);