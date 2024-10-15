import React, { useState } from 'react'
import { Youtube, MessageCircle, TrendingUp, RefreshCw } from 'lucide-react'

const SocialMedia = () => {
  const [activeTab, setActiveTab] = useState('youtube')

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Social Media Management</h1>
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('youtube')}
          className={`mr-4 px-4 py-2 rounded ${activeTab === 'youtube' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
        >
          YouTube
        </button>
        <button
          onClick={() => setActiveTab('tiktok')}
          className={`px-4 py-2 rounded ${activeTab === 'tiktok' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
        >
          TikTok
        </button>
      </div>
      {activeTab === 'youtube' ? <YouTubePanel /> : <TikTokPanel />}
    </div>
  )
}

const YouTubePanel = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">YouTube Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard icon={<Youtube size={24} />} title="Total Views" value="1,234,567" />
        <MetricCard icon={<MessageCircle size={24} />} title="New Comments" value="42" />
        <MetricCard icon={<TrendingUp size={24} />} title="Subscriber Growth" value="+123" />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Recent Comments</h3>
        <CommentList />
      </div>
    </div>
  )
}

const TikTokPanel = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">TikTok Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard icon={<RefreshCw size={24} />} title="Total Views" value="5,678,901" />
        <MetricCard icon={<MessageCircle size={24} />} title="New Comments" value="87" />
        <MetricCard icon={<TrendingUp size={24} />} title="Follower Growth" value="+456" />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Recent Comments</h3>
        <CommentList />
      </div>
    </div>
  )
}

const MetricCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <div className="text-indigo-600">{icon}</div>
      <span className="text-2xl font-bold">{value}</span>
    </div>
    <h3 className="text-gray-600">{title}</h3>
  </div>
)

const CommentList = () => {
  const comments = [
    { id: 1, user: 'MusicLover123', content: 'Great beat! Can\'t wait to hear more!', timestamp: '2 hours ago' },
    { id: 2, user: 'ProducerGuy', content: 'What DAW did you use for this?', timestamp: '5 hours ago' },
    { id: 3, user: 'BeatFanatic', content: 'This is fire! 🔥🔥🔥', timestamp: '1 day ago' },
  ]

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li key={comment.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold">{comment.user}</p>
              <p className="text-gray-600">{comment.content}</p>
            </div>
            <span className="text-sm text-gray-500">{comment.timestamp}</span>
          </div>
          <div className="mt-2">
            <button className="text-indigo-600 mr-2">Reply</button>
            <button className="text-gray-500">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SocialMedia