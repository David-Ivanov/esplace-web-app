export const selectCartProducts = state => state.cart?.order?.products || [];
export const selectOrder = state => state.cart.order;
export const selectCartError = state => state.products.error;
export const selectCartIsLoading = state => state.products.isLoading;