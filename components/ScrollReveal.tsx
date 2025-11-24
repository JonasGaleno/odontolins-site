"use client"

import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number // Atraso na animação em segundos
  duration?: number // Duração da animação em segundos
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
  // Outras props de div para manter a flexibilidade
  [key: string]: any 
}

// Configuração das variantes de animação
const getVariants = (delay: number, duration: number, direction: 'up' | 'left' | 'right' | 'none'): Variants => ({
    // Estado inicial (Oculto)
    hidden: {
        opacity: 0,
        y: direction === 'up' ? 30 : 0, 
        x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
    },
    // Estado final (Visível)
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        // 2. A propriedade 'transition' deve estar DENTRO do objeto de estado 'visible'
        transition: { 
            // Usamos a duração e o atraso passados como props
            duration: duration, 
            delay: delay, 
            
            // Configurações de transição mais suaves
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.8,
            ease: "easeOut",
        }
    },
});

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.7, 
  direction = 'up',
  className,
  ...rest
}: ScrollRevealProps) {
  const ref = useRef(null)
  // const isInView = useInView(ref, { once: true, amount: 0.1 }) // 10% do elemento visível
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1, // Tenta detectar quando 50% está visível
  })

  // Ajusta a transição para incluir o delay
  const variants = getVariants(delay, duration, direction);

  return (
    <motion.div
      ref={ref}
      // Passa a direção como 'custom' para que as variantes possam usá-la
      custom={direction}
      variants={variants}
      initial="hidden"
      // Se estiver visível, anima para "visible"
      animate={isInView ? "visible" : "hidden"} 
      className={className}
      // whileInView="visible"
      {...rest}
    >
      {children}
    </motion.div>
  )
}