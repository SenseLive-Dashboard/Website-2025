// lib/db.ts (Example - adjust path if needed)
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

console.log('MySQL Connection Pool Initialized (using mysql2).');

// Optional connection test function (useful for debugging)
export async function testDbConnection() {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log("Successfully connected to MySQL via pool!");
        return true;
    } catch (error) {
        console.error("Failed to connect to MySQL:", error);
        return false;
    } finally {
        if (connection) connection.release();
    }
}

export default pool;


