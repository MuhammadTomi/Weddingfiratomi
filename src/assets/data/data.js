export const data = {
    bride: {
        L: {
            id: 1,
            name: 'MuhammadTomi S.T',
            child: 'Putra ke dua',
            father: 'Marzuki',
            mother: 'Alm. Ainul Mardiah',
            image: './src/assets/images/profiltomi.png'
        },
        P: {
            id: 2,
            name: 'FiraKamelia S.Pd',
            child: 'Putri pertama',
            father: 'Agustiar (Karyawan PT.Arco)',
            mother: 'Yusmidar',
            image: './src/assets/images/profilfira.png'
        },

        couple: './src/assets/images/gl1.jpg'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'April',
            date: '22',
            day: 'Selasa',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Mei',
            date: '27',
            day: 'Selasa',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Dusun. Mesjid, RT 000/ RW 000, Desa.Alue Bu Tuha, Kec.Peureulak Barat, Kab.Aceh Timur'
    },

    link: {
        calendar: 'https://calendar.app.google/kH8Tmh8EEq4Y5SM26',
        map: 'https://maps.app.goo.gl/EXEtTQgPAa6xoUxBA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/gl1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/gl2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/gl3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/gl4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/gl5.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'MUHAMMAD TOMI',
            icon: './src/assets/images/bsibaru.png',
            rekening: '7222768343'
        },
        {
            id: 2,
            name: 'FIRA KAMELIA',
            icon: './src/assets/images/bsibaru.png',
            rekening: '7168568187'
        },
    ],

    audio: './src/assets/audio/song3.m4a',

    api: 'https://script.google.com/macros/s/AKfycbwLe_MAwfH6dDXCnNChQXfpbWOnkZ_hh8Rdaie4DBV2_hW-0zLYOaZe_hkObit9x__wbQ/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
