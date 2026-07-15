export const discountedPrice = (price, discount) => {
    const discountedPrice = price - (price * discount / 100);

    return Math.ceil(discountedPrice);
}