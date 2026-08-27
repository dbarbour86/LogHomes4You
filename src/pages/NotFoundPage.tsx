import React from 'react';
import { useSEO } from '../hooks/useSEO';

export default function NotFoundPage() {
  useSEO({
    title: "Page Not Found | King's Cabins",
    description: "The page you are looking for does not exist.",
    noindex: true
  });

  return (
    <div className="min-h-screen bg-forest flex items-center justify-center pt-24 pb-12">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-amber mb-4">404</h1>
        <p className="text-white/80 text-xl mb-8">This page could not be found.</p>
        <a href="/" className="inline-block bg-amber text-forest px-8 py-3 font-semibold hover:bg-amber/90 transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}
