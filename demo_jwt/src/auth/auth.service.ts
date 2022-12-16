import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from 'src/usuario/entities/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto): Promise<any> {
    const { usuario, clave } = authLoginDto;
    const usuarioOk = await this.usuarioService.validate(usuario, clave);

    const payload = { sub: usuarioOk.id };
    const access_token = await this.getAccessToken(payload);

    return { ...usuarioOk, access_token };
  }

  async getAccessToken(payload) {
    const accessToken = await this.jwtService.sign(payload, {
      secret: process.env.JWT_TOKEN,
      expiresIn: process.env.JWT_TOKEN_EXPIRATION,
    });
    return accessToken;
  }

  async verifyPayload(payload: JwtPayload): Promise<UsuarioEntity> {
    let usuario: UsuarioEntity;

    try {
      usuario = await this.usuarioService.findOne(payload.sub);
    } catch (error) {
      throw new UnauthorizedException(`Usuario inválido: ${payload.sub}`);
    }

    return usuario;
  }
}
