$(document).ready(()=>{
    const icons = $('.svg-icon');
    const divIcons = $('.icon-div');

    
    icons.hover((e)=>{
        $(e.target).toggleClass('border-bottom')
    })

    console.log('is this working?');

    const in_btn =  $('.increment');
    const de_btn =  $('.decrement');
    const order_amount =  $('.order-amount');


    in_btn.click(()=>{
        console.log('clicked');
        order_amount.text(Number(order_amount.text()) + 1)
    })

    de_btn.click(()=>{
        let current_order_amount = new Number(order_amount.text())
        console.log('clicked');
        if (current_order_amount > 1) {
            order_amount.text(current_order_amount - 1)
        }
    })
})