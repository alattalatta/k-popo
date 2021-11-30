const getLastChar = (str: string): string => {
  const stripped = str.replaceAll(/\([^()]*\)/gi, '')

  const lastChar = stripped[stripped.length - 1]
  if (lastChar === `'` || lastChar === `"`) {
    return stripped[stripped.length - 2]
  }
  return lastChar
}

export { getLastChar }
