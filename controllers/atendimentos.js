module.exports = app => {   
    app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atedimentos e esta realizando um GET'))

    app.post('/atendimentos', (req ,res) => {
        
        console.log(req.body)

        res.send('Você está na rota de atendimentos e esta realizando um POST') 
})

}