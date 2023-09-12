
function teste(key){
    switch (key) {
    case 'guerri':
    case 'boltz':
        console.log('guerri')
        break;
    case 'gaules':
        console.log('gaules')
        break;
    case 'kcerato':
        console.log('kcerato')
        break;
    default:
        console.log('OUTRO PLAYER AQUI')
        break;
}}

teste('guerri')

// Ao invés do 'break' , podemos usar o 'return' .