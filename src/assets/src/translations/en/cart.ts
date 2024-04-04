export const cart = {
  cartDetails: {
    id: 'ID',
    proceedToCheckout: 'Prosseguir para o Checkout',
    cartName: 'Carrinho #{{code}}',
  },
  cartItems: {
    id: 'ID',
    description: 'Descrição',
    item: 'Item',
    itemPrice: 'Preço do item',
    quantity: 'Qtd',
    quantityTitle:
      'A quantidade representa o número total deste item no seu carrinho.',
    total: 'Total',
    cartTotal: 'Total do carrinho ({{count}} item)',
    cartTotal_plural: 'Total do carrinho ({{count}} itens)',
  },
  orderCost: {
    orderSummary: 'Resumo do Pedido',
    subtotal: 'Subtotal após descontos:',
    shipping: 'Envio:',
    estimatedShipping: 'Envio estimado:',
    discount: 'Você economizou:',
    salesTax: 'Imposto sobre vendas:',
    grossTax: 'O total do pedido não inclui imposto de',
    grossIncludeTax: 'O total do pedido inclui imposto de',
    total: 'Total:',
    toBeDetermined: 'A ser determinado',
  },
  voucher: {
    coupon: 'Tem um cupom?',
    coupon_plural: 'Códigos de cupom',
    apply: 'Aplicar',
    placeholder: 'Código promocional',
    applyVoucherSuccess: '{{voucherCode}} foi aplicado.',
    removeVoucherSuccess: '{{voucherCode}} foi removido.',
    anchorLabel: 'Digite ou remova seu código de cupom',
    vouchersApplied: 'Cupons aplicados',
    availableCoupons: 'Cupons disponíveis',
    availableCouponsLabel: 'Você pode adicionar esses cupons a este pedido.',
  },
  saveForLaterItems: {
    itemTotal: 'Salvos para mais tarde ({{count}} item)',
    itemTotal_plural: 'Salvos para mais tarde ({{count}} itens)',
    cartTitle: 'Carrinho',
    saveForLater: 'Salvar para mais tarde',
    moveToCart: 'Mover para o Carrinho',
    stock: 'Estoque',
    forceInStock: 'Em Estoque',
  },
  validation: {
    cartEntriesChangeDuringCheckout:
      'Durante o checkout encontramos problemas com suas entradas. Por favor, revise seu carrinho.',
    cartEntryRemoved:
      '{{name}} foi removido do carrinho por estar fora de estoque.',
    productOutOfStock:
      '{{name}} foi removido do carrinho devido a estoque insuficiente.',
    lowStock: 'A quantidade foi reduzida para {{quantity}} devido a estoque insuficiente.',
    reviewConfiguration:
      'Resolva os problemas na configuração da entrada do carrinho primeiro.',
    pricingError:
      'A precificação do configurador não está disponível no momento. O envio ou envio de cotação não é possível. Por favor, tente novamente mais tarde.',
    unresolvableIssues:
      'A configuração do produto requer entradas adicionais no backend. Como resultado, você não pode prosseguir. Por favor, entre em contato com o suporte.',
  },
};
