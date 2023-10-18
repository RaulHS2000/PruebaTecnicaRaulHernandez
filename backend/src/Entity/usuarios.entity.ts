import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuarios {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 65 })
    nombre: string;

    @Column({ type: 'varchar', length: 65 })
    apellido: string;

    @Column({ type: 'varchar', length: 65 })
    email: string;

    @Column({ type: 'varchar', length: 65 })
    password: string;

}
