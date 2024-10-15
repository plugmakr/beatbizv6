import React from 'react'
import { Music } from 'lucide-react'

const Logo = () => {
  return (
    <div className="flex items-center">
      <Music size={32} className="text-white mr-2" />
      <span className="text-2xl font-bold text-white">BeatBiz Pro</span>
    </div>
  )
}

export default Logo