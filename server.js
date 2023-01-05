const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const hero = {
    'unknown': {
        'error': 'Unknown character'
    },
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
    }, 
    'ant-man': {
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
    }, 
    'captain america': {
        'alterEgo': 'Steve Rogers',
        'species': 'Human mutate',
        'abilities': [
            'Enhanced strength, speed, stamina, durability, agility, reflexes. senses, and mental processing via the super soldier serum',
            'Master martial artist and hand-to-hand combatant',
            'Accelerated healing',
            'Master tatician, strategist, and field commander',
            'Using vibranium-steel alloy shield'
        ]
    }, 
    'daredevil' : {
        'alterEgo': 'Matthew Michael Murdock',
        'species': 'Human mutate',
        'placeOfOrigin': '	Hell\'s Kitchen, New York City',
        'teamAffiliations': [
            'Avengers',
            'New Avengers',
            'Defenders',
            'Marvel Knights',
            'The Chaste',
            'The Hand'
        ],
        'abilities': [
            'Superhuman agility, reflexes, senses, coordination, and balance',
            'Echolocative radar sense',
            'Master martial artist, hand-to-hand combatant, and stick fighter',
            'Expert acrobat and gymnast',
            'Utilizes billy club with multi-purpose functions',
            'Expertise in criminology, criminal law, and police procedures'
        ]
    }, 
    'doctor strange': {
        'alterEgo': 'Stephen Vincent Strange',
        'species': 'Human',
        'teamAffiliations': [
            'Avengers',
            'Defenders',
            'Illuminati',
            'Infinity Watch',
            'Mignight Sons',
            'New Avengers',
            'The Order'
        ],
        'abilities': [
            'Utilizes mystical artifacts, such as the Cloak of Levitation and the Eye of Agamotto',
            'Mastery of magic',
            'Gifted physician and surgeon',
            'Genius-level intellect',
            'Skilled martial artist'
        ]
    },
    'falcon': {
        'alterEgo': 'Samuel Thomas Wilson',
        'teamAffiliations': [
            'Avengers',
            'S.H.I.E.L.D.',
            'Defenders for a Day',
            'Heroes for Hire',
            'Mighty Avengers',
            'Avengers Unity Squad'
        ],
        'abilities': [
            'Empathic and telepathic link with all birds',
            'Flight via wing harness',
            'Skilled martial artist, aerialist, and acrobat',
            'Proficient tactician and strategist',
            'Skilled hand-to-hand combatant',
            'Expert bird trainer'
        ]
    },
    'hawkeye':{
        'alterEgo': 'Clinton Francis Barton',
        'placeOfOrigin': 'Waverly, Iowa',
        'teamAffiliations': [
            'Avengers',
            'Avengers Academy',
            'Defenders',
            'Great Lakes Avengers',
            'New Avengers',
            'Secret Avengers',
            'S.H.I.E.L.D.',
            'Thunderbolts',
            'West Coast Avengers',
            'Wild Pack',
            'World Counter-terrorism',
            'Agency'
        ],
        'partnerships': [
            'Mockingbird',
            'Kate Bishop',
            'Black Widow'
        ],
        'notableAliases': [
            'Golden Archer',
            'Goliath',
            'Ronin'
        ],
        'abilities': [
            'Master archer and marksman',
            'Expert tactician, acrobat, martial artist, and hand-to-hand combatant',
            'Uses a variety of trick arrows'
        ]
    },
    'hulk': {
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
        res.json(hero['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT} you better go catch it`);
})