// Importar el pool de conexiones de la base de datos
import { pool } from './database.js';

class LibrosController {
  // Método asíncrono para obtener todas los libros
  async getAll(req, res) {
    try {
      // Ejecutar consulta SQL y esperar por el resultado
      const result = await pool.query('SELECT * FROM Libros');
      // Enviar el resultado como respuesta en formato JSON
      res.json(result);
    } catch (error) {
      // En caso de error, enviar el error como respuesta
      res.status(500).json({ error: error.message });
    }
  }
}

// Exportar una instancia de LibrosController
export const libros = new LibrosController();
