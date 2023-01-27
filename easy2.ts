// Задание первого уровня 2
// Есть объединение (юнион) типов заказов в различных состояниях
// Нужно заменить FIXME на тип который достанет из Order все возможные состояния (state)

// eslint-disable-next-line @typescript-eslint/no-explicit-any

type FIXME = Pick<Order, "state">;

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

export const getOrderState = (order: Order): FIXME["state"] => order.state;

// test

const test1 = getOrderState({
  state: "fullfilled",
  sum: 1,
  workerId: 2,
  suppliesSum: 3,
  produceEstimate: new Date(),
  fullfillmentDate: new Date(),
});
console.log(' > ', test1)

const test2 = getOrderState({
  state: "buyingSupplies",
  sum: 4,
  workerId: 5,
  suppliesSum: 6,
});
console.log(' > ', test2)