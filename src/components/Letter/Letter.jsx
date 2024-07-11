import { useState, useEffect } from 'react';
import './Letter.css'
export default function Letter({ letter, id }) {
    const [animation, setAnimation] = useState(false)

    const addAnimation = () => {
        setAnimation(true)
        setTimeout(() => setAnimation(false), 800)
    }

    useEffect(() => {
        const tag = document.getElementById(id)
        tag.addEventListener('mouseover', addAnimation)
        return () => { tag.removeEventListener('mouseover', addAnimation) }
    }, [])
    return <p id={id} className={`letter__text ${animation && 'letter__text_animation'}`}>{letter}</p>
}