import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUser1603253855559 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',

          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false,

          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false
          }
        ]

      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }

}
