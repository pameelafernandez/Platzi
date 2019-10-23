const getUSerAll = new Promise(function(todoBien, todoMal) {
    // llamar a una api
    setTimeout(function() {
    // luego de 3 segundos
        todoMal('se acabó el tiempo');
    }, 5000)
})

const getUSer = new Promise(function(todoBien, todoMal) {
    // llamar a una api
    setTimeout(function() {
    // luego de 3 segundos
        todoBien('se acabó el tiempo');
    }, 3000)
})

getUSer
    .then(function(){
        console.log('todo está bien')
    })
    .catch(function(message) {
        console.log(message)
    })

Promise.all([
    getUSer,
    getUSerAll,
])
.then(function(message){
    console.log(message)
})
.catch(function(message) {
    console.log(message)
})