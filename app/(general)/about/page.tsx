import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Description',
  keywords: ['About Page', 'Clay21c', 'informacion']
}

export default function AboutPage() {
  return <span className='text-5xl'>About Page</span>
}
