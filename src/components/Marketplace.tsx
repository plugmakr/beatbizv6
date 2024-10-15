import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Search, ChevronRight, Music, DollarSign, Globe, BarChart2 } from 'lucide-react';

const Marketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const quickTags = ['Hip Hop', 'R&B', 'Pop', 'Electronic', 'Rock', 'Jazz'];

  const spotlightArtist = {
    id: 'goreocean',
    name: 'Gore Ocean',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Rising star in the electronic music scene, known for deep, atmospheric beats.',
  };

  const newBeats = [
    { id: 1, title: 'Summer Vibes', artist: 'DJ Sunshine', price: 29.99, image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 2, title: 'Urban Nights', artist: 'Metro Beats', price: 34.99, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 3, title: 'Chill Wave', artist: 'LoFi Master', price: 24.99, image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 4, title: 'Trap Kingdom', artist: 'Bass God', price: 39.99, image: 'https://images.unsplash.com/photo-1509335919466-c0ad32f28673?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 5, title: 'Electro Pulse', artist: 'Synth Queen', price: 29.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 6, title: 'Jazzy Nights', artist: 'Smooth Sax', price: 27.99, image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 7, title: 'Rock Anthem', artist: 'Guitar Hero', price: 32.99, image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 8, title: 'Dreamy Pop', artist: 'Melody Maker', price: 26.99, image: 'https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 9, title: 'Future Bass', artist: 'Waveform', price: 36.99, image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 10, title: 'Reggae Vibes', artist: 'Island Grooves', price: 23.99, image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
  ];

  const upAndComing = [
    { id: 1, title: 'Neon Dreams', artist: 'Synth Master', price: 24.99, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 2, title: 'Acoustic Serenity', artist: 'Melody Maker', price: 19.99, image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 3, title: 'Future Funk', artist: 'Groove Rider', price: 29.99, image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 4, title: 'Dreamy Pop', artist: 'Cloud Walker', price: 22.99, image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 5, title: 'Heavy Riffs', artist: 'Metal Master', price: 34.99, image: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 6, title: 'Ambient Waves', artist: 'Chill Vibes', price: 21.99, image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 7, title: 'Latin Heat', artist: 'Salsa King', price: 28.99, image: 'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 8, title: 'Dubstep Madness', artist: 'Bass Drop', price: 31.99, image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 9, title: 'Indie Folk', artist: 'Acoustic Dreams', price: 23.99, image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 10, title: 'Techno Pulse', artist: 'Circuit Breaker', price: 33.99, image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
  ];

  const genres = [
    { id: 1, name: 'Hip Hop', image: 'https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 2, name: 'R&B', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 3, name: 'Pop', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 4, name: 'Electronic', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 5, name: 'Rock', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 6, name: 'Jazz', image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">BeatBiz Marketplace</h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex items-center bg-white rounded-full p-2">
            <input
              type="text"
              placeholder="Search for beats, artists, or genres..."
              className="flex-grow bg-transparent text-gray-800 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="bg-indigo-600 text-white p-2 rounded-full">
              <Search size={20} />
            </button>
          </div>
        </form>

        {/* Quick Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {quickTags.map((tag, index) => (
            <button key={index} className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-full transition duration-300">
              {tag}
            </button>
          ))}
        </div>

        {/* Spotlight Artist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Spotlight Artist</h2>
          <Link to={`/artist/${spotlightArtist.id}`} className="block">
            <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden flex items-center">
              <img src={spotlightArtist.image} alt={spotlightArtist.name} className="w-48 h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{spotlightArtist.name}</h3>
                <p className="text-indigo-300 mb-4">{spotlightArtist.description}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </Link>
        </section>

        {/* New Beats */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">New Beats</h2>
          <Slider {...sliderSettings}>
            {newBeats.map((beat) => (
              <div key={beat.id} className="px-2">
                <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                  <img src={beat.image} alt={beat.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold">{beat.title}</h3>
                    <p className="text-sm">{beat.artist}</p>
                    <p className="text-indigo-300">${beat.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Up and Coming */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Up and Coming</h2>
          <Slider {...sliderSettings}>
            {upAndComing.map((beat) => (
              <div key={beat.id} className="px-2">
                <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                  <img src={beat.image} alt={beat.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold">{beat.title}</h3>
                    <p className="text-sm">{beat.artist}</p>
                    <p className="text-indigo-300">${beat.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Genres */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Popular Genres</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {genres.map((genre) => (
              <div key={genre.id} className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
                <img src={genre.image} alt={genre.name} className="w-full h-32 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="font-bold">{genre.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/genres" className="inline-flex items-center text-indigo-300 hover:text-indigo-100">
              See More Genres <ChevronRight size={20} />
            </Link>
          </div>
        </section>

        {/* For Sellers */}
         <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">For Sellers</h2>
            <p className="mb-6">Join BeatBiz Marketplace as a seller and take your music production career to the next level!</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Showcase your beats to a global audience</li>
              <li>Set your own prices and licensing terms</li>
              <li>Receive secure payments and manage your earnings</li>
              <li>Get valuable insights and analytics on your sales</li>
            </ul>
            <Link to="/seller-signup" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition duration-300">
              Become a Seller
            </Link>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">For Artists</h2>
            <p className="mb-6">Discover the perfect beats for your next hit and collaborate with talented producers!</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Access a wide variety of high-quality beats</li>
              <li>Easy licensing process for your projects</li>
              <li>Connect and collaborate with producers directly</li>
              <li>Find the perfect sound for your next hit</li>
            </ul>
            <Link to="/artist-signup" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition duration-300">
              Join as an Artist
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Marketplace;