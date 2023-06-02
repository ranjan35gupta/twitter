import React from 'react'
import LeftSection from './LeftSection/LeftSection'
import MiddleSection from './MiddleSection/MiddleSection'
import RightSection from './RightSection/RightSection'

function HomePage() {
  return (
    <div>
      {/* This is Home Page. */}
      <LeftSection/>
      <MiddleSection/>
      <RightSection/>
    </div>
  )
}

export default HomePage
