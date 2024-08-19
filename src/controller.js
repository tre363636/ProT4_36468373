// Importar el pool de conexiones de la base de datos
import { pool } from './database.js';

class LibrosController {
  // Método asíncrono para obtener todas los libros
  async getAll(req, res) {
    try {
      // Ejecutar consulta SQL y esperar por el resultado
      const [result] = await pool.query('SELECT * FROM Libros');
      // Enviar el resultado como respuesta en formato JSON
      res.json(result);
    } catch (error) {
      // En caso de error, enviar el error como respuesta
      res.status(500).json({ error: error.message });
    }
  }
  async add(req, res) {
    const { nombre, autor, categoria, año_publicacion, ISBN } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO Libros(nombre, autor, categoria, año_publicacion, ISBN) VALUES (?, ?, ?, ?, ?)',
            [nombre, autor, categoria, año_publicacion, ISBN]
          );
      res.json({"Id insertado":result[0].insertId}); // Asegúrate de que 'id' sea el nombre correcto de la columna ID en tu tabla
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error.message, error.stack);
        res.status(500).json({ error: error.message });
      }
      
  }
  async delete(req, res) {
    const { id } = req.body;  // Asumiendo que el 'id' viene directamente en el cuerpo de la solicitud
    try {
      const result = await pool.query('DELETE FROM Libros WHERE id = ?', [id]);
      res.json({ "Registros eliminados": result[0].affectedRows});  // 'rowCount' te dará el número de filas afectadas
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  
}

// Exportar una instancia de LibrosController
export const libros = new LibrosController();
