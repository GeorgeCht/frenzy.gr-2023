import { createContext, useState } from 'react'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [data, setData] = useState(
    { 
      colors: [
        { id: 1, dark: '#0B0B0D' },
        { id: 2, white: '#F2F2F2' },
      ],
      socialMedia: [
        { id: 1, title: "Instagram",  url: "#" },
        { id: 2, title: "Facebook",   url: "#" },
        { id: 3, title: "Behance",    url: "#" },
        { id: 4, title: "Linked in",  url: "#" },
      ],
      footerLinks: [
        { id: 1, title: "About",          url: "/about" },
        { id: 2, title: "Privacy Policy", url: "/privacy-policy" },
        { id: 3, title: "Cookies Policy", url: "/cookies-policy" },
        { id: 4, title: "Terms of Use",   url: "/terms-of-use" },
      ],
    }
  )

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider