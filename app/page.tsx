import React from 'react';
import { ShoppingBag, ArrowRight, Instagram, Search, Mail, Star, Heart } from 'lucide-react';

const posts = [
  { id: 1, cat: "FASHION", title: "2024 Capsule Wardrobe: The Essential 10", excerpt: "Master the art of minimalist elegance with our handpicked seasonal staples.", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800" },
  { id: 2, cat: "SHOES", title: "The Urban Edit: Sophisticated Footwear", excerpt: "From boardroom to brunch, these are the shoes every modern professional needs.", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800" },
  { id: 3, cat: "BEAUTY", title: "Glass Skin Secrets Revealed", excerpt: "Achieve the ultimate glow with our editors' tested skincare routines.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800" },
  { id: 4, cat: "LIFESTYLE", title: "The Modern Sanctuary: Interior Trends", excerpt: "How to design a living space that balances productivity and peace.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800" },
  { id: 5, cat: "FASHION", title: "Quiet Luxury: The New Era of Style", excerpt: "Understanding why high-quality basics are the ultimate fashion statement.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" },
  { id: 6, cat: "BEAUTY", title: "Signature Scents for Spring", excerpt: "A curated collection of fragrances that define the new season.", img: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans tracking-tight">
      <div className="bg-slate-900 text-white py-2 text-center text-[10px] font-bold uppercase tracking-[0.2em]">
        Curated Excellence • Moda Selection Media
      </div>

      <nav className="border-b sticky top-0 bg-white/90 backdrop-blur-md z-50 px-6">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-black italic tracking-tighter">MODA SELECTION</div>
          <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-black transition">Fashion</a>
            <a href="#" className="hover:text-black transition">Shoes</a>
            <a href="#" className="hover:text-black transition">Beauty</a>
            <a href="#" className="hover:text-black transition italic text-amber-700">Disclosure</a>
          </div>
          <div className="flex items-center space-x-5 text-slate-400">
            <Search size={18} />
            <ShoppingBag size={18} />
          </div>
        </div>
      </nav>

      <header className="py-24 text-center px-6 bg-slate-50">
        <span className="text-amber-800 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block underline underline-offset-8 decoration-1">The 2024 Collection</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-8 max-w-4xl mx-auto leading-tight">Defining the modern aesthetic through expert curation.</h1>
        <p className="max-w-lg mx-auto text-slate-500 text-sm italic">"Style is a way to say who you are without having to speak."</p>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {posts.map((p) => (
            <div key={p.id} className="group flex flex-col">
              <div className="aspect-[3/4] overflow-hidden mb-8 bg-slate-100 relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[9px] font-black tracking-widest uppercase">New Story</div>
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] text-amber-900 mb-3">{p.cat}</span>
              <h2 className="text-2xl font-serif mb-4 leading-tight group-hover:underline decoration-1">{p.title}</h2>
              <p className="text-slate-500 text-[13px] leading-relaxed mb-6 italic">"{p.excerpt}"</p>
              <div className="mt-auto flex items-center text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                Read Story <ArrowRight size={14} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <Mail className="mx-auto mb-8 text-amber-500" size={32} strokeWidth={1.5} />
        <h2 className="text-3xl font-serif italic mb-6">Join Our Global Community</h2>
        <p className="max-w-md mx-auto text-slate-400 text-sm mb-10 leading-relaxed font-light">
          Get weekly trend reports, exclusive shopping guides, and early access to our curated selections.
        </p>
        <div className="max-w-sm mx-auto flex gap-2">
          <input type="email" placeholder="Email Address" className="flex-1 bg-transparent border-b border-slate-700 py-3 text-sm focus:outline-none focus:border-amber-500 transition" />
          <button className="text-[11px] font-black uppercase tracking-widest hover:text-amber-500 transition">Subscribe</button>
        </div>
      </section>

      <footer className="py-20 px-6 border-t bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          <div className="text-xl font-serif font-black italic">MODA SELECTION</div>
          <div className="flex justify-center space-x-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#">About</a>
            <a href="#">Privacy</a>
            <a href="#" className="text-amber-900">Affiliate Disclosure</a>
          </div>
          <div className="flex justify-center md:justify-end space-x-6 text-slate-400">
            <Instagram size={18} /> <Heart size={18} />
          </div>
        </div>
        <div className="mt-16 text-center text-[9px] text-zinc-300 tracking-[0.3em] uppercase">
          © 2024 Moda Selection Media • Powered by Elegance
        </div>
      </footer>
    </div>
  );
}
