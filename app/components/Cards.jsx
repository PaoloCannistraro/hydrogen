import {motion, Variants} from 'framer-motion';

function Cards({emoji, hueA, hueB}) {
  const hue = (h) => `hsl(${h}, 100%, 50%)`;

  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  const cardVariants = {
    offscreen: {
      y: 400,
      x: 200,
    },
    onscreen: {
      y: 50,
      x: 50,
      rotate: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once: false, amount: 0.8}}
    >
      <div className="splash" style={{background}} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}

export default Cards;
