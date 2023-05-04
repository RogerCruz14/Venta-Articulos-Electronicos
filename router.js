const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

//Mostrar todos los registros
router.get('/inicio', (req, res)=>{
    conexion.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    })
})

//Mostrar Home
router.get('/home', (req, res)=>{
    res.render('home');
})

//Mostrar servicios
router.get('/servicios', (req, res)=>{
    res.render('servicios');
})

//Mostrar contacto
router.get('/contacto', (req, res)=>{
    res.render('contacto');
})

//RUTA PARA CREAR REGISTROS
router.get('/create', (req, res)=>{
    res.render('create');
})

//RUTA PARA EDITAR LOS REGISTROS
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    })
})

//RUTA PARA ELIMINAR EL REGISTRO
router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/inicio');
        }
    })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);


module.exports = router;