const jsonserver=require('json-server')
const mpserver=jsonserver.create()
const middleware= jsonserver.defaults()
const routes= jsonserver.router('conta.json')
mpserver.use(middleware)
mpserver.use(routes)
const PORT=3000 || process.env.PORT
mpserver.listen(PORT,()=>{
    console.log('server running at :'+PORT);
    
})
