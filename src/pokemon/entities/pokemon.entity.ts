import { BeforeInsert,
         BeforeUpdate,
         Column, 
         Entity, 
         ManyToOne, 
         OneToMany, 
         PrimaryGeneratedColumn 
        } from "typeorm";
import { PokemonImage } from "./pokemon-image.entity";
import { User } from "../../auth/entities/user.entity";

/* Inside of the decorator we can put the name of table in the database
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

    @ManyToOne(
        () => User,
        user => user.pokemon,
        { eager: true}
    )
    user: User;

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
