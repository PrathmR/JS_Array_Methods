# 🚀 JavaScript Array Methods Demo

This project demonstrates various **JavaScript array methods** using a simple and beautifully styled HTML page. It's perfect for learners who want to understand how different array operations work with real-world examples.

---

## 📁 Files Included

* `index.html` – A responsive, modern webpage with clean styling and animations.
* `script.js` – JavaScript file containing practical use cases of array methods.

---

## 📌 Array Methods Covered

### 1. ✅ `forEach()`

Iterates through an array and prints each value.

```js
let arr = ['Jonas', 'Martha', 'Mikkel', 'Helge', 'Claudia'];
arr.forEach(val => console.log(val));
```

---

### 2. 🔍 `filter()`

Filters out even numbers from an array.

```js
let even_elements = [1,2,3,4,5].filter(val => val % 2 === 0);
```

---

### 3. 🧾 `map()`

Applies 18% GST to product prices.

```js
let map_prices = [200, 250].map(val => val * 0.18);
```

---

### 4. 💰 `reduce()`

Calculates total payroll from salary data.

```js
let total = [1000, 4500].reduce((acc, val) => acc + val, 0);
```

---

### 5. 🎯 `find()`

Finds the first student with grade 'A'.

```js
let grade = ['B', 'C', 'A'].find(val => val === 'A');
```

---

### 6. 🔄 `reverse()`

Reverses the array elements.

```js
let reversed = [1, 2, 3].reverse();
```

---

### 7. 📈 `sort()`

Sorts ages in ascending order.

```js
let sorted = [30, 18, 45].sort((a, b) => a - b);
```

---

### 8. 🧹 Destructuring

Extracts specific elements from an array.

```js
let [a, b, , , d] = [2, 4, 5, 6, 7];
```

---

### 9. ❗ `some()` and `every()`

* `some()` checks if **any** student failed.
* `every()` checks if **all** students passed.

```js
let fail = [68, 45, 30].some(val => val < 35);
let pass = [68, 45, 30].every(val => val > 35);
```

---

### 10. 📦 Spread Operator

Copies and extends an array with new values.

```js
let spread = ['India', ...[1, 2, 3]];
```

---

## 💻 How to Run

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Open Developer Tools (`F12`) and go to the **Console** tab.
4. View the output from the array methods in the console.

---

## 🎨 UI Highlights

* 🌈 Gradient background
* 🖋️ Google Fonts (Raleway)
* ✨ Animation using CSS keyframes
* 📱 Responsive typography for mobile

---

## 💡 Purpose

This project is designed for **beginners and intermediate learners** to practice JavaScript array methods in a real-world format.

---

## 📜 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## 🙌 Contributions

Contributions are welcome!
Fork the repo and feel free to submit a pull request for improvements or bug fixes.

---
