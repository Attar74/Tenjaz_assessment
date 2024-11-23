export function generateQueryString(params) {
  let searchParams = new URLSearchParams();

  function addParam(key, value) {
    if (Array.isArray(value)) {
      value.forEach((v, index) => {
        searchParams.append(`${key}[${index}]`, v);
      });
    } else if (typeof value === 'object' && value !== null) {
      for (let innerKey in value) {
        addParam(`${key}[${innerKey}]`, value[innerKey]);
      }
    } else {
      if (value !== null && value !== undefined && value !== '') {
        searchParams.append(key, value);
      }
    }
  }
  for (let key in params) {
    addParam(key, params[key]);
  }
  return `?${searchParams.toString()}`;
}
