import React from 'react';
import { ShoppingBag, ArrowRight, Instagram, Search, Mail, Star } from 'lucide-react';

const posts = [
  { id: 1, cat: "FASHION", title: "The 2024 Capsule Wardrobe: 10 Essentials", excerpt: "Master the art of minimalism with our curated list of timeless pieces.", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800" },
  { id: 2, cat: "SHOES", title: "The Best Loafers for Professional Elegance", excerpt: "Step into comfort and style with this season's top-rated footwear.", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800" },
  { id: 3, cat: "BEAUTY", title: "Glass Skin Secrets: A Complete Guide", excerpt: "Achieve a radiant, luminous complexion with these 5 essential steps.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800" },
  { id: 4, cat: "LIFESTYLE", title: "Creating a Sanctuary: Home Decor Trends", excerpt: "Turn your living space into a peaceful retreat with modern aesthetics.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800" },
  { id: 5, cat: "FASHION", title: "Quiet Luxury: Why Less is More in 2024", excerpt: "Explore the understated elegance that is dominating the runways.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" },
  { id: 6, cat: "BEAUTY", title: "Spring Scents: The Best Perfumes This Year", excerpt: "Discover our editors' favorite floral and fresh fragrances for the season.", img: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Announcement */}
      <div className="bg-zinc-100 py-2 text-center text-[10px] font-bold tracking-[0.2em] uppercase border-b">
        Complimentary Global Shipping on Premium Curations
      </div>

      {/* Nav */}
      <nav className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-black italic tracking-tighter">MODA SELECTION</div>
          <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-black">Clothing</a>
            <a href="#" className="hover:text-black">Shoes</a>
            <a href="#" className="hover:text-black">Beauty</a>
            <a href="#" className="hover:text-black">Lifestyle</a>
          </div>
          <div className="flex items-center space-x-5 text-zinc-400">
            <Search size={18} />
            <ShoppingBag size={18} />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-20 text-center px-6">
        <span className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Spring Edit 2024</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-8 max-w-4xl mx-auto">Elevating your daily style with curated precision.</h1>
        <div className="h-[1px] w-20 bg-zinc-300 mx-auto"></div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {posts.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-zinc-100">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[10px] font-black tracking-widest text-amber-800 uppercase">{p.cat}</span>
                <span className="h-[1px] w-4 bg-zinc-200"></span>
              </div>
              <h2 className="text-2xl font-serif mb-3 leading-tight group-hover:text-zinc-500">{p.title}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4 italic">"{p.excerpt}"</p>
              <div className="flex items-center text-[10px] font-bold uppercase tracking-widest border-b border-black w-fit pb-1">
                Read More <ArrowRight size={12} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Trust Section for Affiliate Managers */}
      <section className="bg-zinc-50 py-20 border-y">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Star className="mx-auto mb-6 text-amber-600" size={30} />
          <h2 className="text-3xl font-serif italic mb-6">Expertly Curated Recommendations</h2>
          <p className="text-zinc-500 italic leading-relaxed mb-10">
            Moda Selection is an independent digital publication. We independently research, test, and recommend the best products. When you buy through our links, we may earn an affiliate commission.
          </p>
          <button className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition">
            View Our Editorial Standards
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t bg-white text-center">
        <div className="text-xl font-serif font-black italic mb-8">MODA SELECTION</div>
        <div className="flex justify-center space-x-8 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-10">
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Affiliate Disclosure</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>
        <p className="text-[9px] text-zinc-300 tracking-[0.2em] uppercase">© 2024 Moda Selection Media Group. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
