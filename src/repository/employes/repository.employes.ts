import { IcrudRepository } from "@adapters/interface/repository/crudRepository";
import { Employes } from "@Entity/Employes/employes";

export class RepositoryEmployes implements ICrudRepository<Employes>{

    async save(data: Employes): Promise<void | Error> {
        await Employes.save(data);
    }

    async update(data: Employes): Promise<any>{
        const existingEmploye = await Employes.findOneBy({ idEmploye: data.idEmploye });
        if (!existingEmploye) {
            throw new Error("Employe not found");
        }
        const result = await Employes.update({ idEmploye: data.idEmploye }, data);
        return result;
    }

    async delete (id: string): Promise<any>{
        const resultRemoveEmploye = await Employes.delete({idEmploye: id});
        return resultRemoveEmploye;
    }

    async findById(id: string): Promise<Employes | null> {
        const dataEmploye = await Employes.findOne({where: {idEmploye: id}, relations: { saits: true, company: true, roles: true } });
        return dataEmploye;
    }

}