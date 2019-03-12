var socket = io();

        socket.on('connect', function(){
            console.log('conectado al servidr')
        });

        // los eventos on son para escuchar eventos
        socket.on('disconnect', function (){
            console.log('conexion perdida con el servidor')
        })

        //Enviar informacion
        socket.emit('enviarMsj', {
            nombre : 'javier',
            message : 'hola mundo'
        }, function(resp){
            console.log('server: ', resp)
        })

        //Escuchar informacion
        socket.on('enviarMsj', function(mensaje){
            console.log('servidor : ', mensaje)
        })