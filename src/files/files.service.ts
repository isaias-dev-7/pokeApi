import { join } from 'path';
import { existsSync } from 'fs';

import {
    BadRequestException,
    Injectable
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class FilesService {

    constructor(
        private readonly configService: ConfigService,
    ) {}

     getStaticImage( imageName: string){
        const path = join(__dirname,'../../static/pokemons', imageName);
        if(!existsSync(path)) throw new BadRequestException(`Not pokemon found with image ${imageName}`);
        return path;
    }

    upload(file: Express.Multer.File) {
        if (!file) throw new BadRequestException('make sure that the file is an image');
        const secureUrl = `${this.configService.get('HOST_API')}/files/pokemon/${ file.filename }`;
        return secureUrl;
    }
}
