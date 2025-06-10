import pg from 'pg';

export const pool = new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "sisterna2",
    database: "dcargo",
    port: 5432,
})

// pool.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.error('Error executing query', err.stack);
//     } else {
//         console.log('Database connected successfully:', res.rows[0]);
//     }
// }); Comprobar la conexión a la base de datos
