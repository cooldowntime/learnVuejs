const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2006-09',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: 'unix编程技术',
        date: '2006-02',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '代码大全',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '编程珠玑',
        date: '2006-03',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    // getFinalPrice(price){
    //   return '￥' + price.toFixed(2);
    // }
    increment(index){
      this.books[index].count ++;
    },
    decrement(index){
      if(this.books[index].count > 1){
        this.books[index].count --;
      }
    },
    removeHandler(index){
      this.books.splice(index, 1)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      // let totalPrice = this.books.map(function(book){
      //   return book.price * book.count;
      // }).reduce(function(a, b) {
      //   return a + b;
      // });
      const totalPrice = this.books.map(book => book.price * book.count).reduce((a, b) => a + b)
      return totalPrice;
    }
  }
})

//函数式编程 高阶函数filter, map, reduce
const nums = [10, 20, 111, 222, 444, 40, 50];
//1、取出所有小于100的数字
let res = nums.filter(function(n){
  return n < 100;
});
console.log(res);

//2、map函数，所有元素乘以2
res = nums.map(function(n){
  return n * 2;
});
console.log(res);

//3、reduce，累加
res = nums.reduce(function(a, b){
  return a + b;
});
console.log(res);
