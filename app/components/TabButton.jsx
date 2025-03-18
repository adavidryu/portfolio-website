import React from 'react'

const TabButton = ({ children, selectTab, active }) => {
    return (
        <button
            onClick={selectTab}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                active
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#3a3a3a]'
            }`}
        >
            {children}
        </button>
    )
}

export default TabButton 