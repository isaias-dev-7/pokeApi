import { BeforeInsert,
         BeforeUpdate,
         Column, 
         Entity, 
         OneToMany, 
         PrimaryGeneratedColumn 
        } from "typeorm";
import { PokemonImage } from "./pokemon-image.entity";

/* Inside of the decorator we can put the name of database
 * default = name of the entity
 */ 
@Entity() 
export class Pokemon {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        unique:true,
    })
    name: string;

    @Column('character',{
        length:10,
    })
    type: string;

    @Column('character',{
        length:10,
        nullable:true,
    })
    gender: string;

    @Column('text',{
        array:true,
        default: [''],
    })
    ability: string[];

    @OneToMany(
        () => PokemonImage,
        pokemonImage => pokemonImage.pokemon,
        { cascade: true, eager: true }
    )
    images?: PokemonImage[];

    @BeforeInsert()
    checkNameInsert(){
        this.name = this.transformString(this.name);
    }

    @BeforeUpdate()
    checkNameUpdate(){
        if(this.name) this.name = this.transformString(this.name);
    }

    private transformString(value: string) : string {
        return value
        .toLocaleLowerCase()
        .replaceAll(' ','_');
    }
}
