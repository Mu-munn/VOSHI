import { Vtuber } from "@/project-types/vtuber"
import { async } from "@firebase/util"
import { app } from "../utils/firebase/init"


export class VtuberService {
    static createOrUpdataVtuber = async ({
        vtuber
        
    }:{
        vtuber : Vtuber

    }):Promise<void>=>{
        //const db getFirestore(app)
        if(vtuber)
        {
            
        }
    }
}