const {io} = require('../server')

io.on('connection', (client) => {

    console.log('usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado')
    })

    //eschuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data)

        client.broadcast.emit('enviarMensaje', data)

        /*if(mensaje.usuario){
            callback({
                resp: 'todo salio bien'
            });
        }else{
            callback({
                resp: 'todo salio mal!!!!!'
            });
        }*/

    })
})