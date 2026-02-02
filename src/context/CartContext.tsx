"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    weight: string;
    cut: string;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: Omit<CartItem, "quantity">) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export default function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([
        // Sample items for demo
        {
            id: "1",
            name: "Royal Blue Sapphire",
            price: 4250,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG2eVEoI1DlbG6WoeWY-fJHBkCfzSLiI-dAhtr4sU_0GW2FYHIF_pPxpFm3oVGqXOZZFBpQ58Uon-F81aaYkfy_pq1wwP2ajSA7clGOErdIAp9j1dQwjCiGf_aaScWwq5yEbll0Cu8R-h6TEGdb8Ymjauh6WsI02o8NclA0QtBA6YBDzDTOqZWVY73HHF0H5t4C-RBdMGF25Ker_WDQuON-IjGz2HGFWsL0DLdC6F4dUKAEtWK6TgvL56GvhyhHMzX-5phlbymZiVh",
            weight: "2.14 ct",
            cut: "Cushion Cut",
            quantity: 1,
        },
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = (item: Omit<CartItem, "quantity">) => {
        setItems((prev) => {
            const existingItem = prev.find((i) => i.id === item.id);
            if (existingItem) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id);
            return;
        }
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity } : item))
        );
    };

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    const toggleCart = () => setIsOpen((prev) => !prev);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                items,
                isOpen,
                addItem,
                removeItem,
                updateQuantity,
                openCart,
                closeCart,
                toggleCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
