import { AlbumEntity } from 'src/album/entities/album.entity';
import { GeneroEntity } from 'src/genero/entities/genero.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('canciones')
export class CancionEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'id_album' }) idAlbum: number;

  @Column({ name: 'id_genero' }) idGenero: number;

  @Column({ length: 50 }) nombre: string;

  @Column({ length: 8 }) duracion: string;

  @Column({ length: 70 }) tags: string;

  @Column({ length: 250 }) url: string;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  @ManyToOne(() => AlbumEntity, album => album.canciones)
  @JoinColumn({ name: 'id_album', referencedColumnName: 'id' })
  album: AlbumEntity;

  @ManyToOne(() => GeneroEntity, genero => genero.canciones)
  @JoinColumn({ name: 'id_genero', referencedColumnName: 'id' })
  genero: GeneroEntity;
}
