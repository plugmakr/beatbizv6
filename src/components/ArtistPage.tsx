import React from 'react';
import { useParams } from 'react-router-dom';
import { Music, Play, ShoppingCart, Share2, Heart, Download } from 'lucide-react';

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for the artist
  const artist = {
    id: 'goreocean',
    name: 'Gore Ocean',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Rising star in the electronic music scene, known for deep, atmospheric beats.',
    followers: 15000,
    tracks: 47,
    sales: 1200,
  };

  const featuredTracks = [
    { id: 1, title: 'Ocean Depths', price: 29.99, duration: '3:45', image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 2, title: 'Midnight Waves', price: 34.99, duration: '4:12', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
    { id: 3, title: 'Aquatic Dreams', price: 24.99, duration: '3:58', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-700 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <img src={artist.image} alt={artist.name} className="w-64 h-64 rounded-full object-cover mb-6 md:mb-0 md:mr-8" />
          <div>
            <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
            <p className="text-xl mb-4">{artist.description}</p>
            <div className="flex space-x-4 mb-4">
              <div>
                <span className="font-bold">{artist.followers.toLocaleString()}</span> Followers
              </div>
              <div>
                <span className="font-bold">{artist.tracks}</span> Tracks
              </div>
              <div>
                <span className="font-bold">{artist.sales.toLocaleString()}</span> Sales
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
              Follow
            </button>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6">Featured Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTracks.map((track) => (
            <div key={track.id} className="bg-white bg-opacity-10 rounded-lg overflow-hidden">
              <img src={track.image} alt={track.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{track.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-indigo-300">${track.price}</span>
                  <span>{track.duration}</span>
                </div>
                <div className="flex justify-between">
                  <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300">
                    <Play size={16} className="mr-2" /> Play
                  </button>
                  <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
                    <ShoppingCart size={16} className="mr-2" /> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <button className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300">
            <Music size={20} className="mr-2" /> View All Tracks
          </button>
          <button className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300">
            <Share2 size={20} className="mr-2" /> Share Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;