function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div className="cart white-text " style={{ backgroundColor: '#8A6FF8' }} onClick={handleBasketShow}>
            <i class="material-icons cart-icon">shopping_basket</i>
            {quantity ? <span className="cart-quantuty">{quantity}</span> : null}
        </div>
    );
}

export { Cart };