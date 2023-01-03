const express = require('express')
const app = express()
const PORT = 8000

const hero = {
    'spider-man': {
        'Alter ego': 'Peter Benjamin Parker',
        'Species': 'Human mutate',
        'Place of origin': 'Queens, New York City',
        'Abilities': [
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
        'Alter ego': [
            'Hank Pym',
            'Scott Lang',
            'Eric O\'Grady',
            'Zayn Asghar'
        ],
        'Abilities': [
            'Super human strength and agility',
            'Leading authority in myrmecology research',
            'Size-shifting from nearly microscopic to gigantic',
            'Maintains strength of normal size in shrunken state'
        ]
    }, 'captain america': {
        'Alter ego': 'Steve Rogers',
        'Species': 'Human mutate',
        'Abilities': [
            'Enhanced strength, speed, stamina, durability, agility, reflexes. senses, and mental processing via the super soldier serum',
            'Master martial artist and hand-to-hand combatant',
            'Accelerated healing',
            'Master tatician, strategist, and field commander',
            'Using vibranium-steel alloy shield'
        ]
    }, 'hulk': {
        'Alter ego': 'Robert Bruce Banner',
        'Species': 'Human mutate',
        'Abilities': {
            'As Bruce Banner': [
                'Genius level intellect',
                'Proficient scientist and engineer'
            ],
            'As Hulk': [
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