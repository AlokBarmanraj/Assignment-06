import React from 'react';

const Cart = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-9/12 mx-auto'>
                <div className='text-black bg-[#f8f8f8] border border-blue-100 rounded-2xl p-5 space-y-3'>
                    <h2 className='text-2xl font-bold'>Your Cart</h2>
                    <div className='flex justify-between'>
                        <p>Total:</p>
                        <h2 className='text-2xl font-bold'>$50</h2>
                    </div>
                    <button className='btn w-full bg-gradient-to-r from-[#4A00E0] via-[#6A11CB] to-[#8E2DE2] text-white px-5 lg:px-5 py-4 lg:py-5 rounded-full border-none'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;