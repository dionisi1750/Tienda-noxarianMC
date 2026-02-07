
import React, { useState, useEffect, useCallback } from 'react';
import { LOGO_URL, DISCORD_LINK, PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, Category } from './types';

// --- Sub-components ---

const LandingScreen: React.FC<{ onEnter: (nick: string) => void }> = ({ onEnter }) => {
  const [nick, setNick] = useState('');
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-[#0b0114] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center space-y-8 animate-fade-in">
        <img 
          src={LOGO_URL} 
          alt="NoxarianMC Logo" 
          className="w-48 md:w-64 animate-pulse-glow"
        />
        
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-sci-fi font-black neon-purple">NOXARIANMC</h1>
          <p className="text-purple-400 font-medium tracking-widest">TIENDA PREMIUM FULLPVP</p>
        </div>

        <div className="w-full bg-purple-900/10 backdrop-blur-xl p-8 rounded-3xl border border-purple-500/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-sci-fi text-purple-300 uppercase tracking-tighter">
              Ingresá tu Nick de Minecraft EXACTO
            </label>
            <input 
              type="text" 
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && nick.trim() && onEnter(nick)}
              placeholder="Ej: Player123"
              className="w-full px-6 py-4 bg-black/60 border border-purple-500/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 font-sci-fi text-xl text-center placeholder:text-purple-800/50 text-white transition-all"
            />
          </div>
          
          <button 
            disabled={!nick.trim()}
            onClick={() => onEnter(nick)}
            className="w-full py-5 bg-gradient-to-r from-purple-700 to-fuchsia-700 hover:from-purple-600 hover:to-fuchsia-600 disabled:opacity-30 disabled:cursor-not-allowed text-white font-sci-fi font-bold text-lg rounded-xl transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transform hover:scale-[1.02] active:scale-95"
          >
            IR A LA TIENDA
          </button>
        </div>
        
        <p className="text-purple-500/60 text-xs uppercase tracking-[0.3em] font-bold">Futuristic FullPvP Experience</p>
      </div>
    </div>
  );
};

