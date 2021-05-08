import React, { useEffect } from 'react'

const Main = () => {
    useEffect(() => {
        window.addEventListener("keydown", (event) => {
            if (event.shiftKey && event.code == 'KeyN') {
                alert('Open New Tab')
            }
            if (event.shiftKey && event.code == 'KeyE') {
                alert('Exit')
            }
        })
        return () => {
            window.removeEventListener("keydown", (event) => {
                if (event.shiftKey && event.code == 'KeyN') {
                    alert('Open New Tab')
                }
                if (event.shiftKey && event.code == 'KeyE') {
                    alert('Exit')
                }
            })
        }
    }, [])
    return (
        <div>
            Added events for Shift+N &amp; Shift+E
        </div>
    )
}

export default Main
