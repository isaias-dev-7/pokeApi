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
import { ApiProperty } from "@nestjs/swagger";

/* Inside of the decorator we can put the name of table in the database
 * default = name of the entity
 */ 
@Entity() 
export class Pokemon {

    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
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

    @ApiProperty()
    @Column('character',{
        length:10,
    })
    type: string;

    @ApiProperty()
    @Column('character',{
        length:10,
        nullable:true,
    })
    gender: string;

    @ApiProperty()
    @Column('text',{
        array:true,
        default: [''],
    })
    ability: string[];

    @ApiProperty()
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
