const urlWithFilters = (url, filters) => {
  let strArr = [];

  for (const key in filters) {
    strArr.push(`${key}=${filters[key]}`);
  }

  return `${url}?${strArr.join("&")}`;
};

export default urlWithFilters;
