const messagesRandom = [
    {
        message: 'Liverpool will be the champion of premier league'
    },
    {
        message: 'Manchester City will be the champion of premier league'
    },
    {
        message: 'Arsenal will be the champion of premier league'
    },
    {
        message: 'Manchester United will be the champion of premier league'
    }
]

const randomIndex = Math.floor(Math.random() * messagesRandom.length)

const messageGenerator = index =>{
    return messagesRandom[index].message
}

console.log(messageGenerator(randomIndex));