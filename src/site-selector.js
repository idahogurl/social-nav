export default (defaultValue, envOptions, site) => {
  return site in envOptions ? envOptions[site] : defaultValue;
};