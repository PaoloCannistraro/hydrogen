import React, {useState} from 'react';
import chunk from 'lodash/chunk';
import {motion, Variants} from 'framer-motion';
import Cards from './Cards';

function HomepageLanding() {
  const [counter, setCounter] = useState(0);

  const styles = {
    width: '20px',
    height: '20px',
    background: 'black',
    float: 'left',
    textAlign: 'center',
  };

  const styleButton = {
    opacity: '0.2',
    width: '50px',
    height: '50px',
  };
  const food = [
    ['🍅', 340, 10],
    ['🍊', 20, 40],
    ['🍋', 60, 90],
    ['🍐', 80, 120],
    ['🍏', 100, 140],
    ['🫐', 205, 245],
    ['🍆', 260, 290],
    ['🍇', 290, 320],
  ];
  const colors = [
    '#d33434',
    '#d4f411',
    '#db8834',
    '#d45e34',
    '#d45e34',
    '#d41134',
    '#d45e34',
    '#d45555',
    '#d45e34',
    '#d42234',
    '#d44344',
    '#d45e34',
    '#d42234',
    '#fff342',
    '#d45e34',
    '#d67cc4',
    '#dccb34',
    '#d45e34',
    '#ee2322',
    '#ff3222',
    '#d4cc52',
    '#d45222',
    '#11ffe2',
    '#d45e34',
    '#d45e34',
  ];

  return (
    <>
      <div className="background-home">
        {chunk(new Array(720).fill(0), 24).map((item, itemIndex) => {
          return (
            <div key={itemIndex} className="row" style={{height: '50px'}}>
              {item.map((col) => (
                <motion.button
                  className="box"
                  key={col.index}
                  // style={styleButton}
                  style={{
                    styleButton,
                    width: '50px',
                    height: '50px',
                    background: colors[itemIndex],
                  }}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div className="cards">
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
        />
        {food.map(([emoji, hueA, hueB]) => (
          <Cards emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
    </>
  );
}

export default HomepageLanding;
