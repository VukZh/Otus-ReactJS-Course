// Задание второго уровня 1
// Есть объединение (юнион) типов заказов в различных состояниях
// и функция filterOnlyInitialAndInWorkOrder которая принимает заказы в любых состояниях
// А возвращает только initial и inWork
// Нужно заменить FIXME на правильный тип вычисленный на основе Order

// eslint-disable-next-line @typescript-eslint/no-explicit-any

type InitialType = {
  state: "initial";
  sum: number;
}

type InWorkType =
  {
  state: "inWork";
  sum: number;
  workerId: number;
}

type FIXME = InitialType | InWorkType | null;

type Order =
  | {
  state: "initial";
  sum: number;
}
  | {
  state: "inWork";
  sum: number;
  workerId: number;
}
  | {
  state: "buyingSupplies";
  sum: number;
  workerId: number;
  suppliesSum: number;
}
  | {
  state: "producing";
  sum: number;
  workerId: number;
  suppliesSum: number;
  produceEstimate: Date;
}
  | {
  state: "fullfilled";
  sum: number;
  workerId: number;
  suppliesSum: number;
  produceEstimate: Date;
  fullfillmentDate: Date;
};

export const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME => {
  if (order.state === "initial" || order.state === "inWork") {
    return order;
  }

  return null;
};

// test

const test1 = filterOnlyInitialAndInWorkOrder({
  state: "initial",
  sum: 1,
});
console.log(' > ', test1)

const test2 = filterOnlyInitialAndInWorkOrder({
  state: "inWork",
  sum: 1,
  workerId: 2,
});
console.log(' > ', test2)

const test3 = filterOnlyInitialAndInWorkOrder({
  state: "fullfilled",
  sum: 1,
  workerId: 2,
  suppliesSum: 3,
  produceEstimate: new Date(),
  fullfillmentDate: new Date(),
});
console.log(' > ', test3)