import { CancionEntity } from 'src/cancion/entities/cancion.entity';
import { InterpreteEntity } from 'src/interprete/entities/interprete.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => InterpreteEntity, interprete => interprete.albums)
  @JoinColumn({ name: 'id_interprete', referencedColumnName: 'id' })
  interprete: InterpreteEntity;

  @OneToMany(() => CancionEntity, cancion => cancion.album)
  canciones: CancionEntity[];
}
