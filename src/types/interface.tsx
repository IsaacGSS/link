export interface Iheader {
  srcHeader: string
  altHeader: string
  description?: string
  title: string
}

export interface Ilink {
  urlLink: string
  children: React.ReactNode
}

export interface Ilinks {
  children: React.ReactNode
}