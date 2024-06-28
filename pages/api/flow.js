import axios from 'axios';
import sha256 from 'js-sha256';

const apiKey = '5737EF2A-C228-4AA7-AAAE-8F69FC86LF19';
const secretKey = '66e3eaf21090fceff589659881baa31bbd05d36a';

const DEFAULT_DATE = '2024-05-07'; // Establece la fecha predeterminada
const DEFAULT_START = 0; // Establece el inicio predeterminado
const DEFAULT_LIMIT = 10; // Establece el límite predeterminado

async function getTransactions() {
  // Generar firma
  const timestamp = new Date().toISOString();
  const params = `apiKey=${apiKey}&date=${DEFAULT_DATE}&start=${DEFAULT_START}&limit=${DEFAULT_LIMIT}`;
  const signature = sha256(secretKey + timestamp + params);
  // Construir URL de la solicitud
  const url = `https://www.flow.cl/api/payment/getTransactions?apiKey=5737EF2A-C228-4AA7-AAAE-8F69FC86LF19&date=2024-05-07&start=0&limit=10&s=${signature}`;
  // Realizar solicitud a la API
  const response = await axios.get(url);
  const data = response.data;

  // Procesar la respuesta
  if (data.success) {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}

export default getTransactions;

