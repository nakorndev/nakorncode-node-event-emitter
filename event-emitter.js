const EventEmitter = require('events')

class DelayToSuccess extends EventEmitter {
    constructor(ms) {
        super()
        setTimeout(() => {
            this.emit('success', 'beginning...')
        }, 10)
        setTimeout(() => {
            this.emit('success', 'processing...')
        }, ms)
        setTimeout(() => {
            this.emit('end')
        }, ms + 1000)
    }
}

const delay = new DelayToSuccess(5000)

// element.addEventListener('event', () => {})
delay.on('success', (message) => {
    console.log('Success!', message)
})

delay.on('end', () => {
    console.log('End!')
})
