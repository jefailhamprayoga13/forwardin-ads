import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {

    const snapshot = await getDocs(collection(firestore, collectionName));

    const data = snapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(),
    }));

    return data;
}

export async function signIn(userData: {email: string}) {
    const q = query(
        collection(firestore, "users"),
        where("email", "==", userData.email)
    );

    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(),
    }));
    if(data){
        return data[0];
    }else{
        return null;
    }
}

export async function signUp(userData : {
    email: string,
    username : string,
    phone : string,
    role? : string,
    password: string,
}, callback : Function) {
    const q = query(
        collection(firestore, "users"),
        where("email", "==", userData.email)
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id, 
        ...doc.data(),
    }));

    if (data.length > 0) {
        callback({
            status: false,
            message : "Email already exists",
        });
    }else{
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "customer";
        await addDoc(collection(firestore, "users"), userData).then(() => {
                callback({
                    status: true,
                    message : "Registered successfully",
                })
            }
        ).catch((error) => {
            callback({
                status: false,
                message : error
            })
        })
        
        }
    }
    