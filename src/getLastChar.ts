const getLastChar = (str: string): string => {
  let stripped = str.replace(/'|"|\([^)]*\)/g, '')
  return stripped[stripped.length - 1] // no path where str is empty
}

export { getLastChar }
