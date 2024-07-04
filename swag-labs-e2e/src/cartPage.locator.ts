const cart = {
    your_cart_heading: "[data-test='title']",
    quantiy_heading: "[class='cart_list'] [data-test='cart-quantity-label']",
    description: "[data-test='cart-desc-label']",
    iteams_count: "[data-test='cart-list'] [data-test='inventory-item']",
    iteam_heading: "[class='cart_item_label'] [data-test='inventory-item-name']",
    iteam_price: "[data-test='inventory-item-price']",
    iteam_remove_button: "button[class='btn btn_secondary btn_small cart_button']",
    countinue_shopping_button: "button[data-test='continue-shopping']",
    checkout_button: "button[data-test='checkout']",
    checkoutIteam_number: "[class='shopping_cart_container'] [data-test='shopping-cart-badge']"

}

export { cart };