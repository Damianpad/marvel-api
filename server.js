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
    },
    'human torch': {
        'img': 'https://upload.wikimedia.org/wikipedia/en/c/c7/Human_Torch_%28Johnny_Storm%29.png',
        'alterEgo': 'Johnny Storm',
        'species': 'Human mutate',
        'placeOfOrigin': 'Glenville, New York',
        'teamAffiliations': [
            'Fantastic Four',
            'Avengers',
            'Future Foundation',
            'Fantastic Force',
            'Fantastic Four Incorporated',
            'Avengers unity Division'
        ],
        'notableAliases': 'Invisible Man',
        'abilities': [
            'Pyrokinesis',
            'Fiery form that enables flight, serves as damage shield',
            'Heat energy absorption',
            'Resistance to extreme heat'
        ]
    },
    'invisible Woman': {
        'alterEgo': 'Susan Storm Richards',
        'species': 'Human mutate',
        'placeOfOrigin': 'Long Island',
        'teamAffiliations': [
            'Fantastic Four',
            'Avengers',
            'Lady Liberators',
            'Fantastic Four Incorporated',
            'Future Foundation',
            'Seven Brides Of Set',
            'Daughters of Liberty'
        ],
        'notableAliases': [
            'Invisible Girl',
            'Captain Universe',
            'Susan Benjamin',
            'Malice',
            'Mistress of Hate',
            'Baroness Von Doom',
            'Tabitha Deneuve'
        ],
        'abilities': [
            'Self-invisibility',
            'Projective invisibility',
            'Invisible force field projection',
            'Generation of protective invisible shields',
            'Generation of invisible energy constructs',
            'Power to control and manipulate objects',
            'Telepathic immunity',
            'Flight'
        ]
    },
    'iron man': {
        'img': 'https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png',
        'alterEgo': 'Anthony Edward Stark',
        'species': 'human',
        'placeOfOrigin': 'Long Island, New York',
        'teamAffiliations': [
            'Avengers',
            'A.I. Army',
            'Department of Defense',
            'Force Works',
            'New Avengers',
            'Guardians of the Galaxy',
            'Illuminati',
            'Mighty Avengers',
            'S.H.I.E.L.D',
            'Stark Industries',
            'Stark Resilient'
        ], 
        'partnerships': [
            'War Machine',
            'Pepper Pots',
            'Captain America'
        ],
        'abilities': [
            'Proficient scientist and engineer',
            'Genius level intellect',
            'Powered armor suit granting' [
                'Superhuman strength, speed, durability, agility, reflexes, and senses',
                'Energy repulsor and missile projection',
                'Regenerative life support',
                'Supersonic flight'
            ]
        ]
    },
    'jessica jones': {
        'img': 'https://upload.wikimedia.org/wikipedia/en/6/6e/Jessica_Jones_by_Mike_Mayhew.jpg',
        'alterEgo': 'Jessica Campbell Jones Cage',
        'species': 'Human mutate',
        'teamAffiliations': [
            'New Avengers',
            'Defenders',
            'The Pulse Magazine',
            'A-Force',
            'Alias Private Investigations',
            'Daily Bugle'
        ],
        'partnerships':[
            'Luke Cage',
            'Carol Danvers'
        ],
        'notableAliases': [
            'Jewl',
            'Knightress',
            'Power Woman'
        ],
        'abilities': [
            'Superhuman strength and durability',
            'Accelerated healing factor',
            'Skilled hand-to-hand combatant',
            'Psionic Resistance',
            'Flight',
            'Expert detective'
        ]
    },
    'miles morales': {
        'img': 'https://upload.wikimedia.org/wikipedia/en/1/1f/Spider-Man_%28Miles_Morales%29.jpg',
        'alterEgo': 'Miles Gonzalo Morales',
        'species': 'Human mutate',
        'placeOfOrigin': 'Brooklyn, New York City',
        'teamAffiliations': [
            'Avengers',
            'Young Avengers',
            'Champions',
            'The Ultimates',
            'Spider-Army/Web-Warriors'
        ],
        'partnerships':[
            'Peter Parker/Spider-Man',
            'Gwen Stacy/Spider-Woman',
            'Kamala Khan/ Ms. Marvel',
            'Nova/Sam Alexander'
        ],
        'Notable Aliases': [
            'Kid Arachnid',
            'Caprain Universe',
            'Spin'
        ],
        'abilities': [
            'Superhuman strength, speed, agility, and reflexes',
            'Ability to cling to solid surfaces',
            'Camouflage (invisibility)',
            'Venom strike/venom blast',
            'Bio-electric energy threads produced from fingers',
            'Precognitive spider-sense ability',
            'Resistance to injury',
            'Wrist-mounted web-shooters'
        ]
    },
    'quicksilver': {
        'img': 'https://upload.wikimedia.org/wikipedia/en/7/7c/Quicksilver_%28Marvel_universe_character%29_modern.png',
        'alterEgo': 'Pietro Django Maximoff',
        'species': 'Human mutate',
        'teamAffiliations': [
            'Avengers',
            'Brotherhood of Mutants',
            'Inhumans',
            'X-Factor',
            'X-Men'
        ],
        'partnerships': 'Scarlet Witch',
        'notableAliases': [
            'Pietro Frank',
            'Mateo Maximoff'
        ],
        'abilities': [
            'Vast superhuman speed, stamina, reaction and reflexes',
            'Eidetic memory',
            'Rapid healing',
            'Creation of high speed winds and tornadoes',
            'Time manipulation'
        ]
    }, 
    'she hulk': {
        'img': 'https://upload.wikimedia.org/wikipedia/en/7/7e/She-Hulk_%28Jennifer_Walter%29_2.png',
        'alterEgo': 'Jennifer "Jen" Walters',
        'species': 'Human mutate',
        'teamAffiliations': [
            'Avengers',
            'Ancient Order of the Shield',
            'A-Force',
            'Defenders',
            'Fantastic Force',
            'Fantastic Four',
            'Fearsome Four',
            'Future Foundation',
            'Heroes for Hire',
            'Hulkbusters',
            'The Initiative',
            'Lady Liberators',
            'Mighty Avengers',
            'S.H.I.E.L.D.',
            'Seven Brides Of Set'
        ],
        'partnerships': [
            'Hulk',
            'Awesome Andy'
        ],
        'notableAliases': [
            'Agent Walters',
            'Earth-Sow',
            'Ghost-Girl',
            'Glamazonia',
            'Iron Hulk',
            'Jennifer Smith',
            'Jenny Jameson-Walters',
            'Mrs. Jameson',
            'Savage She-Hulk',
            'Sensational She-Hulk',
            'She-Xemnu',
            'Thunder Hulk',
            'Winter Hulk'
        ],
        'abilities': [
            'Transformation',
            'Superhuman strength, stamina, durability, speed, and leaping',
            'Healing factor',
            'Gamma manipulation',
            'Body switching',
            'Expertise in criminology'
        ]
    },
    'squirrel girl': {
        'img': 'https://upload.wikimedia.org/wikipedia/en/e/e2/Unbeatable_Squirrel_Girl.jpg',
        'alterEgo': 'Doreen Allene Green',
        'species': 'Human Mutant',
        'teamAffiliations': [
            'Great Lakes Avengers',
            'Avengers Idea Mechanics',
            'U.S.Avengers'
        ],
        'partnerships': [
            'Monkey Joe',
            'Tippy-Toe'
        ],
        'abilities': [
            'Superhuman agility, senses, and strengt',
            'Prehensile tail',
            'Razor-sharp claws',
            'Retractable knuckle spikes',
            'Ability to communicate with squirrels'
        ]
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