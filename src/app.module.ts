import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from './modules/pokemon/pokemon.module';
import { ItemModule } from './modules/item/item.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    PokemonModule,
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
