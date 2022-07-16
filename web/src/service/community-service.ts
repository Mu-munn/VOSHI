import { Community } from "@/project-types/community"
import { doc, getFirestore, serverTimestamp, setDoc, getDoc, collection, getDocs, DocumentSnapshot } from "firebase/firestore"
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

    static  fetchCommunties= async () => {
        const communities: Community[] = []

        const db = getFirestore(app)
        const querySnapshot = await getDocs(collection(db, 'community'))

        querySnapshot.forEach((docSnapshot) => {
            const community = CommunityService._communityFromData(docSnapshot)
            if (community) communities.push(community)
        })

        return communities
    }

    static _communityFromData = (docSnapshot: DocumentSnapshot): Community | null => {
        if (docSnapshot.exists()) {
            const data = docSnapshot.data()
            const community = data as Community
            return {
                ...community,
            }
        }
        return null
    }
}