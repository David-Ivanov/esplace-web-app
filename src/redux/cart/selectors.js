export const selectProducts = state => state.cart?.order?.products || [];
export const selectOrder = state => state.cart.order;
export const selectError = state => state.products.error;
export const selectIsLoading = state => state.products.isLoading;