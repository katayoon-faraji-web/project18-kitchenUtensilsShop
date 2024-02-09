'use client'
import CheckoutLeft from '../../../components/checkoutleft/box'
import CheckoutRight from '../../../components/checkoutright/box'
const CheckOut = () =>{
    return(
        <section className="w-full h-[260vh] lg:h-[160vh] flex flex-wrap justify-center px-10 items-start content-start bg-[#faeddf] font-primary mt-20">
            <CheckoutLeft/>
            <CheckoutRight/>
        </section>
    )
}
export default CheckOut



