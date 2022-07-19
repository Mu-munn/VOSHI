import { Statement } from "@/project-types/statement"
import { uuidv4 } from "@firebase/util"
import { doc, getFirestore, serverTimestamp, setDoc, collection, getDocs, DocumentSnapshot } from "firebase/firestore"
import { app } from "src/utils/firebase/init"


export class Statementservice {
    static createStatement = async ({
        statement
    }: {
        statement: Statement
    }): Promise<void> => {
        const db = getFirestore(app)

        const uuid = uuidv4()

        const newstatementcommunityref = doc(db, 'talks', uuid)
        try {
            await setDoc(newstatementcommunityref, {
                ...statement,
                id: uuid,
                created: serverTimestamp()

            })
        } catch (e) {
            throw new Error('communityの更新に失敗しました')
        }
    }

    static fetchStatements = async () => {
        const statements: Statement[] = []
        const db = getFirestore(app)
        
        const querySnapshot = await getDocs(collection(db, 'talks'))

        querySnapshot.forEach((docSnapshot) => {
            const statement = Statementservice._communityFromData(docSnapshot)
            if (statement) statements.push(statement)
        })

        return statements
    }

    static _communityFromData = (docSnapshot:DocumentSnapshot): Statement | null => {
        if (docSnapshot.exists()) {
            const data = docSnapshot.data()
            const statement = data as Statement
            return {
                ...statement,
            }
        }
        return null
    }
}