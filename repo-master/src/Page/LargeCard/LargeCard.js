import React from 'react'
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

export default function LargeCard({ img, title, description, buttonText }) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    api.start({ x: down ? mx : 0, y: down ? my : 0, immediate: down })
  })
  return (
    <animated.div {...bind()} style={{ x, y }} className="cursor-grab">
      <section className="relative py-16 cursor-grab mx-5">
        <animated.div {...bind()} style={{ x, y }} className="relative cursor-grab">
            <img src={img} layout="fill" className="object-cover xl:h-96 lg:h-84 md:h-72  h-72 rounded-2xl w-full pointer-events-none" />
          </animated.div>
        <div className="absolute top-32 left-12">
          <h3 className="text-4xl mb-3 w-64">{title}</h3>
          <p>{description}</p>
          <button className="focus:outline-none text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 transform active:scale-90">{buttonText}</button>
        </div>
      </section>
    </animated.div>
  )
}
