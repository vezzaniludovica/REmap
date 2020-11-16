const express= require ('express');
const app= express();
const port=3000;
const handlebars=require('express-handlebars');
app.set('view engine','hbs');
app.engine('hbs',handlebars({
    layoutsDir:__dirname + '/views/layouts',
    extname:'hbs',
    partialsDir: __dirname + '/views/partials/'
}));
fakeApi=()=> {
    return[
        {place: 'train',
         where: 'center'},
        {place:'stadium',
         where: 'mancasale'}
    ]
};
app.use(express.static('views/partials'));
app.get('/',(req,res)=>{res.render('main',{layout:'index',places:fakeApi(),
listExists:false});

});
app.listen(port,()=>console.log('App listening on port ${ port }'));
