import ky from 'ky';

const get = (url, options) => {
  return ky.get(url, options);
};

export { get };
