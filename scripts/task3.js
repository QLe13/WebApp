stats = [
    {
        "Team": "MilwaukeeBucks",
        "W": 58,
        "L": 24,
        "+/-": 17,
        "GB": "-",
        "PCT": ".707"
    },
    {
        "Team": "BostonCeltics",
        "W": 57,
        "L": 25,
        "+/-": 16,
        "GB": "1.0",
        "PCT": ".695"
    },
    {
        "Team": "Philadelphia76ers",
        "W": 54,
        "L": 28,
        "+/-": 13,
        "GB": "4.0",
        "PCT": ".659"
    },
    {
        "Team": "ClevelandCavaliers",
        "W": 51,
        "L": 31,
        "+/-": 10,
        "GB": "7.0",
        "PCT": ".622"
    },
    {
        "Team": "NYKnicks",
        "W": 47,
        "L": 35,
        "+/-": 6,
        "GB": "11.0",
        "PCT": ".573"
    },
    {
        "Team": "BrooklynNets",
        "W": 45,
        "L": 37,
        "+/-": 4,
        "GB": "13.0",
        "PCT": ".549"
    },
    {
        "Team": "MiamiHeat",
        "W": 44,
        "L": 38,
        "+/-": 3,
        "GB": "14.0",
        "PCT": ".537"
    },
    {
        "Team": "AtlantaHawks",
        "W": 41,
        "L": 41,
        "+/-": 0,
        "GB": "17.0",
        "PCT": ".500"
    },
    {
        "Team": "TorontoRaptors",
        "W": 41,
        "L": 41,
        "+/-": 0,
        "GB": "17.0",
        "PCT": ".500"
    },
    {
        "Team": "ChicagoBulls",
        "W": 40,
        "L": 42,
        "+/-": -1,
        "GB": "18.0",
        "PCT": ".488"
    },
    {
        "Team": "IndianaPacers",
        "W": 35,
        "L": 47,
        "+/-": -6,
        "GB": "23.0",
        "PCT": ".427"
    },
    {
        "Team": "WashingtonWizards",
        "W": 35,
        "L": 47,
        "+/-": -6,
        "GB": "23.0",
        "PCT": ".427"
    },
    {
        "Team": "OrlandoMagic",
        "W": 34,
        "L": 48,
        "+/-": -7,
        "GB": "24.0",
        "PCT": ".415"
    },
    {
        "Team": "CharlotteHornets",
        "W": 27,
        "L": 55,
        "+/-": -14,
        "GB": "31.0",
        "PCT": ".329"
    },
    {
        "Team": "DetroitPistons",
        "W": 17,
        "L": 65,
        "+/-": -24,
        "GB": "41.0",
        "PCT": ".207"
    },
    {
        "Team": "DenverNuggets",
        "W": 53,
        "L": 29,
        "+/-": 12,
        "GB": "-",
        "PCT": ".646"
    },
    {
        "Team": "MemphisGrizzlies",
        "W": 51,
        "L": 31,
        "+/-": 10,
        "GB": "2.0",
        "PCT": ".622"
    },
    {
        "Team": "SacramentoKings",
        "W": 48,
        "L": 34,
        "+/-": 7,
        "GB": "5.0",
        "PCT": ".585"
    },
    {
        "Team": "PhoenixSuns",
        "W": 45,
        "L": 37,
        "+/-": 4,
        "GB": "8.0",
        "PCT": ".549"
    },
    {
        "Team": "GSWarriors",
        "W": 44,
        "L": 38,
        "+/-": 3,
        "GB": "9.0",
        "PCT": ".537"
    },
    {
        "Team": "LAClippers",
        "W": 44,
        "L": 38,
        "+/-": 3,
        "GB": "9.0",
        "PCT": ".537"
    },
    {
        "Team": "LALakers",
        "W": 43,
        "L": 39,array
        "+/-": 2,
        "GB": "10.0",
        "PCT": ".524"
    },
    {
        "Team": "NOrleansPelicans",
        "W": 42,
        "L": 40,
        "+/-": 1,
        "GB": "11.0",
        "PCT": ".512"
    },
    {
        "Team": "MinnesotaT-wolves",
        "W": 42,
        "L": 40,
        "+/-": 1,
        "GB": "11.0",
        "PCT": ".512"
    },
    {
        "Team": "OklahomaCityThunder",
        "W": 40,
        "L": 42,
        "+/-": -1,
        "GB": "13.0",
        "PCT": ".488"
    },
    {
        "Team": "DallasMavericks",
        "W": 38,
        "L": 44,
        "+/-": -3,
        "GB": "15.0",
        "PCT": ".463"
    },
    {
        "Team": "UtahJazz",
        "W": 37,
        "L": 45,
        "+/-": -4,
        "GB": "16.0",
        "PCT": ".451"
    },
    {
        "Team": "PortlandTrailBlazers",
        "W": 33,
        "L": 49,
        "+/-": -8,
        "GB": "20.0",
        "PCT": ".402"
    },
    {
        "Team": "SanAntonioSpurs",
        "W": 22,
        "L": 60,
        "+/-": -19,
        "GB": "31.0",
        "PCT": ".268"
    },
    {
        "Team": "HoustonRockets",
        "W": 22,
        "L": 60,
        "+/-": -19,
        "GB": "31.0",
        "PCT": ".268"
    }
]

// write a function to display the stats array as a table

const getTable = () =>{
    const table = document.createElement('table')
    table.id = 'data-table'

    stats.array.forEach(element => {
        const row = document.createElement('tr')

        const nameCell = document.createElement('td')
        nameCell.textContent = element['Team']

        const winCell = document.createElement('td')
        winCell.textContent = element['W']

        const loseCell = document.createElement('td')
        loseCell.textContent = element['L']

        const diffCell = document.createElement('td')
        diffCell.textContent = element['+/-']
        
        const gbCell = document.createElement('td')
        gbCell.textContent = element['GB']

        const pctCell = document.createElement('td')
        pctCell.textContent = element['PCT']


        row.appendChild(nameCell)
        row.appendChild(winCell)
        row.appendChild(loseCell)
        row.appendChild(diffCell)
        row.appendChild(gbCell)
        row.appendChild(pctCell)

        table.appendChild(row)
    });

    const container = document.getElementById('table-container')
    container.appendChild(table)
}


window.onload = getTable()