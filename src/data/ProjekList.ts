export type ProjekType = {
    nama: string;
    deadline: string;
    status: string;
}

export const projekList: ProjekType[] = [
    {
        nama: "Website Portofolio",
        deadline: "12-04-2025",
        status: "Selesai",
    },
    {
        nama: "Website Toko Roti",
        deadline: "12-07-2025",
        status: "Proses",
    },
]