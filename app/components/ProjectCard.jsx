import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, tags, featured }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {featured && (
            <span className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/20 rounded-full">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-gray-300 bg-[#2a2a2a] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity duration-300 text-center"
            >
              View Code
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors duration-300 text-center"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard