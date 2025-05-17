import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tullú',
    password: 'marialucia',
    port: 5432

});
