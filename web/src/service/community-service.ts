import { Community } from "@/project-types/community"
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore"
import { app } from "../utils/firebase/init"



export class CommunityService {
    static createOrUpdateCommunity = async ({
        community

    }: {
        community: Community

    }): Promise<void> => {
        const db = getFirestore(app)
        if (community.id) {
            const communityRef = doc(db, 'community', community.id)
            try {
                await setDoc(
                    communityRef, {
                    ...community,
                    updated: serverTimestamp(),
                },
                    { merge: true }
                )
            }
            catch (e) {
                throw new Error('communityの更新に失敗しました')
            }
        }else{
            const newcommunityRef = doc(db, 'community')
            try{
                await setDoc(newcommunityRef,{
                    ...community
                })

            }catch(e){
                throw new Error('communityの更新に失敗しました')
            }

        }
        
    }
}