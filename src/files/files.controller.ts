import { Controller, Post, UploadedFile, UseInterceptors, Get, Param, Res } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from './helpers';
import { diskStorage } from 'multer';
import { Response } from 'express';




@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
  ){}

  @Get('pokemon/:imageName')
  findPokemonImage(
    @Res() res : Response,
    @Param('imageName') imageName: string
  ){
    const path =   this.filesService.getStaticImage(imageName);
    res.sendFile(path);
  }

  @Post('pokemon')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      storage: diskStorage({
        destination: './static/pokemons',
        filename: fileNamer
      })
    }
    )
  )
  uploadPokemonImage(
    @UploadedFile()
    file: Express.Multer.File
  ) {
    return this.filesService.upload(file);
  }
}
