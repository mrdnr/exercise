import pgPromise from 'pg-promise';

const pgp = pgPromise();

export const db = pgp({
  connectionString: 'postgres://rutwgkkq:cXxE1qm9JAXDhWVh672U6dzq1d_Kyf0X@berry.db.elephantsql.com/rutwgkkq',
});

export const setupDb = async () => {
  try {
    await db.none(`
      DROP TABLE IF EXISTS planets;

      CREATE TABLE planets (
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL
      );

      INSERT INTO planets (name) VALUES ('Earth'), ('Mars');
    `);

    console.log('Created PostgreSQL database and table, added initialization records.');
  } catch (error) {
    console.error('Error occurred:', error);
  }
};
