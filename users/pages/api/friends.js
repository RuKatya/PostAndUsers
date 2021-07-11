export default function handler(req, res) {
    res.status(200).json( friends )
}

const friends = [
    {
        id: 1,
        name: 'abababa',
        age: 25
    }
]