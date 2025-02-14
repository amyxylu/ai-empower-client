import React from 'react'
// import ResultsPageCard from "./ResultsPageCard.scss"

function ResultsPageCard({id}) {
  return (
      <div className='results-contents'>
          <p className='results-contents-para'>Tool Name:</p>
          <p className='results-contents-para'>Description:</p>
          <p className='results-contents-para'>Uses:</p>
      </div>
  )
}

export default ResultsPageCard