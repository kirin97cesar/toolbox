export const convertCSVtoJSON = (csv) => {
  if (!csv) return {}
  const lines = csv.split('\n')
  const result = []
  const headers = lines[0].split(',')
  lines.forEach(element => {
    const obj = {}
    const line = element.split(',')
    headers.forEach((h, i) => {
      obj[h] = line[i]
    })
    if (element !== 'file,text,number,hex') result.push(obj)
  })
  return result
}

export const restructureFormatData = (infoDetailConvert) => {
  const lines = []
  for (let i = 0; i < infoDetailConvert.length; i++) {
    const element = infoDetailConvert[i]
    const isCompleteData = Boolean(element.file) && Boolean(element.text) && Boolean(element.number) && Boolean(element.hex)
    if (isCompleteData) {
      lines.push({
        text: element.text,
        number: element.number,
        hex: element.hex
      })
    }
  }
  return lines
}
