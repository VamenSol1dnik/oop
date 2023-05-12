class SuperMath {
  input() {
    const x = parseFloat(prompt('Введіть  X'));
    const y = parseFloat(prompt('Введіть  Y'));
    const znak = prompt('Введіть знак (+, -, /, *, %)');
    return { x, y, znak };
  }

  check(obj) {
    if (typeof obj !== 'object') {
      throw new Error('Переданий параметр має бути об`єктом');
    }
    const { x, y, znak } = obj;
    if (!x || !y || !znak) {
      throw new Error('Параметри X, Y та znak мають бути визначені');
    }
    if (!['+', '-', '/', '*', '%'].includes(znak)) {
      throw new Error('Непідтримуваний знак. Підтримуються тільки +, -, /, *, %');
    }
    const confirmed = confirm(`Ви хочете виконати дію ${x} ${znak} ${y}?`);
    if (confirmed) {
      const result = eval(`${x} ${znak} ${y}`);
      alert(`Результат: ${result}`);
    } else {
      const newObj = this.input();
      this.check(newObj);
    }
  }
}
