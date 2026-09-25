const placeholder = (label) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='100%' height='100%' fill='#eee'/><text x='50%' y='50%' font-size='14' text-anchor='middle' dominant-baseline='middle' fill='#999'>${label}</text></svg>`
  )}`

export const products = [
  { id: 1, name: 'Wireless Earbuds', price: 899, image: placeholder('Wireless Earbuds'), stock: 50 },
  { id: 2, name: 'Phone Case', price: 149, image: placeholder('Phone Case'), stock: 120 },
  { id: 3, name: 'Power Bank 10000mAh', price: 599, image: placeholder('Power Bank 10000mAh'), stock: 30 },
  { id: 4, name: 'USB-C Cable', price: 99, image: placeholder('USB-C Cable'), stock: 200 },
]
