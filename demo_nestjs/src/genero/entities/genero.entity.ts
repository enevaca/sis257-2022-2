import { CancionEntity } from 'src/cancion/entities/cancion.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('generos')
export class GeneroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  descripcion: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToMany(() => CancionEntity, cancion => cancion.genero)
  canciones: CancionEntity[];
}
