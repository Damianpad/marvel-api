const express = require('express')
const app = express()
const PORT = 8000

const hero = {
    'spider-man': {
        'alterEgo': 'Peter Benjamin Parker',
        'species': 'Human mutate',
        'placeOfOrigin': 'Queens, New York City',
        'abilities': [
            'Super human strength',
            'Ability to cling to solid surfaces and ceilings',
            'Accelerated healing',
            'Geinus level intellect',
            'Proficient scientist and engineer',
            'Precognitive spider-sense ability',
            'Utilizing wrist-mounted web-shooters',
            'Master martial artist and hand-to-hand combatant'
        ]
    }, 'ant-man': {
        'alterEgo': [
            'Hank Pym',
            'Scott Lang',
            'Eric O\'Grady',
            'Zayn Asghar'
        ],
        'abilities': [
            'Super human strength and agility',
            'Leading authority in myrmecology research',
            'Size-shifting from nearly microscopic to gigantic',
            'Maintains strength of normal size in shrunken state'
        ]
    }, 'captain america': {
        'alterEgo': 'Steve Rogers',
        'species': 'Human mutate',
        'abilities': [
            'Enhanced strength, speed, stamina, durability, agility, reflexes. senses, and mental processing via the super soldier serum',
            'Master martial artist and hand-to-hand combatant',
            'Accelerated healing',
            'Master tatician, strategist, and field commander',
            'Using vibranium-steel alloy shield'
        ]
    }, 'hulk': {
        'alterEgo': 'Robert Bruce Banner',
        'species': 'Human mutate',
        'abilities': {
            'asBruceBanner': [
                'Genius level intellect',
                'Proficient scientist and engineer'
            ],
            'asHulk': [
                'Superhuman strength, speed, stamina, and durability',
                'Anger empowerment',
                'Regeneration',
                'Shockwave generation',
                'Gamma ray emission and manipulation'
            ]
        }
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:heroName', (req, res) => {
    const herosName = req.params.heroName.toLowerCase()
    if (hero[herosName]){
        res.json(hero[herosName])
    } else {
        res.json(hero['ant-man'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT} you better go catch it`);
})