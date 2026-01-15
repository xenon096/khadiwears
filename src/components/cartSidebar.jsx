// src/components/CartSidebar.jsx
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, cartTotal } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={() => setIsCartOpen(false)}
            ></div>

            {/* Drawer */}
            <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-khadi-50">
                    <h2 className="font-serif text-xl text-khadi-900">Your Bag ({cart.length})</h2>
                    <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-200 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cart.length === 0 ? (
                        <div className="text-center py-10 text-gray-400">Your cart is empty</div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded bg-khadi-100" />
                                <div className="flex-1">
                                    <h3 className="font-medium text-khadi-900">{item.name}</h3>
                                    <p className="text-sm text-gray-500">Qty: {item.qty} × ₹{item.price}</p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-400 hover:text-red-600 self-start"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="p-6 bg-khadi-50 border-t border-khadi-200">
                    <div className="flex justify-between items-center mb-4 text-lg font-bold text-khadi-900">
                        <span>Total</span>
                        <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                    </div>
                    <button className="w-full bg-khadi-900 text-white py-3 rounded-sm hover:bg-khadi-accent transition-colors font-medium">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}