"use client"
import { useRouter } from "next/navigation"; // Cambiado a next/router
import { google } from "../firebase/config";

export default function LoginViews() {
    const router = useRouter(); // Usar useRouter en lugar de next/navigation

    const handleGoogleLogin = async () => {
        const infoUser = await google();
        console.log(infoUser.user);

        const token = await infoUser.user.getIdToken(true);
        sessionStorage.setItem("token", JSON.stringify(token));

        // Redireccionar al usuario después de obtener el token
        router.push("/");
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full"
                    onClick={handleGoogleLogin}
                >
                    Iniciar con Google
                </button>
            </div>
        </div>
        </>
    );
};