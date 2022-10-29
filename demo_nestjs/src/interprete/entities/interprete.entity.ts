import { AlbumEntity } from 'src/album/entities/album.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('interpretes')
export class InterpreteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 50 })
  nacionalidad: string;

  @OneToMany(() => AlbumEntity, album => album.interprete)
  albums: AlbumEntity[];
}
