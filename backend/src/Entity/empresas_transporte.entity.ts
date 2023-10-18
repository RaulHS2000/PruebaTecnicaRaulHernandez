import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'empresas_transporte' })
export class EmpresasTransporte {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 65 })
    empresa_transporte: string;

    @Column({ type: 'text'})
    codigos_postales: string;

}
