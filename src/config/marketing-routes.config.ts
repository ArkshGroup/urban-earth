export interface NavItem {
  name: string
  href: string
  description?: string
  subItems?: NavItem[]
}

export const marketingNavigationMenu: NavItem[] = [
  {
    name: 'HOME',
    href: '/',
  },
  {
    name: 'ABOUT US',
    href: '/about-us',
    subItems: [
      // { name: 'Urban Earth', href: '/our-team' },
      { name: 'Arksh Group', href: 'https://arkshgroup.com/' },
    ],
  },
  {
    name: 'COLLECTIONS',
    href: '/collections',
  },
  { name: 'BLOGS', href: '/blog' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'CONTACT', href: '/contact' },
]
