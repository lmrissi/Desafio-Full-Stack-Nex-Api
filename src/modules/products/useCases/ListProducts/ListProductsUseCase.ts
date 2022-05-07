import { verify } from "jsonwebtoken";
import { injectable } from "tsyringe";
import { Product } from "../../entities/Product";

@injectable()
class ListProductsUseCase {
    async execute(authenticationHeader: any) {
        const secretKey: any = process.env.JWT_SECRET_KEY
        
        const { sub: user_id } = verify(authenticationHeader, secretKey);
        
        return await Product.findAll({
            where: {
                user_id: Number(user_id)
            }
        }).then((product) => product)
        .catch((err) => {
            return err
        })
    }
}

export { ListProductsUseCase }