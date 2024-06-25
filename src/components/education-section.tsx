import React from 'react'
import { InView } from 'react-intersection-observer'
interface SectionType {
  facility: string
  certificate?: string
  period: string
  description?: React.ReactNode
  logo: string
}

const EducationSection: React.FC<SectionType> = ({
  facility,
  certificate,
  period,
  description,
  logo,
}) => {
  return (
    <InView triggerOnce={true} rootMargin="-100px 0px">
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`flex my-4 flex-col md:flex-row  p-6 rounded-lg mb-4 w-[90%] md:w-[50%] m-auto transition ease-in duration-500 ${
            inView ? 'opacity-1' : 'opacity-0 translate-y-5 blur-sm'
          }`}
        >
          <div className="flex-shrink-0 md:w-12 md:h-12 w-12 h-12  rounded-full overflow-hidden">
            {logo && (
              <img src={logo} alt={`${facility} logo`} className="w-full h-full object-cover" />
            )}
          </div>
          <div className="md:ml-6 mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold text-gray-800">{facility}</h2>
            <h3 className="text-xl text-gray-600">{certificate}</h3>
            <span className="text-sm text-gray-500">{period}</span>
            <div className="mt-2 text-gray-700">{description}</div>
          </div>
        </div>
      )}
    </InView>
  )
}

export default EducationSection
