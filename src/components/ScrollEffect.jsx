
import { motion, useInView } from 'framer-motion'
import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function ScrollRevealEffect({children}) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <motion.div
      ref={ref}
      className={`transition-all duration-300 delay-200 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      {children}
    </motion.div>
  )
}

ScrollRevealEffect.propTypes = {
  children: PropTypes.node.isRequired,
}

