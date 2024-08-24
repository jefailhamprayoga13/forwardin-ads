import AdminLayout from "@/components/layouts/AdminLayout";
import { useSession } from "next-auth/react";
import { UserCircleIcon, BellIcon, Cog6ToothIcon, CalendarIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Progress } from "@nextui-org/react";
import Link from "next/link";

const AdminPage = () => {
    const { data }: any = useSession();

    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        }
    ];

    const getFormattedDate = (): string => {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const today = new Date();

        const dayName = days[today.getDay()];
        const day = today.getDate();
        const monthName = months[today.getMonth()];
        const year = today.getFullYear();

        return `${dayName}, ${day} ${monthName} ${year}`;
    };

    const currentDate = getFormattedDate();
    return (
        <AdminLayout>
            <div>
                <div className="mt-12 flex  justify-between flex-col sm:flex-row">
                    <h1 className="text-xl font-bold">Selamat siang, {data && data.user.username}</h1>
                    <div className="flex items-center ">
                        <div className="lg:w-3/4 w-full lg:text-right">
                            <p className="font-medium text-xs">Tanggal hari ini</p>
                            <h1 className="text-xs font-bold">{currentDate}</h1>
                        </div>

                        <div className="lg:w-1/4 w-full flex justify-end px-2">
                            <CalendarIcon className="w-12 text-slate-500" />
                        </div>

                    </div>
                </div>

                <div className="flex mt-4 w-full flex-col xl:flex-row gap-2">
                    <div className="xl:w-3/5 w-full flex flex-col gap-5 px-4 py-2 bg-white rounded-md">
                        <div className="flex w-full">
                            <div className="w-1/2 flex items-center">
                                <div className="w-2/6 ">
                                    <h1 className="text-xs font-medium">Paket Saat ini</h1>
                                </div>
                                <div className="w-4/6  ">
                                    <h1 className="text-xl font-bold">Starter</h1>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <p className="font-medium text-xs text-right">Aktif sampai dengan</p>
                                <h1 className="text-xs font-bold text-right">{currentDate}</h1>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="w-1/2 flex items-center">
                                <div className="w-2/6 ">
                                    <h1 className="text-xs font-medium">Devices</h1>
                                </div>
                                <div className="w-4/6 ">
                                    <Progress color="danger" className="w-full" aria-label="Loading..." value={80} />
                                    <p className="text-xxs">8 dari 10 device yang tersedia</p>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col">
                                <h1 className="text-xs font-bold text-right">Upgrade paket untuk meningkatkan batasan fitur yang ada</h1>
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="w-1/2 flex items-center">
                                <div className="w-2/6 ">
                                    <h1 className="text-xs font-medium">Contacts</h1>
                                </div>
                                <div className="w-4/6 ">
                                    <Progress color="success" className="w-full" aria-label="Loading..." value={10} />
                                    <p className="text-xxs">5 dari 100 device yang tersedia</p>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col items-end">
                                <Button color="primary" className="w-3/4 rounded-sm" variant="bordered">
                                    Upgrade Paket
                                </Button>
                            </div>
                        </div>

                        <div className="flex w-full mt-2 justify-center items-center justify-center mt-auto">
                            <Link className="text-xs text-slate-300" href="">Tampilkan kapasitas fitur lainnya</Link>
                        </div>
                    </div>

                    <div className="xl:w-2/5 wfull flex flex-col gap-1 px-4 py-2 bg-white rounded-md">
                        <h1 className="font-bold text-lg">Pesan terakhir</h1>
                        <div className="flex w-full  py-2 rounded-md bg-slate-100">
                            <div className="w-1/5 flex items-center justify-center">
                                <UserCircleIcon className="text-primary w-8" />
                            </div>
                            <div className="w-2/5 flex flex-col ">
                                <h1 className="text-xs font-bold">Anda</h1>
                                <p className="text-xs">Hi apa kabar hari ini?</p>
                            </div>
                            <div className="w-2/5 flex items-center justify-center">
                                <p className="text-xs bg-primary py-1 px-3 rounded-md text-white">Terkirim</p>
                            </div>

                        </div>
                        <div className="flex w-full  py-2 rounded-md bg-slate-100">
                            <div className="w-1/5 flex items-center justify-center">
                                <UserCircleIcon className="text-primary w-8" />
                            </div>
                            <div className="w-2/5 flex flex-col ">
                                <h1 className="text-xs font-bold">Anda</h1>
                                <p className="text-xs">Hi apa kabar hari ini?</p>
                            </div>
                            <div className="w-2/5 flex items-center justify-center">
                                <p className="text-xs bg-primary py-1 px-3 rounded-md text-white">Terkirim</p>
                            </div>

                        </div>
                        <div className="flex w-full  py-2 rounded-md bg-slate-100">
                            <div className="w-1/5 flex items-center justify-center">
                                <UserCircleIcon className="text-success w-8" />
                            </div>
                            <div className="w-2/5 flex flex-col ">
                                <h1 className="text-xs font-bold">Ali</h1>
                                <p className="text-xs">Hi apa kabar hari ini?</p>
                            </div>
                            <div className="w-2/5 flex items-center justify-center">
                                <p className="text-xs bg-success py-1 px-3 rounded-md text-white">Diterima</p>
                            </div>

                        </div>
                        <div className="flex w-full mt-2 justify-center items-center">
                            <Link className="text-xs text-primary" href="">Tampilkan lainnya</Link>
                        </div>
                    </div>
                </div>

                {/*Analitik*/}

                <div className="flex mt-4 w-full flex-col xl:flex-row gap-2">
                    <div className="w-full flex flex-col gap-2 px-4 py-2 bg-white rounded-md">
                        <h1 className="font-bold text-lg">Analitik</h1>

                        <div className="flex mt-4 w-full flex-col xl:flex-row gap-2">
                            <div className="xl:w-2/5 border w-full flex flex-col gap-2 px-4 py-2 bg-white rounded-md">
                                <h1 className="font-bold text-md">Ringkasan hari ini</h1>
                                <div className="flex flex-row w-full justify-between">
                                    <div className="w-1/2 flex  items-center"><Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                variant="bordered"
                                            >
                                                RMX3263<ChevronDownIcon className="w-4" />
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Dynamic Actions" items={items}>
                                            {(item) => (
                                                <DropdownItem
                                                    key={item.key}
                                                    color={item.key === "delete" ? "danger" : "default"}
                                                    className={item.key === "delete" ? "text-danger" : ""}
                                                >
                                                    {item.label}
                                                </DropdownItem>
                                            )}
                                        </DropdownMenu>
                                    </Dropdown>
                                    </div>
                                    <div className="w-1/2 flex items-center">
                                        <div className=" border-md bg-slate-100 py-1 px-4 rounded-md">
                                            <p className=" text-xs">Aktif sejak</p>
                                            <h3 className="font-bold text-md">29.8.2023</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-2 flex gap-2 justify-center">
                                    <div className="w-1/3">
                                        <p className=" text-xs">Pesan Keluar</p>
                                        <h3 className="font-bold text-md">28</h3>
                                    </div>
                                    <div className="w-1/3">
                                        <p className=" text-xs">Pesan Masuk</p>
                                        <h3 className="font-bold text-md">7</h3>
                                    </div>
                                    <div className="w-1/3">
                                        <p className=" text-xs">Pesan Gagal</p>
                                        <h3 className="font-bold text-md">0</h3>
                                    </div>
                                </div>

                            </div>

                            <div className="xl:w-3/5 wfull flex gap-2 border px-4 py-2 bg-white rounded-md">
                                <div className="w-1/2">
                                    <h1 className="font-bold text-lg">Total Statistik pesan</h1>
                                    <div className="w-full mt-8 flex">
                                        <div className="w-1/2">
                                            <p className=" text-xs">Total Pesan Keluar</p>
                                            <h3 className="font-bold text-md">28</h3>
                                        </div>
                                        <div className="w-1/2">
                                            <p className=" text-xs">Total Pesan Gagal</p>
                                            <h3 className="font-bold text-md">8</h3>
                                        </div>

                                    </div>
                                    <p className=" text-xs mt-2">Total Pesan Masuk</p>
                                    <h3 className="font-bold text-md">12</h3>
                                </div>

                                <div className="w-1/2 items-center flex justify-center">
                                    <img src="chart1.svg" className="w-1/2" alt="" />
                                </div>


                            </div>
                        </div>
                        <div className="flex mt-4 w-full flex-col xl:flex-row gap-2">
                            <div className="w-full border  flex flex-col px-4 py-2 bg-white rounded-md">
                                <div className="w-full flex lg:flex-row flex-col gap-2 px-4 py-2 bg-white ">
                                    <div className="lg:min-w-32 w-full border-md bg-slate-100 py-1 px-4 rounded-md">
                                        <p className=" text-xs">Hari ini</p>
                                        <h3 className="font-bold text-md">24</h3>
                                    </div>
                                    <div className="lg:min-w-32 w-full border-md bg-slate-100 py-1 px-4 rounded-md">
                                        <p className=" text-xs">Rata-rata harian</p>
                                        <h3 className="font-bold text-md">7</h3>
                                    </div>
                                    <div className="lg:min-w-32 w-full border-md bg-slate-100 py-1 px-4 rounded-md">
                                        <p className=" text-xs">Bulan ini</p>
                                        <h3 className="font-bold text-md">23</h3>
                                    </div>
                                    <div className="lg:min-w-32 w-full border-md bg-slate-100 py-1 px-4 rounded-md">
                                        <p className=" text-xs">Rata-rata waktu</p>
                                        <h3 className="font-bold text-md">00:02:42</h3>
                                    </div>

                                </div>
                                <h1 className="font-bold text-md mt-8">Grafik chart per jam</h1>
                                <img src="./chart2.svg" alt="" className="w-full" />

                                <h1 className="font-bold text-md mt-8">Trend interaksi pesan</h1>
                                <img src="./chart3.svg" alt="" className="w-full" />
                            </div>

                        </div>

                    </div>


                </div>





            </div>
        </AdminLayout>
    );
};

export default AdminPage;