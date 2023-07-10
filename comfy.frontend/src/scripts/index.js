export const upPage = () => {
    document.documentElement.scrollTop = 0;
}

export const calcDiscount = (price, discountAmount) =>{
    return (Math.round(price - (price * (discountAmount / 100))))
}

export const priceFormat = (price) =>{
    return new Intl.NumberFormat("ua").format(price);
}

export function parseLocaleNumber(stringNumber, locale) {
    var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
    var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');

    return parseInt(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );
}

export const getMaxPrice = (categoryData) =>{
    return categoryData?.products?.reduce((max, product) => (product.price > max ? product.price : max), 0)
}

export const getMinPrice = (categoryData) =>{
    return categoryData?.products?.reduce((min, product) => (product.price < min ? product.price : min), getMaxPrice(categoryData))
}

export const editDateFormat = (dateAndTime) => {
    const dateAndTimeArray = dateAndTime.split(' ')
    let data = (dateAndTimeArray[0].split('/')).join('.')
    return(data + " о " + dateAndTimeArray[1])
}

export const onlyDateFormat = (dateAndTime) => {
    const dateAndTimeArray = dateAndTime.split(' ')
    let data = (dateAndTimeArray[0].split('/')).join('.')
    return(data)
}