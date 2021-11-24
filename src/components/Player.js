import { useState } from "react"

const Player = () => {

    const [music, setmusic] = useState(false)
    const [soundMute, setSoundMute] = useState(false)

    const isPlaying = () => {
        setmusic(!music)
        console.log(music)
    }

    const back = () => {
        console.log('back')
    }

    const skip = () => {
        console.log('skip')
    }

    const mute = () => {
        setSoundMute(!soundMute)
        console.log(soundMute)
    }

    const volumeSlider = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <div className="soundprogression">
            <input type="range"></input>
            </div>
            <div className="playercontrols">
                {music ?
                    <button onClick={isPlaying}>pause</button>
                    :
                    <button onClick={isPlaying}>play</button>
                }
                <button onClick={back}>back</button>
                <button onClick={skip}>skip</button>
                <button onClick={mute}>audio</button>
                <input type="range" onChange={volumeSlider}></input>
            </div>
        </div>
    )
}

export default Player;