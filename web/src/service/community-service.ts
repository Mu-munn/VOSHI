import { Community } from "@/project-types/community"
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore"
import { app } from "../utils/firebase/init"
import { v4 as uuidv4 } from 'uuid';

export class CommunityService {
    static createCommunity = async ({
        community
    }: {
        community: Community
    }): Promise<void> => {
        const db = getFirestore(app)

        const uuid = uuidv4()

        const newcommunityRef = doc(db, 'community', uuid)
        try {
            await setDoc(newcommunityRef, {
                ...community,
                id: uuid
            })
        } catch (e) {
            throw new Error('communityの更新に失敗しました')
        }
    }
}