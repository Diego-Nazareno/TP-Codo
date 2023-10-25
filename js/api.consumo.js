const url =


async function obtener(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        
        console.log("Data", data);
        console.log("Data", typeof(data));
        ;

    }catch(error){
        console.log("Ocurrió un error", error);
    }
}
obtenerClima()