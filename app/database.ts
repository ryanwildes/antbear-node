import { connect, connection } from 'mongoose';

export class Database {
  constructor(private connectionString: string) {
  }

  public async connect() {
    try {
      await connect(this.connectionString, { useNewUrlParser: true, family: 4 });
      console.log('connected to database');
    } catch (error) {
      console.error(`error connecting to database: ${error}`);
    }
  }

  public async disconnect() {
    try {
      await connection.close();
    } catch (error) {
      console.error(`error disconnecting from database: ${error}`);
    }
  }

  public async dropDatabase() {
    try {
      await connection.dropDatabase();
    } catch (error) {
      console.error(`error dropping database: ${error}`);
    }
  }
}
