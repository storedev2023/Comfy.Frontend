export const upPage = () => {
    document.documentElement.scrollTop = 0;
}

export const calcDiscount = (price, discountAmount) =>{
    return (Math.round(price - (price * (discountAmount / 100))))
}

export const priceFormat = (price) =>{
    return new Intl.NumberFormat("ua").format(price);
}