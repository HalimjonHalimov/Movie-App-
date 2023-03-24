  const onTernHandle = (arr, tern) => {
    if(tern.length === 0) {
      return arr
    }
      return arr.filter(item => item.name.toLoverCase().indexOf(tern) );
  }

  const arrs = [
    {name: 'Dilshod'},
    {name: 'Ulugbek'},
    {name: 'Farxod'}
  ];
  const newTern = 'ulu';
  onTernHandle(arrs, newTern)