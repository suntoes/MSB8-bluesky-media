import { motion } from 'framer-motion'

const getDirection = str => {
  // left default
  let result = { x: -50 }

  switch (str) {
    case 'right':
      result = { x: 50 }
      break
    case 'up':
      result = { y: -50 }
      break
    case 'down':
      result = { y: 50 }
      break
    case 'none':
      result = {}
      break
    default:
      break
  }
  return { ...result }
}

const Delayed = ({
  key,
  from,
  fromOpaque = true,
  delay,
  children,
  onView,
  hoverable,
  style,
  whileHover,
  whileTap
}) => {
  const animate = { x: 0, y: 0, opacity: 1 }
  const defaultTransition = { duration: 0.2, delay: 0 }
  const transition = { duration: 0.8, delay: delay || 0 }
  const animateProps = onView
    ? { whileInView: { ...animate, transition } }
    : { animate, transition }

  return (
    <motion.div
      key={key}
      initial={{ ...getDirection(from), opacity: fromOpaque ? 0 : 1 }}
      {...animateProps}
      exit={{ ...getDirection(from), opacity: 0 }}
      whileHover={
        whileHover
          ? { ...whileHover, transition: defaultTransition }
          : { y: hoverable ? -20 : 0 }
      }
      whileTap={
        whileTap ? { ...whileTap, transition: defaultTransition } : null
      }
      viewport={{ once: true, amount: 0.8 }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
export default Delayed
