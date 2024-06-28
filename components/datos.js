import { getConnection } from "pages/api/db";

export default async function handler(req, res){
    try{
        const connection = await getConnection();
        const datos = await connection.execute('select nombre from prueba');
        res.status(200).json({ solution: datos.solution });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'error noma' });
    }

    return(
        <div>
            datos
        </div>
    )
}