'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { usePathname } from 'next/navigation'
import { marketingNavigationMenu } from '@/config/marketing-routes.config'
import { AuroraText } from '@/components/animation/aural-text'

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    const pathName = usePathname()
    const isActive = pathName === props.href
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            target="_blank"
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground hover:text-primary',
              className,
            )}
            {...props}
          >
            <div
              className={cn('text-sm font-medium leading-none text-nowrap', {
                'text-primary': isActive,
              })}
            >
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)

  const pathName = usePathname()

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setOpenMobileSubmenu(null)
    }
  }, [isMobileMenuOpen])

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        staggerChildren: 0.05, // Reduced stagger for faster mobile feel
        delayChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  // Variants for collapsible submenu content in mobile
  const mobileSubmenuContentVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeOut' as const },
    },
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeIn' as const,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const mobileSubmenuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  }

  const navContentItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0     isolate w-full z-9999 border-b py-2 bg-white   transition-all duration-500`}
        initial="hidden"
        animate="visible"
      >
        <div className="  px-4 sm:px-0 sm:max-w-7xl mx-auto ">
          <div className="flex h-16 items-center justify-between">
            <motion.div className="flex items-center space-x-3" whileHover={{ scale: 1.02 }}>
              <Link href="/" className="flex text-nowrap items-center space-x-3">
                <span className=" text-4xl font-bold z-9 ">
                  Urban<AuroraText>Earth</AuroraText>
                </span>
                {/* <Image
                  src={NirvanaLogo}
                  alt="Nirvana Logo"
                  width={150}
                  height={76}
                  sizes="(max-width: 768px) 100px, 150px"
                  style={{ height: 'auto', width: '150px' }}
                  priority
                  quality={60} // Lower quality for better compression
                /> */}
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <NavigationMenu aria-label="Breadcrumb" className="hidden lg:flex">
              <NavigationMenuList className=" ">
                {marketingNavigationMenu.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(navigationMenuTriggerStyle(), 'group')}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <motion.ul
                            className="grid grid-cols-1 gap-3 p-4 md:w-[400px] lg:w-fit lg:grid-cols-[.1fr_1fr] "
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: { opacity: 0, y: -10 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  staggerChildren: 0.05,
                                },
                              },
                            }}
                          >
                            {item.subItems.map((subItem) => (
                              <motion.div
                                key={subItem.name}
                                className=" col-span-1"
                                variants={navContentItemVariants}
                              >
                                <ListItem href={subItem.href} title={subItem.name}>
                                  {subItem.description}
                                </ListItem>
                              </motion.div>
                            ))}
                          </motion.ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(navigationMenuTriggerStyle(), {
                            ' text-primary': pathName === item.href,
                          })}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <motion.button
              className="text-foreground hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-yellow-400" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-yellow-400" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="border-border bg-background fixed top-16 right-4 z-9999 w-80 overflow-hidden rounded-2xl border shadow-2xl lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              id="mobile-navigation-menu"
            >
              <nav aria-label="Breadcrumb" className="space-y-6 p-6">
                <div className="space-y-1">
                  {marketingNavigationMenu.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      {item.subItems ? (
                        <>
                          <button
                            className="text-foreground hover:bg-muted flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors duration-200"
                            onClick={() =>
                              setOpenMobileSubmenu(
                                openMobileSubmenu === item.name ? null : item.name,
                              )
                            }
                          >
                            <span className=" flex items-center">
                              {item.name}
                              {item.subItems && <ChevronDown />}
                            </span>

                            <motion.span
                              animate={{
                                rotate: openMobileSubmenu === item.name ? 180 : 0,
                              }}
                              transition={{ duration: 0.2 }}
                            ></motion.span>
                          </button>
                          <AnimatePresence initial={false}>
                            {openMobileSubmenu === item.name && (
                              <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={mobileSubmenuContentVariants}
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-1 space-y-1 border-l border-muted-foreground/30 pl-4">
                                  {item.subItems.map((subItem) => (
                                    <motion.div
                                      key={subItem.name}
                                      variants={mobileSubmenuItemVariants}
                                    >
                                      <Link
                                        href={subItem.href}
                                        className="text-muted-foreground hover:bg-muted block rounded-lg px-4 py-2 text-sm transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-foreground hover:bg-muted block rounded-lg px-4 py-3 font-medium transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
