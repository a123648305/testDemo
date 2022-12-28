// export default class fetchQue {
//   max: number;
//   quene: Promise<any>[];
//   resolveCount: number;
//   callBack: null | undefined | Function;
//   waitQuene: Promise<any>[];
//   constructor(max = 10) {
//     this.max = max; // 一次并发请求数量
//     this.quene = []; // 请求队列
//     this.waitQuene = []; // 等待请求队列
//     this.resolveCount = 0; // 当前请求数量
//     this.callBack = null;
//   }
//   addFetch(request: Promise<any>, callBack?: Function) {
//     this.callBack = callBack;
//     if (this.resolveCount < this.max) {
//       this.quene.push(request);
//     } else {
//       this.waitQuene.push(request);
//     }
//   }
//   checkQues() {}
//   runAsyn(reqs) {
//     return Promise.race(reqs).then((res) => {
//       this.resolveCount = -1;
//       const newReq = this.waitQuene.shift();
//       this.quene.push(newReq);
//     });
//   }
// }

// finally
export default class fetchQue {
  constructor(max = 10) {
    this.max = max; // 一次并发请求数量
    this.quene = []; // 请求队列
    this.waitQuene = []; // 等待请求队列
    this.resolveCount = 0; // 当前请求数量
    this.callBack = null;
  }
  addFetch(request: Promise<any>, callBack?: Function) {
    return () => {
      request.finally(() => {
        if (this.quene.length) {
          this.resolveCount = -1;
          this.quene.shift()();
        }
      });
      this.resolveCount = +1;
    };
  }

  run(fn) {
    console.log(fn, "fnnn");
    if (this.resolveCount >= this.max) {
      this.quene.push(fn);
    } else {
      this.addFetch(fn);
    }
  }
}

// export default class fetchQue {
//   constructor(max = 10) {
//     this.max = max; // 一次并发请求数量
//     this.quene = []; // 请求队列
//     this.waitQuene = []; // 等待请求队列
//     this.resolveCount = 0; // 当前请求数量
//     this.callBack = null;
//   }

//   async run(fn) {
//     console.log(fn, "fnnn");
//     if (this.resolveCount >= this.max) {
//       await new Promise((resolve) => this.queue.push(resolve));
//     }
//     this.resolveCount = +1;
//     let res = await fn;
//     if (this.quene.length) {
//       this.quene.shift()();
//     }
//     return res;
//   }
// }

/**
 * 一个控制并发请求的方法 参见 asyncPool
 * @param  {number} max 最大并发请求数量
 * @param  {Array} iterable  请求数组
 * @param  {Function} iteratorFn 每个请求的方法
 */

export class fetchQueT {
  constructor(max, iterable) {
    this.max = max;
    this.iterable = iterable;
    this.executing = new Set();
  }

  async *addPromise(iteratorFn) {
    const newPromise = (async () => await iteratorFn)().then((value) => [
      newPromise,
      value,
    ]);
    console.log(newPromise, "addPromise");
    this.executing.add(newPromise);
    // while (this.executing.size) {
    //   yield await this.consume();
    // }
  }
  async consume() {
    const [promise, value] = await Promise.race(this.executing);
    this.executing.delete(promise);
    console.log(promise, value, "consume");
    return value;
  }
}

// /**
//  * 一个控制并发请求的方法 参见 asyncPool
//  * @param  {number} concurrency 最大并发请求数量
//  * @param  {Array} iterable  请求数组
//  * @param  {Function} iteratorFn 每个请求的方法
//  */
export async function* asyncPool(
  concurrency: number,
  iterable: Array<any>,
  iteratorFn: Promise<any>
) {
  const executing = new Set();
  async function consume() {
    const [promise, value] = await Promise.race(executing);
    executing.delete(promise);
    return value;
  }
  for (const item of iterable) {
    // Wrap iteratorFn() in an async fn to ensure we get a promise.
    // Then expose such promise, so it's possible to later reference and
    // remove it from the executing pool.
    const promise = (async () => await iteratorFn(item, iterable))().then(
      (value) => [promise, value]
    );
    executing.add(promise);
    if (executing.size >= concurrency) {
      yield await consume();
    }
  }
  while (executing.size) {
    yield await consume();
  }
}

const queue = [];
function promiseQueue(list) {
  let seq = Promise.resolve();
  list.forEach((item) => {
    seq = seq.then(item);
  });
  return seq;
}
