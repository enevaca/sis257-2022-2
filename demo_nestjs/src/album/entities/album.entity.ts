import { InterpreteEntity } from 'src/interprete/entities/interprete.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('albums')
export class AlbumEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_interprete' })
  idInterprete: number;

  @Column({ length: 120 })
  nombre: string;

  @Column({ name: 'fecha_lanzamienot' })
  fechaLanzamiento: Date;

  @ManyToOne(() => InterpreteEntity, interprete => interprete.albums)
  @JoinColumn({ name: 'id_interprete', referencedColumnName: 'id' })
  interprete: InterpreteEntity;
}
