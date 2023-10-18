import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'envios_registrados' })
export class EnviosRegistrados {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text'})
    direccion: string;

    @Column({ type: 'varchar', length: 65 })
    codigo_postal: string;

    @Column({ type: 'varchar', length: 65 })
    destinatario: string;

    @Column({ type: 'varchar', length: 65 })
    remitente: string;

    @Column({ type: 'decimal', precision: 7, scale: 2 })
    peso: number;

    @Column({ type: 'varchar', length: 65 })
    empresa: string;

    @Column({ type: 'decimal', precision: 7, scale: 2 })
    precio: number;

    @Column({ type: 'varchar', length: 65 })
    tipo_paquete: string;

}
