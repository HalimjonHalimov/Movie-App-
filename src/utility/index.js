
const onTernHandle = (arr, tern) => {
    if(tern.length === 0) {
      return arr
    }
      return arr.filter(item => item.name.toLowerCase().indexOf(tern.toLowerCase()) > -1);
  }

const onfilterHandle = (arr, filter) => {
    switch (filter) {
        case 'popular':
        return arr.filter(c => c.favourite)
        case 'most':
        return  arr.filter(c => c.viewer >= 500)
        default:
        return arr
    }
}

export {onTernHandle, onfilterHandle }
