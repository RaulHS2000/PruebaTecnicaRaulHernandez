import { Entity, Column,PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tipos_paquetes' })
export class TiposPaquetes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 65 })
    tipo: string;

    @Column({ type: 'varchar', length: 65 })
    intervalo_kg: string;

    @Column({ type: 'varchar', length: 65 })
    formula_precio: string;

}
