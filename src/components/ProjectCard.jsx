import React from 'react'

export default function ProjectCard({title, desc, link}){
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mt-1">{desc}</p>
      </div>
      <div className="ml-4">
        {link && link !== '#' ? (
          <a href={link} target="_blank" rel="noreferrer" className="inline-block px-3 py-2 border rounded-md text-sm">View</a>
        ) : null}
      </div>
    </div>
  )
}