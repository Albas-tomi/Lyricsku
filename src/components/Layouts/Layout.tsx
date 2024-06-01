import React from 'react'

type Props = {
    children : React.ReactNode;
}
const Layout = (props:Props) => {
    const {children}=props
  return (
    <main>
      {children}
    </main>
  )
}

export default Layout
