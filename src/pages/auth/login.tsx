import { Button, Input, Spinner } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {

    const [isLoading, setIsloading] = useState(false);
    const {push , query} = useRouter();
    const [error, setError] = useState('');

    const callbackUrl : any = query.callbackUrl || '/';
    const handleSubmit = async (event: any) => {
        event.preventDefault(); 
        setIsloading(true);
        try {   
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            }) 
            if(!res?.error) {
                setIsloading(false);
                push(callbackUrl);
            } else {
                setError("Email or Password is incorrect");
                setIsloading(false);
            }
        } catch (error : any) {
            setIsloading(false);
            setError("Email or Password is incorrect");
        }
    }

    return (
        <div className="min-h-screen w-full">
            <div className="lg:w-4/5 w-full  mx-auto py-12">
                <img src="/logo.svg" className="header-logo" />
                <div className="w-full mt-32 lg:mt-12 flex flex-col lg:flex-row px-12 lg:px-24 gap-8">
                    <div className="hidden md:flex flex-col lg:w-1/2 w-full items-center justify-center">
                        <img src="/started-img.svg" alt="" className="w-full"/>
                        <h1 className="text-xl font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h1>
                        <p className="text-xs mt-2 font-medium">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
                    </div>
                    <div className="flex flex-col lg:w-1/2 w-full items-center border bg-white rounded-xl py-12 shadow-md">
                        <h1 className="text-xl font-bold">Welcome to Forwardin</h1>
                        <h3 className="text-xs text-center font-medium w-1/2">Revolutionize your communication journey with Fowardin today</h3>
                        <form className="mt-6 w-full px-6 flex flex-col gap-2" onSubmit={handleSubmit}>
                            <Input className="w-full" id="email" name="email" variant="bordered" type="email" size="sm" label="Email" />
                            <Input className="w-full" id="password" name="password" variant="bordered" type="password" size="sm" label="Password" />
                            {error && <div className="w-full bg-slate-300 rounded-md p-4">
                                <p className="text-xs font-medium text-red-500">{error}</p>
                            </div>
                            }
                            <p className="text-xs mt-2 font-medium text-primary"><Link href="/auth/login">Lupa password?</Link></p>
                            <Button color="primary" type="submit" className="mt-4" disabled={isLoading}>{isLoading ? (<Spinner color="default" labelColor="foreground"/>) : 'Sign In'}</Button>
                        </form>
                        <p className="text-xs mt-2 font-medium">Butuh buat akun? <span className="text-primary"><Link href="/auth/register">Daftar disini</Link></span></p>
                    </div>
                </div>
            </div>
          
        </div>
    );
}


export default LoginPage;
