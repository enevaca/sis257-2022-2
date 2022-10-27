import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('generos')
export class GeneroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  descripcion: string;
}
