import { CreateUserDto } from "./create-user.dto";
import {PartialType} from "@nestjs/mapped-types"
// add the DTO s to controllers and service providers
export class UpdateUserDto extends PartialType(CreateUserDto)
{}
