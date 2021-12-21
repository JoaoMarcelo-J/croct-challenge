import html2canvas from 'html2canvas'
import { createContext, ReactNode, useState } from 'react'

interface PreviewProviderProps {
  children: ReactNode
}

interface PreviewContextData {
  previewUrl: string
  getPreview: () => void
}

export const previewContext = createContext({} as PreviewContextData)

export function PreviewProvider({ children }: PreviewProviderProps) {
  const [previewUrl, setPreviewUrl] = useState('')

  const getPreview = async () => {
    const previewImg = await html2canvas(
      document.querySelector('#preview') as HTMLElement
    ).then((canvas) => {
      return canvas.toDataURL()
    })

    setPreviewUrl(previewImg)
  }

  return (
    <previewContext.Provider
      value={{
        previewUrl,
        getPreview
      }}
    >
      {children}
    </previewContext.Provider>
  )
}
