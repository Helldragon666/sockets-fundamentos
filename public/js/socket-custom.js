let socket = io()

        //on para escuchar sucesos

        socket.on('connect', () => {
            console.log('conectado al servidor')
        })

        socket.on('disconnect', () => {
            console.log('Perdimos conexion con el servidor')
        })

        //emit para enviar informacion 
        socket.emit('enviarMensaje', {
            usuario: 'Yon',
            mensaje: 'Hola mundo'
        }, (resp) => {
            console.log('respuesta server', resp)
        })

        //escuchar informacion
        socket.on('enviarMensaje', (mensaje) => {
            console.log('Servidor: ', mensaje)
        })
