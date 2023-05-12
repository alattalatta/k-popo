const getLastChar = (str: string): string => {
  let stripped = str.replace(/\([^)]*\)/g, '')

  let lastChar = stripped[stripped.length - 1]
  if (lastChar == `'` || lastChar == `"`) {
    return stripped[stripped.length - 2]
  }
  return lastChar
}

export { getLastChar }
