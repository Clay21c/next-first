'use client'
import style from './ActiveLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  path: string
  text: string
}
export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname()
  return (
    <Link
      href={path}
      className={`${style.link} ${pathName === path && style['active-link']}`}
    >
      {text}
    </Link>
  )
}