const CheckoutModal: React.FC<{ 
  orderText: string; 
  total: number;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ orderText, total, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg">
      <div className="w-full max-w-lg bg-gray-900 border neon-border rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.4)] animate-fade-in">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/40">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="text-2xl font-sci-fi font-black neon-purple uppercase">¡PEDIDO LISTO!</h2>
            <p className="text-gray-400 text-sm mt-2">Los datos han sido copiados a tu portapapeles.</p>
          </div>

          <div className="bg-black/60 p-5 rounded-2xl border border-purple-500/20 max-h-48 overflow-y-auto">
             <pre className="text-[10px] md:text-xs text-purple-300 font-mono leading-relaxed whitespace-pre-wrap">
               {orderText}
             </pre>
          </div>

          <div className="flex justify-between items-center py-4 border-t border-purple-900/30">
            <span className="text-gray-400 font-bold font-sci-fi text-sm uppercase">PAGO TOTAL</span>
            <span className="text-3xl font-sci-fi font-black text-white">${total} USD</span>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={onConfirm}
              className="w-full py-5 bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white font-sci-fi font-black rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] transform hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest"
            >
              IR AL DISCORD AHORA
            </button>
            <button 
              onClick={onCancel}
              className="w-full py-3 text-gray-500 hover:text-white text-xs uppercase font-bold tracking-widest transition-colors"
            >
              CERRAR Y SEGUIR COMPRANDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductModal: React.FC<{ product: Product; onClose: () => void; onAddToCart: (p: Product) => void }> = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-gray-900/80 rounded-3xl border neon-border overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-400 hover:text-white transition-colors p-2 z-20 bg-black/40 rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-purple-500/30 overflow-hidden relative">
           <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
           <img src={product.image} alt={product.name} className="relative z-10 max-w-full max-h-64 object-contain transform hover:scale-110 transition-transform duration-700" />
        </div>

        <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-gradient-to-br from-gray-900 to-black">
          <h2 className="text-3xl font-sci-fi font-black neon-purple mb-2 uppercase">{product.name}</h2>
          <p className="text-2xl font-bold text-green-400 mb-6 font-sci-fi">${product.price} USD</p>
          
          <div className="space-y-6">
            {product.description && <p className="text-gray-400 italic leading-relaxed">{product.description}</p>}
            
            {product.details?.armor && (
              <div className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
                <h3 className="text-purple-400 font-sci-fi font-bold flex items-center gap-2 mb-2 text-sm uppercase">🛡️ ARMADURA</h3>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                  {product.details.armor.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}
            
            {product.details?.tools && (
              <div className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
                <h3 className="text-purple-400 font-sci-fi font-bold flex items-center gap-2 mb-2 text-sm uppercase">⚔️ HERRAMIENTAS</h3>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                  {product.details.tools.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}

            {product.details?.benefits && (
              <div className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
                <h3 className="text-purple-400 font-sci-fi font-bold flex items-center gap-2 mb-2 text-sm uppercase">✨ BENEFICIOS</h3>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                  {product.details.benefits.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}
            
            {product.details?.extras && (
              <div className="bg-purple-900/10 p-4 rounded-xl border border-purple-500/20">
                <h3 className="text-purple-400 font-sci-fi font-bold flex items-center gap-2 mb-2 text-sm uppercase">🎁 EXTRAS</h3>
                <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                  {product.details.extras.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            )}

            {product.details?.summary && (
               <div className="bg-purple-600/20 p-3 rounded-lg border border-purple-500/40 text-center font-bold text-purple-200 uppercase text-xs tracking-widest">
                📦 {product.details.summary}
               </div>
            )}

            <div className="pt-6">
              <button 
                onClick={() => { onAddToCart(product); onClose(); }}
                className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-sci-fi font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] transform hover:scale-[1.02]"
              >
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [nick, setNick] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('kits');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);
  const [finalOrder, setFinalOrder] = useState<{ text: string; total: number } | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const orderId = `NXR-${Math.random().toString(36).substr(2, 4).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    let orderText = `🧾 PEDIDO: ${orderId}\n\n`;
    
    const grouped = cart.reduce<Record<string, CartItem[]>>((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    Object.entries(grouped).forEach(([cat, items]) => {
      const catName = CATEGORIES.find(c => c.id === cat)?.name || cat;
      const catIcon = CATEGORIES.find(c => c.id === cat)?.icon || '';
      orderText += `${catIcon} ${catName.toUpperCase()}\n`;
      (items as CartItem[]).forEach(item => {
        orderText += `- ${item.name} x${item.quantity} ($${item.price * item.quantity} USD)\n`;
      });
      orderText += `\n`;
    });

    orderText += `💰 TOTAL: $${totalPrice} USD\n\n`;
    orderText += `Usuario Minecraft: ${nick}`;

    // Copiar al portapapeles y mostrar modal de confirmación
    navigator.clipboard.writeText(orderText).then(() => {
      setFinalOrder({ text: orderText, total: totalPrice });
    }).catch(() => {
      // Fallback si falla el clipboard
      setFinalOrder({ text: orderText, total: totalPrice });
    });
  };

  const confirmAndRedirect = () => {
    window.open(DISCORD_LINK, '_blank');
    setFinalOrder(null);
    setCart([]);
    setShowCart(false);
  };

  if (!nick) {
    return <LandingScreen onEnter={setNick} />;
  }

  return (
    <div className="min-h-screen bg-[#0b0114] text-gray-200 selection:bg-purple-600 selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-black/60 backdrop-blur-xl border-b border-purple-900/30 px-4 md:px-8 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={LOGO_URL} alt="NoxarianMC" className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
          <h1 className="font-sci-fi font-black text-lg md:text-2xl neon-purple tracking-tighter">NOXARIANMC</h1>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <a href={DISCORD_LINK} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-white transition-all transform hover:scale-110 active:scale-90">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/></svg>
          </a>
          
          <button 
            onClick={() => setShowCart(true)}
            className="relative p-2 bg-purple-900/30 rounded-xl hover:bg-purple-900/50 transition-all border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] active:scale-95"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border border-black animate-pulse">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 md:py-24 overflow-hidden border-b border-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-purple-600/10 border border-purple-500/20 px-6 py-2 rounded-full mb-6 animate-fade-in backdrop-blur-sm">
            <p className="text-purple-300 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Conectado como {nick}
            </p>
          </div>
          <h2 className="text-5xl md:text-8xl font-sci-fi font-black mb-6 uppercase tracking-tight neon-purple leading-none">
            FULL<span className="text-purple-600 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">PVP</span>
          </h2>
          <p className="max-w-2xl mx-auto text-purple-200/50 text-base md:text-lg font-medium">
            EQUIPAMIENTO DE ÉLITE PARA GUERREROS SIN MIEDO. 
            <br/>
            LA SUPREMACÍA COMIENZA AQUÍ.
          </p>
        </div>
      </header>

      {/* Main Categories Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`
                px-6 md:px-10 py-4 rounded-2xl font-sci-fi font-bold transition-all flex items-center gap-3 border uppercase tracking-widest text-xs md:text-sm
                ${activeCategory === cat.id 
                  ? 'bg-gradient-to-br from-purple-700 to-purple-900 border-purple-400 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-105 z-10' 
                  : 'bg-black/40 border-purple-900/20 text-purple-400 hover:border-purple-500 hover:text-purple-100 hover:bg-purple-900/10'}
              `}
            >
              <span className="text-lg md:text-xl">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
          {PRODUCTS.filter(p => p.category === activeCategory).map(product => (
            <div 
              key={product.id}
              className="group bg-gradient-to-b from-purple-900/10 to-black rounded-3xl border border-purple-900/20 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:translate-y-[-10px] neon-glow-hover flex flex-col"
            >
              <div 
                className="h-56 bg-black flex items-center justify-center p-8 cursor-pointer overflow-hidden relative"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="relative z-10 max-h-full object-contain transform group-hover:scale-110 transition-transform duration-700 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-sci-fi font-bold text-base md:text-lg text-white group-hover:text-purple-400 transition-colors uppercase leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="text-green-400 font-bold font-sci-fi text-lg">${product.price}</span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase">USD</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs md:text-sm mb-8 line-clamp-3 leading-relaxed flex-1">
                  {product.description || `Optimizado para combate intenso de alta fidelidad. Clase: ${product.name.split(' ').pop()}.`}
                </p>
                <div className="flex gap-2">
                  <button onClick={() => setSelectedProduct(product)} className="flex-1 py-3 bg-purple-900/20 hover:bg-purple-900/40 text-purple-400 rounded-xl font-sci-fi font-bold text-[10px] md:text-xs transition-all border border-purple-500/20 uppercase tracking-widest">MÁS INFO</button>
                  <button onClick={() => addToCart(product)} className="p-3 bg-gradient-to-br from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-xl transition-all shadow-lg active:scale-90"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar Carrito */}
      {showCart && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowCart(false)}></div>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0b0114] border-l border-purple-500/30 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col animate-slide-in-right">
            <div className="p-8 border-b border-purple-900/30 flex justify-between items-center bg-black/40">
              <h2 className="font-sci-fi font-black text-2xl neon-purple uppercase tracking-widest">CARRITO</h2>
              <button onClick={() => setShowCart(false)} className="text-purple-400 hover:text-white bg-purple-900/20 p-2 rounded-full transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-20 flex flex-col items-center">
                  <div className="w-20 h-20 bg-purple-900/20 rounded-full flex items-center justify-center mb-6"><svg className="w-10 h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
                  <p className="text-purple-900 uppercase tracking-[0.3em] font-black text-lg">CARRITO VACÍO</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-purple-900/5 p-4 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all">
                    <div className="w-20 h-20 bg-black rounded-xl p-3 flex items-center justify-center border border-purple-900/30">
                      <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="font-bold text-white uppercase text-xs tracking-wider">{item.name}</h4>
                        <p className="text-green-400 font-bold text-sm mt-1">${item.price * item.quantity} USD</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-gray-900 rounded-lg overflow-hidden border border-purple-900/30">
                          <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-purple-900/40 text-purple-400 transition-colors">-</button>
                          <span className="px-3 py-1 text-xs font-bold text-white bg-black/40">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-purple-900/40 text-purple-400 transition-colors">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-400 text-[10px] uppercase font-black tracking-tighter transition-colors p-1">Eliminar</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-8 border-t border-purple-900/30 bg-black/60 space-y-6">
              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                   <span className="text-purple-400 font-sci-fi font-bold uppercase tracking-widest text-[10px]">TOTAL DE LA COMPRA</span>
                   <span className="text-3xl font-sci-fi font-black text-white leading-none">${totalPrice}</span>
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase">USD</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full py-5 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 disabled:opacity-20 disabled:cursor-not-allowed text-white font-sci-fi font-black text-xl rounded-2xl shadow-[0_10px_30px_rgba(168,85,247,0.3)] transition-all uppercase tracking-[0.2em] transform active:scale-95"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modales Finales */}
      {finalOrder && (
        <CheckoutModal 
          orderText={finalOrder.text} 
          total={finalOrder.total} 
          onConfirm={confirmAndRedirect}
          onCancel={() => setFinalOrder(null)}
        />
      )}

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={addToCart} 
        />
      )}

      <footer className="bg-black py-20 px-4 text-center border-t border-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <img src={LOGO_URL} alt="NoxarianMC" className="w-16 h-16 mx-auto mb-8 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-700" />
          <h3 className="font-sci-fi font-black text-2xl mb-2 text-purple-600 uppercase tracking-[0.4em]">NOXARIANMC</h3>
          <p className="text-gray-600 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-12">DOMINATING THE FULLPVP REALM SINCE 2026</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 text-gray-500 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-purple-400 transition-colors">Reglas</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Términos</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Privacidad</a>
            <a href={DISCORD_LINK} className="hover:text-purple-400 transition-colors">Soporte</a>
          </div>
          <p className="text-gray-800 text-[9px] uppercase tracking-widest max-w-lg mx-auto leading-loose">NoxarianMC no está afiliado con Mojang AB ni Microsoft. Los pagos se procesan de forma segura a través de nuestro equipo de soporte en Discord.</p>
        </div>
      </footer>
    </div>
  );
}
