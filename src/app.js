const { envs } = require('./config/env');
const { startServer } = require('./server/server')

const main = () => {    
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })

}




// funcion agnostica autoejecutable
// agnostica asincronica
(async() => {
    main()
})()

