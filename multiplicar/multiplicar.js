const fs  = require('fs');

module.exports.crearArchivo = (base, limite = 10)=>{
   
    return new Promise ((resolve, reject)=>{
        if(!Number(base)){
            reject(`El valor introducido ${base}  no es un numero`);
            return ;
        }
        
        let data = '';

        for(let i=1;i<=limite; i++) {
        data +=(`${base} * ${i} = ${base*i} \n`);
            
        }

        fs.writeFile(`tablas/tabla-${base}- al -${limite}.txt`,data ,(err)=>{
        if(err) reject(err);
        else{
            resolve(`tabla-${ base}.txt`);
        }
        console.log(`el archivo se grabo -${base}.txt ha sido creado`);

        });
    });
}
module.exports.listabla = (base, limite = 10)=>{

    for(let i=1;i<=limite; i++) {
        console.log(`${base} * ${i} = ${base*i} \n`);
    
        }
}
/* module.exports = {
    crearArchivo,
    listabla
}  */





