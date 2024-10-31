import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "./pokemon.entity";

/* Inside of the decorator we can put the name of database
 * default = name of the entity
 */
@Entity()
export class PokemonImage{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    url: string;

    @ManyToOne(
        () => Pokemon,
        pokemon => pokemon.images,
        { onDelete: 'CASCADE' }
    )
    pokemon: Pokemon;
}