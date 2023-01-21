import ReceivedRequest from "./ReceivedRequest";

interface IFriendrequestsProps {
}

const Friendrequests: React.FunctionComponent<IFriendrequestsProps> = (props) => {
    const receivedReqData = [
        {
            profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/172204944_4824527224246699_6918722293347789546_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=1&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=uoR8L9ZRJ50AX-5EE3H&tn=SreNJeRuUc7uNJGc&_nc_ht=scontent.fsif1-1.fna&oh=00_AfDuADxuOq71y0_6Oug9eSYKUOeMOrMJ2l1VydRdkl2QHQ&oe=63EED47B",
            name: "Routine Of Nepal Banda",
        },
        {
            profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9XlfE5C5MnsAX8ocxfu&tn=lbg-XjLo8IK3Lred&_nc_ht=scontent.fsif1-1.fna&oh=00_AfCQpEGNS_8BNGhrHmZnIn8utG-JXibE32jSjnkhGzYgAA&oe=63F1DA00",
            name: "Cristiano Ronaldo",
        },
        {
            profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/148677740_271496114335795_4694665719681802490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mMTxf5z3PCcAX8XDVQh&_nc_ht=scontent.fsif1-1.fna&oh=00_AfA8sNVjzrUhnZEScMM4vBncnBXq9v0BWrvK-8F7Moekkw&oe=63F1DE29",
            name: "Nepathya",
        },
    ]

    const friendSuggestions = [
        {
            "name": "Sushan Thapa",
            "url": "https://m.facebook.com/sushan.thapa.7798574?eav=AfZrRr_gGiYVF42cP_Mz6l9lZrZy87EPZDtO2VmubofaI0wK6R2CJfW3pKxoAOBuviE&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/sushan.thapa.7798574?eav=AfZrRr_gGiYVF42cP_Mz6l9lZrZy87EPZDtO2VmubofaI0wK6R2CJfW3pKxoAOBuviE&fref=fc_pymk&paipv=0",
            "study": "Amar English School (A.E.S)"
        },
        {
            "name": "MaNish Basnet",
            "url": "https://m.facebook.com/mb.don.5245?eav=AfaCCbTHGiLgJmCm63M3E864tX2ZYIOEj9baTT648SVWwl7kHqcwJpa73pTg5y2OcZk&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/mb.don.5245?eav=AfaCCbTHGiLgJmCm63M3E864tX2ZYIOEj9baTT648SVWwl7kHqcwJpa73pTg5y2OcZk&fref=fc_pymk&paipv=0",
            "study": "Shree Barchuli Secondary School"
        },
        {
            "name": "Bidur Magar",
            "url": "https://m.facebook.com/bidur.pun.37?eav=AfYGd-5FV1BrLalVTHTZgt29uzw1U9b4V2QQpQLQaKpmlNeHntvRppEQBQ6gqbNr8_E&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/bidur.pun.37?eav=AfYGd-5FV1BrLalVTHTZgt29uzw1U9b4V2QQpQLQaKpmlNeHntvRppEQBQ6gqbNr8_E&fref=fc_pymk&paipv=0",
            "study": "Siddhartha college of science & management,damak 12.jhapa"
        },
        {
            "name": "क्रितिका थापा मगर",
            "url": "https://m.facebook.com/kritika.magar.7165331?eav=AfYQh3pUC0J16iAdiNpq_Mv81ikU3EQXblNRG9F8LwFphtzErRBjy5QuR_vQhfo9KIU&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/kritika.magar.7165331?eav=AfYQh3pUC0J16iAdiNpq_Mv81ikU3EQXblNRG9F8LwFphtzErRBjy5QuR_vQhfo9KIU&fref=fc_pymk&paipv=0",
            "study": "DEVCHULI HIGHER SECONDARY SCHOOL"
        },
        {
            "name": "Pun Bibek",
            "url": "https://m.facebook.com/bishal.thapamagar.374?eav=Afav67bg_Y7BtYllhYt2ZvhkXWqh2KhpBeaQxbcX1C1rz8cMwIzHCbmyE2LwfWNM1oU&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/bishal.thapamagar.374?eav=Afav67bg_Y7BtYllhYt2ZvhkXWqh2KhpBeaQxbcX1C1rz8cMwIzHCbmyE2LwfWNM1oU&fref=fc_pymk&paipv=0",
            "study": "Works at Texas de Brazil"
        },
        {
            "name": "Anish Adhikari",
            "url": "https://m.facebook.com/anish.adhikari.14811?eav=AfaLocMoAwwiz98TcavtUuLG85OASn5EYFOjqvCzZQqSB7xTO9FD5hKPO1XDYU4bTTM&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/anish.adhikari.14811?eav=AfaLocMoAwwiz98TcavtUuLG85OASn5EYFOjqvCzZQqSB7xTO9FD5hKPO1XDYU4bTTM&fref=fc_pymk&paipv=0",
            "study": "Works at Student"
        },
        {
            "name": "Namsu Rana Magar",
            "url": "https://m.facebook.com/namsuranamagar.suman?eav=AfaRcooTepImUx5dnROy50PA1ShavLPXxk1MwATlgXdxQBIV2HQlUIu40GifQ6S89fs&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/namsuranamagar.suman?eav=AfaRcooTepImUx5dnROy50PA1ShavLPXxk1MwATlgXdxQBIV2HQlUIu40GifQ6S89fs&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Thakuri Kanxa",
            "url": "https://m.facebook.com/thakuri.kanxa.549221?eav=AfbIoEvFM3xzvCEi-4x_yv6eLHPCM9kV6vdh3cxm-yJMlfOmpqmo876FLXLeSEP1Spc&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/thakuri.kanxa.549221?eav=AfbIoEvFM3xzvCEi-4x_yv6eLHPCM9kV6vdh3cxm-yJMlfOmpqmo876FLXLeSEP1Spc&fref=fc_pymk&paipv=0",
            "study": "Works at Student"
        },
        {
            "name": "Rabin Thapa",
            "url": "https://m.facebook.com/profile.php?id=100064195697652&eav=AfYxrWWmJ-XHqTbdRG_vKdIN6xl_qKplQaveCaCT-sz_rIBivOdFa82eeRcXBGOiyd4&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100064195697652&eav=AfYxrWWmJ-XHqTbdRG_vKdIN6xl_qKplQaveCaCT-sz_rIBivOdFa82eeRcXBGOiyd4&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Balaram Paudel",
            "url": "https://m.facebook.com/paudel.balram.3?eav=Afa2KHN3dBG8xbiUPQwNJJJZFmyU0OnPezmd7Teh4UwtBm3z-m0_jmJGRMy5ykio3jw&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/paudel.balram.3?eav=Afa2KHN3dBG8xbiUPQwNJJJZFmyU0OnPezmd7Teh4UwtBm3z-m0_jmJGRMy5ykio3jw&fref=fc_pymk&paipv=0",
            "study": "Works at My Own Business"
        },
        {
            "name": "Mina UchaiMalla",
            "url": "https://m.facebook.com/mina.uchaimalla?eav=AfZLXe8HDHLUaWJ1g4_0o9thC6fjYJB1lFNTrEB8QNK1FSKLr6UZKh97T_XdEEl1WqY&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/mina.uchaimalla?eav=AfZLXe8HDHLUaWJ1g4_0o9thC6fjYJB1lFNTrEB8QNK1FSKLr6UZKh97T_XdEEl1WqY&fref=fc_pymk&paipv=0",
            "study": "Butwal"
        },
        {
            "name": "Susmita Gc",
            "url": "https://m.facebook.com/susmita.gc.313?eav=Afb6KbzGwBNrVdUz98KpPxTHqKx6eE1XvaO3xO5aJyYTCfvMPJOIpfBoJwTVBf2p_bs&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/susmita.gc.313?eav=Afb6KbzGwBNrVdUz98KpPxTHqKx6eE1XvaO3xO5aJyYTCfvMPJOIpfBoJwTVBf2p_bs&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Kiran Chhetri",
            "url": "https://m.facebook.com/kiran.chhetri.9047506?eav=AfYHnssz_SbIb7giE3BmsNrcI2eoXtzYncZWmrYHx2HE4FdSglJiydSMn3r1l3I56FI&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/kiran.chhetri.9047506?eav=AfYHnssz_SbIb7giE3BmsNrcI2eoXtzYncZWmrYHx2HE4FdSglJiydSMn3r1l3I56FI&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Deep Singjali",
            "url": "https://m.facebook.com/deep.singjali?eav=AfYf8U5yImuD2usLo2kmOkCr7NkbcJaPI5i5ILcYFqexDRnlNAFtIKgTAWgDw37gS54&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/deep.singjali?eav=AfYf8U5yImuD2usLo2kmOkCr7NkbcJaPI5i5ILcYFqexDRnlNAFtIKgTAWgDw37gS54&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Thapa Bharat",
            "url": "https://m.facebook.com/Bharat.tiens?eav=AfYwMNkEm0jtsWcLDWUSsxLPjSYKPaXtbngjZ44I9UuN8KdW7BBAFz04lrNcQKkyA_8&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/Bharat.tiens?eav=AfYwMNkEm0jtsWcLDWUSsxLPjSYKPaXtbngjZ44I9UuN8KdW7BBAFz04lrNcQKkyA_8&fref=fc_pymk&paipv=0",
            "study": "patan multiple campus"
        },
        {
            "name": "Bishesh Thapa Magar",
            "url": "https://m.facebook.com/minheung.son.5?eav=AfZ5GfK5BWX__Vd6yxae3D2tGVPqvLwWY36LVDWRrXBoJYg7WjkNyFG9ivrHVEfr5K0&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/minheung.son.5?eav=AfZ5GfK5BWX__Vd6yxae3D2tGVPqvLwWY36LVDWRrXBoJYg7WjkNyFG9ivrHVEfr5K0&fref=fc_pymk&paipv=0",
            "study": "Bal Bikash Secondary English Boarding School"
        },
        {
            "name": "Nirvana Pun",
            "url": "https://m.facebook.com/nirvana.pun?eav=AfY2LxxRIPJQMCwgYrXCZoua7g8eb-sLG2pwH5ihUlpm61YpfNxKgBBKv6UrD2yIA7w&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/nirvana.pun?eav=AfY2LxxRIPJQMCwgYrXCZoua7g8eb-sLG2pwH5ihUlpm61YpfNxKgBBKv6UrD2yIA7w&fref=fc_pymk&paipv=0",
            "study": "Rajahar"
        },
        {
            "name": "Santosh Sigdel",
            "url": "https://m.facebook.com/santosh.sigdel1?eav=AfZ4JCVBjHtLbviyQtSpCaH19BEX87u5aWCWN324bmx8j5PPhWUqyZBjJ62208Jd1ww&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/santosh.sigdel1?eav=AfZ4JCVBjHtLbviyQtSpCaH19BEX87u5aWCWN324bmx8j5PPhWUqyZBjJ62208Jd1ww&fref=fc_pymk&paipv=0",
            "study": "wolder at Riyadh, Saudi Arabia"
        },
        {
            "name": "Sameer Khan",
            "url": "https://m.facebook.com/profile.php?id=100066488091688&eav=AfYQSXN_lGfZmnAaBrL0fMtyfDk3aQHe9X_PyC_seLg1yHgfSmdDsj0S_VMrLfeZHYg&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100066488091688&eav=AfYQSXN_lGfZmnAaBrL0fMtyfDk3aQHe9X_PyC_seLg1yHgfSmdDsj0S_VMrLfeZHYg&fref=fc_pymk&paipv=0",
            "study": "Works at Daivar"
        },
        {
            "name": "Adhikari Miresh",
            "url": "https://m.facebook.com/miresh.adhikari.96?eav=AfZ8ky7DZlILu-THE2iun7YOZRb7yK5CzY-goeyqnFuagwIM1DAiN6K3eB79avTdUzU&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/miresh.adhikari.96?eav=AfZ8ky7DZlILu-THE2iun7YOZRb7yK5CzY-goeyqnFuagwIM1DAiN6K3eB79avTdUzU&fref=fc_pymk&paipv=0",
            "study": "Amar English Higher Secondary Boarding School"
        },
        {
            "name": "खाम्जा मगर",
            "url": "https://m.facebook.com/profile.php?id=100044908213270&eav=AfacWiNNGJNZbelm9mP5UJzuPTWBrWuaHWxVo9-cXbxwx0xmbHWw0yMi3Jbl59sitak&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100044908213270&eav=AfacWiNNGJNZbelm9mP5UJzuPTWBrWuaHWxVo9-cXbxwx0xmbHWw0yMi3Jbl59sitak&fref=fc_pymk&paipv=0",
            "study": "Works at Myagdi Darbang"
        },
        {
            "name": "Chitra Malla",
            "url": "https://m.facebook.com/chitra.malla1?eav=Afby7cJhtKvvS0bV6FMLhJbkA7ZhnmCZ5_qWhh9BA6y0LpjRrTKfO88bmgevvX5v5Vc&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/chitra.malla1?eav=Afby7cJhtKvvS0bV6FMLhJbkA7ZhnmCZ5_qWhh9BA6y0LpjRrTKfO88bmgevvX5v5Vc&fref=fc_pymk&paipv=0",
            "study": "DEVCHULI HIGHER SECONDARY SCHOOL"
        },
        {
            "name": "Shrestha Karan",
            "url": "https://m.facebook.com/profile.php?id=100076455594802&eav=AfYZSym0JNKJHjHHTPw7O7q12JHGnl_zxVcitCrtcJT9QxQ2jX8TDXB8UYB8vfZrBvE&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100076455594802&eav=AfYZSym0JNKJHjHHTPw7O7q12JHGnl_zxVcitCrtcJT9QxQ2jX8TDXB8UYB8vfZrBvE&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Munal Lungeli",
            "url": "https://m.facebook.com/munal.lungeli?eav=AfY3iL6Nxno_8-_x93Tew9otUwiRpQehOYrhNSllvoJk8KP_bHgw6o-EuNg6Qe1iRiw&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/munal.lungeli?eav=AfY3iL6Nxno_8-_x93Tew9otUwiRpQehOYrhNSllvoJk8KP_bHgw6o-EuNg6Qe1iRiw&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Anjel Malla Thakuri",
            "url": "https://m.facebook.com/profile.php?id=100073688996516&eav=AfapRtWsTRgpqMo1iqmKn6DGkJNeH1XDhIVM5akFotOWgKVuWxaHoSyv-mT4eW8vkhk&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100073688996516&eav=AfapRtWsTRgpqMo1iqmKn6DGkJNeH1XDhIVM5akFotOWgKVuWxaHoSyv-mT4eW8vkhk&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Sano Manjirō",
            "url": "https://m.facebook.com/dlow.beatboxer.9?eav=AfaBN-xG4x0vHdUqI0kXkrIYPtwmPWvhEb4dpacKhB4wDhAHElK4WBrFag4wIXlHCrU&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/dlow.beatboxer.9?eav=AfaBN-xG4x0vHdUqI0kXkrIYPtwmPWvhEb4dpacKhB4wDhAHElK4WBrFag4wIXlHCrU&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Lahure Mandip",
            "url": "https://m.facebook.com/profile.php?id=100067985464824&eav=Afb1GZb5hiVHpQjVxUiVAy-8Rzup9B6eBI3AKaFhfp-ycGeIgLoPjAo7QaUeYLW8SL8&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100067985464824&eav=Afb1GZb5hiVHpQjVxUiVAy-8Rzup9B6eBI3AKaFhfp-ycGeIgLoPjAo7QaUeYLW8SL8&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Purna Nirmal Adhikari",
            "url": "https://m.facebook.com/purnanirmal.adhikari?eav=Afa0KJzh7cbweJAUMZux03Ex09MdY4ADSnC3nWa_72MWLngFydyHa8Js1xeN-7vJ_Xc&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/purnanirmal.adhikari?eav=Afa0KJzh7cbweJAUMZux03Ex09MdY4ADSnC3nWa_72MWLngFydyHa8Js1xeN-7vJ_Xc&fref=fc_pymk&paipv=0",
            "study": "Works at Doha"
        },
        {
            "name": "Raghav Subedi",
            "url": "https://m.facebook.com/raghav.subedi.3?eav=AfYftFRuBJ3Pe4vgQZ-QJECsZt4vXx5n3CW9alr1avKKFD0KVMkcyKySWU0x224ibws&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/raghav.subedi.3?eav=AfYftFRuBJ3Pe4vgQZ-QJECsZt4vXx5n3CW9alr1avKKFD0KVMkcyKySWU0x224ibws&fref=fc_pymk&paipv=0",
            "study": "Bharatpur, Nepal"
        },
        {
            "name": "दिकेस मगर",
            "url": "https://m.facebook.com/dikesh.thapamagar.3?eav=Afb7afZIDinkZVgwb5ZJdSu4Z3l9gnGP5av46hC4_xuAztKFHdiWJRH8X7VqTJj4ucc&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/dikesh.thapamagar.3?eav=Afb7afZIDinkZVgwb5ZJdSu4Z3l9gnGP5av46hC4_xuAztKFHdiWJRH8X7VqTJj4ucc&fref=fc_pymk&paipv=0",
            "study": "Works at Student"
        },
        {
            "name": "StudyQuest Nepal",
            "url": "https://m.facebook.com/study.edu.961?eav=AfbiADz16gOzU2oMOkJLhwZ-yWkRwRHm48BODb-EjX35N7BYYjRHYEz8sZZTsA0Clgo&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/study.edu.961?eav=AfbiADz16gOzU2oMOkJLhwZ-yWkRwRHm48BODb-EjX35N7BYYjRHYEz8sZZTsA0Clgo&fref=fc_pymk&paipv=0",
            "study": "Narayanghat, Nepal"
        },
        {
            "name": "Rijan Neupane",
            "url": "https://m.facebook.com/rijan.neupane.1272?eav=AfYCglIUKsF38viKz2AkQAdyxK0bSXOo7MQh965OQvz-wR1s2Xb3WcJs1GnNtWpuvQE&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/rijan.neupane.1272?eav=AfYCglIUKsF38viKz2AkQAdyxK0bSXOo7MQh965OQvz-wR1s2Xb3WcJs1GnNtWpuvQE&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Manoz Xettri",
            "url": "https://m.facebook.com/monaj.xettri.106?eav=AfaqEqBgpQstdz_AHi0HXQjN04LJWDoqOl_97HzgR7CcGHYxkd3cO54iaAIVTl6AWPo&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/monaj.xettri.106?eav=AfaqEqBgpQstdz_AHi0HXQjN04LJWDoqOl_97HzgR7CcGHYxkd3cO54iaAIVTl6AWPo&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Neyha Malla Thaquree",
            "url": "https://m.facebook.com/isha.thakuri.161?eav=AfbXEJW3uPhDsFImIK4OwkeDPgYp8X1oNmnQ76EYUGb64peSfg0dRbbzjkRnDxCXTQU&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/isha.thakuri.161?eav=AfbXEJW3uPhDsFImIK4OwkeDPgYp8X1oNmnQ76EYUGb64peSfg0dRbbzjkRnDxCXTQU&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Bhim Magar",
            "url": "https://m.facebook.com/profile.php?id=100052519634593&eav=AfYoccThYOwu9S2prZye4I4ivsis-ErBhMiHAjruTYJliQrRGOzw-7H0kzRao0EPqWI&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100052519634593&eav=AfYoccThYOwu9S2prZye4I4ivsis-ErBhMiHAjruTYJliQrRGOzw-7H0kzRao0EPqWI&fref=fc_pymk&paipv=0",
            "study": "No work,stand by at the home. at Facebook"
        },
        {
            "name": "Bashanti Poon",
            "url": "https://m.facebook.com/bashanti.poon.7?eav=AfZe0rs16PCFwrp2qnoDhOHgF94ZUQdVQjD6udscUTbr9DsyONl-olbnDzDh9_vpa4w&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/bashanti.poon.7?eav=AfZe0rs16PCFwrp2qnoDhOHgF94ZUQdVQjD6udscUTbr9DsyONl-olbnDzDh9_vpa4w&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Sujan Shahi Thakuri",
            "url": "https://m.facebook.com/aarav.thakuri.31?eav=AfZIlRf-4W2boz1aA3Aqh69In4MfKEhLsDK96QL_Ks6HYQQN7PFPuXholuVaHHUNoVo&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/aarav.thakuri.31?eav=AfZIlRf-4W2boz1aA3Aqh69In4MfKEhLsDK96QL_Ks6HYQQN7PFPuXholuVaHHUNoVo&fref=fc_pymk&paipv=0",
            "study": "Works at markting maneger"
        },
        {
            "name": "Yek Narayan Neupanne",
            "url": "https://m.facebook.com/profile.php?id=100009786072139&eav=AfaIn6MmM3JljxwMUhFCXHxIjKiwv2q1gN-SvmNDhiQu8ztMql8qSXgLOxe8O14cdHA&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100009786072139&eav=AfaIn6MmM3JljxwMUhFCXHxIjKiwv2q1gN-SvmNDhiQu8ztMql8qSXgLOxe8O14cdHA&fref=fc_pymk&paipv=0",
            "study": "Kathmandu, Nepal"
        },
        {
            "name": "Patam Khadkathoki",
            "url": "https://m.facebook.com/patam.magar?eav=AfY9PpVbVAyEDwv6quFP-CGD_TJmwcUIIXr_PQHk6NtsyMHeT5sgYnF6zg23c0NZXeM&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/patam.magar?eav=AfY9PpVbVAyEDwv6quFP-CGD_TJmwcUIIXr_PQHk6NtsyMHeT5sgYnF6zg23c0NZXeM&fref=fc_pymk&paipv=0",
            "study": "Beni, Nepal"
        },
        {
            "name": "Anjana Panta",
            "url": "https://m.facebook.com/profile.php?id=100074621454333&eav=Afa6eQPoooTFTiTjm6bc5Ih8LuV0GmaATpNQSCT31OYnA0A_zRiQPU70JhL8dvwcwdI&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100074621454333&eav=Afa6eQPoooTFTiTjm6bc5Ih8LuV0GmaATpNQSCT31OYnA0A_zRiQPU70JhL8dvwcwdI&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Kiran Malla",
            "url": "https://m.facebook.com/kiran.malla.3150?eav=AfYHc5gu9TvXyn-0L9d24adUFITBXwz5fL1GVFZ-kyHqcewbsNfrhJ_ObO4-qeyXy9U&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/kiran.malla.3150?eav=AfYHc5gu9TvXyn-0L9d24adUFITBXwz5fL1GVFZ-kyHqcewbsNfrhJ_ObO4-qeyXy9U&fref=fc_pymk&paipv=0",
            "study": "Works at Student"
        },
        {
            "name": "Bhupendra Pun",
            "url": "https://m.facebook.com/bhupendra.pun.39566?eav=AfbS0ACzw-2OjM7lI--dbapShU0T-QiwsFk3n2GS9Y8z9keX70aAiz8d8YKesYUKW7A&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/bhupendra.pun.39566?eav=AfbS0ACzw-2OjM7lI--dbapShU0T-QiwsFk3n2GS9Y8z9keX70aAiz8d8YKesYUKW7A&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Babu Gurung",
            "url": "https://m.facebook.com/profile.php?id=100069820833879&eav=AfadOXJn8rYMeIKFgYcgAsQW0G1S-QpTW0fXI2SfTjKGEXGLnIHx1LiljjJQpLr9u10&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100069820833879&eav=AfadOXJn8rYMeIKFgYcgAsQW0G1S-QpTW0fXI2SfTjKGEXGLnIHx1LiljjJQpLr9u10&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Prem Purja Magar",
            "url": "https://m.facebook.com/profile.php?id=100056784833549&eav=Afb3O91feVFnnqglceH58FznFFI7a0YfoYvrGuU9_7vVrfSOFGZlxFscizvCLvCBqVM&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/profile.php?id=100056784833549&eav=Afb3O91feVFnnqglceH58FznFFI7a0YfoYvrGuU9_7vVrfSOFGZlxFscizvCLvCBqVM&fref=fc_pymk&paipv=0"
        },
        {
            "name": "Mahesh Passa",
            "url": "https://m.facebook.com/mahesh.shrestha.566?eav=AfZPdFQRT5ptrlpudYJQUE3drh_UE0TCIiKR7bMokxbQNMsBJhfSgwihKbzIgM7fgbw&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/mahesh.shrestha.566?eav=AfZPdFQRT5ptrlpudYJQUE3drh_UE0TCIiKR7bMokxbQNMsBJhfSgwihKbzIgM7fgbw&fref=fc_pymk&paipv=0",
            "study": "Food and Beverage Server at Huqqabaz Garden"
        },
        {
            "name": "Gopal Chhetri",
            "url": "https://m.facebook.com/gopal.chhetri?eav=AfZcCPilwk9K1aH00nMiWxGGs2MizNHkYqHIap6x6te65XTVQ8u6wUOlFYfhyv1wDkY&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/gopal.chhetri?eav=AfZcCPilwk9K1aH00nMiWxGGs2MizNHkYqHIap6x6te65XTVQ8u6wUOlFYfhyv1wDkY&fref=fc_pymk&paipv=0",
            "study": "Education at Amar English School (A.E.S)"
        },
        {
            "name": "Biswash Poudel",
            "url": "https://m.facebook.com/bishal.poudel.9406?eav=AfaDJx9XgnvKcO877XBvYqwdxoYCZCifQ0-XXLOPTxTkWpidDW7h5EPJOdzVeLywyO4&fref=fc_pymk&paipv=0",
            "profilePicture": "",
            "profilePicture_url": "https://m.facebook.com/bishal.poudel.9406?eav=AfaDJx9XgnvKcO877XBvYqwdxoYCZCifQ0-XXLOPTxTkWpidDW7h5EPJOdzVeLywyO4&fref=fc_pymk&paipv=0",
            "study": "Pokhara"
        }
    ]

    console.log(Friendrequests)
    return (
        <div className='p-2'>
            <div className='text-xl font-bold'>Friends</div>
            {receivedReqData.map((eachRequest) => {
                return (
                    <ReceivedRequest image={eachRequest.profile} name={eachRequest.name} />
                )
            })}
        </div>
    );
};

export default Friendrequests;
