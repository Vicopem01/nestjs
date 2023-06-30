import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/user/user.dto';
import { User } from 'src/user/user.schema';
import * as bcrypt from 'bcryptjs';
import { LoginUserDto } from './auth.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(user: UserDto): Promise<string> {
    const createdUser = new this.userModel(user);
    const { password, confirmPassword, email } = createdUser;
    if (!password || password !== confirmPassword)
      throw new HttpException('Passwords do not match', HttpStatus.FORBIDDEN);

    const finduser = await this.userModel.findOne({ email }).exec();
    if (!!finduser)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);

    const hash = await bcrypt.hashSync(password, 10);
    createdUser.confirmPassword = hash;
    createdUser.password = hash;
    createdUser.save();

    return 'Sign up successful';
  }

  async loginUser(user: LoginUserDto): Promise<string> {
    const login = new this.userModel(user);
    const { email, password } = login;
    if (!email || !password)
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    const findUser = await this.userModel.findOne({ email }).exec();
    if (!findUser)
      throw new HttpException('User does not exist', HttpStatus.FORBIDDEN);
    // throw new Error(`Wrong Credentials`);
    const verifyUser = await bcrypt.compare(password, findUser.password);
    console.log(verifyUser);

    const token = jwt.sign({
      name: findUser.name,
      email: findUser.email,
      phone: findUser.phone,
    }, );
    throw new HttpException({ message: 'Login successful' }, HttpStatus.OK);
  }
}
