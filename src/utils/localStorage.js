export const luuLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const layLocal = (key) => {
  JSON.parse(localStorage.getItem(key));
};
