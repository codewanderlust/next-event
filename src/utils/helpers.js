export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

// MacGuyver'd utility to generate && remove notifications
export const remove = (arr, item) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex((i) => i === item),
    1,
  );
  return newArr;
};

let newIndex = 0;
export const add = (arr, text, style) => {
  newIndex = newIndex + 1;
  return [...arr, { id: newIndex, text: text, style: style }];
};
