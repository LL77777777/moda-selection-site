import React from 'react';
import { ShoppingBag, ArrowRight, Instagram, Search, Mail, Star, Globe, ChevronDown } from 'lucide-react';

const articles = [
  { id: 1, tag: "EDITORIAL", title: "The 2026 Capsule: Minimalist Mastery", desc: "Redefining modern elegance through sustainable fabrics and timeless silhouettes.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" },
  { id: 2, tag: "FOOTWEAR", title: "Sculptural Soles: The New Form", desc: "Discover why artisanal footwear is the most significant investment for your wardrobe this season.", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800" },
  { id: 3, tag: "BEAUTY", title: "Bio-Tech Beauty: Beyond the Surface", desc: "The intersection of high-science and skincare—achieving long-term cellular radiance.", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800" },
  { id: 4, tag: "LIFESTYLE", title: "Curated Spaces: The Zen Aesthetic", desc: "Transforming your living environment into a sanctuary of mindful design and calm.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=800" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1C1C1C] font-sans selection:bg-stone-200">
      {/* 2026 Modern Top Bar */}
      <div className="bg-white border-b border-stone-100 py-3 px-6 flex justify-between items-center text-[10px] font-medium tracking-[0.2em] uppercase">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Globe size={12}/> Global Edition</span>
          <span className="text-stone-300">|</span>
          <span>March 11, 2026</span>
        </div>
        <div className="hidden sm:block underline decoration-stone-200">Free Curated Shipping on Orders Over $250</div>
      </div>

      {/* Hero Logo Section */}
      <nav className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tighter italic mb-8">MODA SELECTION</h1>
          <div className="flex space-x-12 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
            <a href="#" className="hover:text-black transition-colors">Fashion</a>
            <a href="#" className="hover:text-black transition-colors">Shoes</a>
            <a href="#" className="hover:text-black transition-colors">Beauty</a>
            <a href="#" className="hover:text-black transition-colors italic text-amber-900">Affiliate Edit</a>
          </div>
        </div>
      </nav>

      {/* Featured Large Cover */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="relative group cursor-pointer overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000" 
            className="w-full h-[70vh] object-cover transition-transform duration-[2s] group-hover:scale-105"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-12 left-12 text-white max-w-xl">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">Season Feature</span>
            <h2 className="text-4xl md:text-6xl font-serif italic leading-none mb-6 text-white">The Future of Conscious Luxury</h2>
            <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-b border-white pb-2 hover:gap-6 transition-all">
              Explore the story <ArrowRight size={14}/>
            </button>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
                <img src={item.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={item.title} />
              </div>
              <span className="text-[9px] font-black tracking-widest text-amber-900 uppercase mb-3 block">{item.tag}</span>
              <h3 className="text-xl font-serif mb-3 leading-tight group-hover:text-stone-500">{item.title}</h3>
              <p className="text-stone-400 text-xs leading-relaxed mb-6 font-light italic">"{item.desc}"</p>
              <div className="flex items-center text-[10px] font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                Read More <ArrowRight size={12} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Affiliate Trust Section */}
      <section className="bg-stone-100 py-32 px-6 border-y border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <Star className="mx-auto mb-8 text-stone-300" size={40} strokeWidth={1}/>
          <h2 className="text-3xl font-serif italic mb-8 underline decoration-stone-300 underline-offset-8">Editorial Transparency</h2>
          <p className="text-stone-500 text-sm leading-loose mb-12 italic">
            Moda Selection provides independent, expertly-vetted reviews of lifestyle products. We curate only what we love. Please note that we may earn a commission when you purchase through our links, supporting our high-standard journalism at no extra cost to you.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest">Our Standards</button>
            <button className="border border-stone-300 px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white text-center">
        <div className="text-2xl font-serif font-black italic mb-10 tracking-tighter">MODA SELECTION</div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-12">
          <a href="#" className="hover:text-black">Privacy Policy</a>
          <a href="#" className="hover:text-black">Terms of Service</a>
          <a href="#" className="hover:text-black">Affiliate Disclosure</a>
          <a href="#" className="hover:text-black">Editorial Policy</a>
        </div>
        <p className="text-[8px] text-stone-300 tracking-[0.4em] uppercase">© 2026 Moda Selection Media. Curating the Future.</p>
      </footer>
    </div>
  );
}
