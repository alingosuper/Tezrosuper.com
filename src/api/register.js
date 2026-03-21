import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import { generateSecureToken } from "../security/FinalSecurityShield";

export const registerUser = async (userData) => {
    const db = getDatabase(app);
    const securityToken = generateSecureToken(); // شیلڈ سے ٹوکن لیں
    
    const newUserRef = ref(db, 'pending_approvals/' + userData.phone);
    
    // ڈیٹا کو ایڈمن کے 'Pending' سیکشن میں بھیجیں
    await set(newUserRef, {
        ...userData,
        token: securityToken,
        status: "WAITING_FOR_ADMIN",
        registeredAt: new Date().toISOString()
    });
    
    console.log("🛡️ Tezro Web: User sent to Admin for verification.");
};
