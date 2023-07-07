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
