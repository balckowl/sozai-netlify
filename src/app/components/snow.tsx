"use client"

import Snowfall from 'react-snowfall';

export default function Snow() {
  return (
    <div>
      <Snowfall style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
      }}
        snowflakeCount={50}
      />
    </div>
  )
}
