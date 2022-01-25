import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddColumnCategoryIdToProductsTable1643122760208
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "products",
      new TableColumn({
        name: "category_id",
        type: "integer",
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      "products",
      new TableForeignKey({
        name: "ProductCategoryId",
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("products", "ProductCategoryId");
    await queryRunner.dropColumn("products", "category_id");
  }
}
