import { AppSource } from "../../database";
import { User } from "../../database/entities/mainDB/User";
import { admin } from "../../services/firebase";
import UserDTO from "./dto/User.dto";
import UserRegisterDTO from "./dto/UserRegister.dto";

export async function createUser(data: UserRegisterDTO): Promise<UserDTO> {
  const { firstname, lastname, email, password } = data;

  const user = await admin.auth().createUser({
    email: email,
    password,
    displayName: `${firstname} ${lastname}`,
  });

  const userRepository = AppSource.getRepository(User);
  const newUser = userRepository.create({
    firstname,
    lastname,
    email,
    authUID: user.uid,
  });
  const result = await userRepository.save(newUser);

  return {
    id: result.id,
    firstname: result.firstname,
    lastname: result.lastname,
    email: result.email,
  };
}

export async function fetchUserByField<K extends keyof User>(
  field: K,
  value: User[K]
) {
  const userRepo = AppSource.getRepository(User);
  const user = await userRepo.findOneBy({ [field]: value });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
