'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function HeaderLink ({
  href,
  name,
}) {
  const pathname = usePathname();

  return <Link href={href} className={`headerNavLink${
    (href === '/' ? pathname === href : pathname.includes(href)) ? 
    ' active' 
    : 
    ''
  }`}>{name}</Link>
}