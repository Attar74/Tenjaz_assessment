export function generateQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();

  function addParam(key: string, value: any): void {
    if (Array.isArray(value)) {
      value.forEach((v, index) => {
        searchParams.append(`${key}[${index}]`, v.toString());
      });
    } else if (typeof value === 'object' && value !== null) {
      for (const innerKey in value) {
        addParam(`${key}[${innerKey}]`, value[innerKey]);
      }
    } else {
      if (value !== null && value !== undefined && value !== '') {
        searchParams.append(key, value.toString());
      }
    }
  }

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      addParam(key, params[key]);
    }
  }

  return `?${searchParams.toString()}`;
}
