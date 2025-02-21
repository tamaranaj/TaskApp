import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory(env: ConfigService) {
            return {
              type: 'postgres',
              host: env.get('DB_HOST'),
              port: env.get('DB_PORT'),
              username: env.get('DB_USERNAME'),
              password: env.get('DB_PASSWORD'),
              database: env.get('DB_NAME'),
              autoLoadEntities: true,
              synchronize: true,
            };
          },
        }),
      ],
})
export class DatabaseModule {}
