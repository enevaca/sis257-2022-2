import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('interpretes')
export class InterpreteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50 })
  nacionalidad: string;
}
