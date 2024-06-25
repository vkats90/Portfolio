import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface HighlightCardProps {
  title: string
  text: string
  link: string
  icon: IconDefinition
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, text, link, icon }) => {
  const navigate = useNavigate()
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  })

  return (
    <div
      ref={ref}
      className={`max-w-sm mx-auto transition duration-500 ease-in h-fit min-h-fit relative my-6 ${
        inView ? 'opacity-1' : 'opacity-0 translate-y-5 blur-sm'
      } rounded-lg overflow-hidden`}
    >
      <FontAwesomeIcon icon={icon} className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <hr className="border-t-2 border-primary my-2" />
        <p className="text-gray-7000 text-base">{text}</p>
      </div>
      <button className="  text-primary hover:text-emerald-800" onClick={() => navigate(link)}>
        Read more
      </button>
    </div>
  )
}

export default HighlightCard
