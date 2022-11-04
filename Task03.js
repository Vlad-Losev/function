'use strict'

// const numberOfGoods = Number(prompt('Введите кол-во товаров: '));

// const totalPrice = Number(prompt('Введите общую стоимость корзины: '));


const calculate = (totalPrice, numberOfGoods, promoCode) => {
  let totalMoney = totalPrice;

  if (numberOfGoods > 10) {
    totalMoney *= 0.97

    // return totalMoney;
  }

  if (totalMoney > 30000) {
    totalMoney = (totalMoney - 30000) * 0.85 +30000
  }

  if (promoCode === 'METHED') {
    totalMoney *= 0.90
  }

  if (promoCode === 'G3H2Z1', totalMoney > 2000) {
    totalMoney -= 500
  }

  return totalMoney;
}

console.log(calculate(100000, 15, 'G3H2Z1'));