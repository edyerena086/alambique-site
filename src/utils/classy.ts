const classy = (classes: string[]): string => {
  const proccessedStyles = classes.filter(item => item.trim() !== '')

  return proccessedStyles.join(' ')
}

export default classy
