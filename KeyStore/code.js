const keysCollection = {
    keyOne: {
      nombre: 'Azus',
      modelo: '54G',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 564
    },
    keyTwo: {
      nombre: 'bLUE',
      modelo: '545G',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 564
    },
    keyThree: {
      nombre: 'Crimson',
      modelo: '89T',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 678
    },
    keyFour: {
      nombre: 'Emerald',
      modelo: '23X',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 745
    },
    keyFive: {
      nombre: 'Silver',
      modelo: '12Q',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 589
    },
    keySix: {
      nombre: 'Gold',
      modelo: '77Z',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 812
    },
    keySeven: {
      nombre: 'Shadow',
      modelo: '36B',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 693
    },
    keyEight: {
      nombre: 'Ivory',
      modelo: '41L',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 720
    },
    keyNine: {
      nombre: 'Onyx',
      modelo: '95F',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 654
    },
    keyTen: {
      nombre: 'Scarlet',
      modelo: '63M',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 799
    },
    keyEleven: {
      nombre: 'Cobalt',
      modelo: '48P',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 580
    },
    keyTwelve: {
      nombre: 'Amber',
      modelo: '31D',
      imagen: 'https://t3.ftcdn.net/jpg/00/96/32/56/360_F_96325690_aELgxkFwB27obriVwToq7x8cQOpIPCbq.jpg',
      precio: 690
    }
};
  
const sentData = (data) => {
    document.querySelector(".key-data").value = data
}

const container = document.querySelector('.flex-container')
for(const [key,value] of Object.entries(keysCollection)){
    const keyCard = document.createElement('div')
    keyCard.className = 'key-card'
    keyCard.tabIndex = key
    keyCard.id = key

    keyCard.innerHTML =`
        <img class="img" src="${value['imagen']}"/>
        <hr/>
        <div class="key_inf">
            <h2>Nombre: ${value['nombre']}</h2>
            <h4>Modelo: ${value['modelo']}</h4>
            <h2>Precio: ${value['precio']}</h2>
        </div>
    `

    keyCard.addEventListener("click", ()=> {sentData(value['modelo'])})
    container.appendChild(keyCard)
}