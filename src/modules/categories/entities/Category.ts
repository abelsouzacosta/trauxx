import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Product } from "../../products/entities/Product";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @OneToMany(() => Product, (product) => product.category, {
    cascade: true,
  })
  products: Product[];
}

export { Category };
