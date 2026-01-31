import { motion } from 'framer-motion'

export default function Button({ variant = 'primary',children = 'Button', onClick, className = '' }) {
  
  // Create your base style
  const baseStyle = 'px-4 py-2 rounded-lg font-medium transition-colors duration-200 ease-in '

  // Create your varients
  const varients = {
      primary: 'bg-[#18181B] text-[#FAFAFA] hover:bg-[#18181B]/95 dark:bg-[#FAFAFA] dark:text-[#18181B] dark:hover:bg-[#FAFAFA]/85 focus:ring-[#18181B]/60 dark:focus:ring-[#FAFAFA]/60',
      secondary: 'bg-[#F4F4F5] text-[#18181B] hover:bg-[#F4F4F5]/80 dark:bg-[#27272A] dark:text-[#F7F8F8] dark:hover:bg-[#27272A]/85 focus:ring-[#18181B]/60 dark:focus:ring-[#F7F8F8]/60',
      outline: 'bg-[#FFFFFF] text-[#09090B] border border-[#E4E4E7] dark:bg-[#09090B] dark:text-[#F7F8F8] dark:border dark:border-[#27272A] ring-none',
      danger: 'bg-[#FFF0F0] text-[#E60000] dark:bg-[#2D0607] dark:text-[#FF9EA1] hover:bg-[#E60000]/30 dark:hover:bg-[#FF9EA1]/30 focus-ring-[#E60000]/70 dark:focus:ring-[FF9EA1]/70',
      success: 'bg-[] text-[] hover:bg-[] focus:ring-[] dark:bg-[] dark:text-[] dark:hover-bg-[] dark:focus-ring-[]',
      warning: 'bg-[#FFFCF0] text-[#DC7609] hover:bg-[#DC7609]/30 focus:ring-[#DC7609]/70 dark:bg-[#1D1F00] dark:text-[#F3CF58] dark:hover-bg-[#F3CF58]/30 dark:focus-ring-[#F3CF58]/70',
 
  }
  
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${baseStyle} ${varients[variant]} ${className} `}
    >
      {children}
    </motion.button>
  )
}
