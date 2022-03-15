import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const DataContext = (props) => {

    const dataObj = [{
        category:"tourism",
        data:[{
            id:1,
            name:"Kerala: God's Own Country",
            info:"visit kerala",
            img:"https://images.unsplash.com/photo-1609828913552-f9138ed9e42d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788&q=80",
            display_text:"Kerala, the Southernmost state of India is the spice hotspot of the world since ancient times. Kerala is a state which is a biodiversity hotspot in Incredible India. This beautiful land is rightly called God’s Own Country, given to its lush green landscapes and crystal clear beaches that will leave you awestruck",
            para1:"Kerala, southwestern coastal state of India. It is a small state, constituting only about 1 percent of the total area of the country. Kerala stretches for about 360 miles (580 km) along the Malabar Coast, varying in width from roughly 20 to 75 miles (30 to 120 km). It is bordered by the states of Karnataka (formerly Mysore) to the north and Tamil Nadu to the east and by the Arabian Sea to the south and west.",
            para2:"With all elements of nature in it, Kerala leads the country in various aspects like literacy rate, sex ratio, least population growth, and travel & tourism. Kerala is known as Keralam in the Malayalam Language. Kerala has so many breathtaking destinations that anyone who wants to explore new places should visit Kerala once in his/her lifetime and add it to their bucket list."
        },{
            id:2,
            name:"Sikkim: Valley of Rice",
            info:"visit sikkim",
            img:"https://www.tripsavvy.com/thmb/58A3iO4pNLWV-yojm0QbsrmurbM=/2121x1414/filters:fill(auto,1)/GettyImages-606222988-5a823cff1d64040037dfd9a1.jpg",
            display_text:"Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers.",
            para1:"A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.",
            para2:"Long a sovereign political entity, Sikkim became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim is of great political and strategic importance for India because of its location along several international boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688."
        },{
            id:3,
            name:"Mumbai: Bambai - Sapno ki Mayanagri",
            info:"visit Mumbai",
            img:"https://traveltoplist.com/wp-content/uploads/2017/02/places-to-visit-in-mumbai-768x417.jpg",
            display_text:"Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva",
            para1:"Mumbai, long the centre of India’s cotton textile industry, subsequently developed a highly diversified manufacturing sector that included an increasingly important information technology (IT) component.",
            para2:"The city of Mumbai occupies a peninsular site on Bombay Island, a landmass originally composed of seven islets lying off the Konkan coast of western India. Since the 17th century the islets have been joined through drainage and reclamation projects, as well as through the construction of causeways and breakwaters, to form Bombay Island. East of the island are the sheltered waters of Mumbai (Bombay) Harbour."
        },{
            id:4,
            name:"Madhya Pradesh: Heart of India",
            info:"visit Madhya Pradesh",
            img:"https://tourism.mp.gov.in/images/Gallary/FooterGallery/01082018060705MAHESHWAR%20-%20FORT.jpg",
            display_text:"Madhya Pradesh is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions.",
            para1:"The natural beauty of the state is equally varied. Consisting largely of a plateau, the State has everything, from mighty mountain ranges to meandering rivers to miles of verdant forests. In fact a large part of Madhya Pradesh is under the forest cover, offering a unique and exciting panorama of wildlife.",
            para2:" Let the hands of time which have rested lightly on the chhatris, palaces and forts of Orchha and Gwalior, whisper the tales of medieval India. The temples of Khajuraho are India’s unique gift to the world, representing love and joys of life in a sublime expression."
        },{
            id:5,
            name:"Kalaburagi: Land of Stones",
            info:"Visit Kalburgai",
            img:"https://cdn.s3waas.gov.in/s306997f04a7db92466a2baa6ebc8b872d/uploads/2018/07/2018072516-1024x683.jpg",
            display_text:"Kalaburagi, also known as Gulbarga, is a city in the Indian state of Karnataka. It is the administrative headquarters of the Kalaburagi district and is the largest city in the region of North Karnataka.",
            para1:"The District was under the rule of Nijam s of Hyderabad before independence. The district has a rich background of knowledge and culture. The existence of university at Nagai in Chitapur, Vignaneeshwaras Mitakshara, Nrupatungas Kavirajmarg and the religious and social revolution led by Shivsharanas and the Sufi saint Banda Nawaz are all evidence of it.",
            para2:"The weather in Kalaburagi consists of 3 main seasons. The summer which spans from late February to mid June. It is followed by the south west monsoon which spans from the late June to late September heavy rainfall may go up to 750mm. It is then followed by dry winter weather until mid January."
        }]
    },{
        category:"fitness",
        data:[{
            id:6,
            name:"Yoga",
            info:"you must do yoga",
            img:"https://images.sadhguru.org/d/46272/1633197086-1633197085450.jpg",
            display_text:"Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being.",
            para1:"Yoga has been around for millennia. According to some records, it was developed in Northern India over 5,000 years ago, and according to data published in 2004 in the journal Alternative Therapies in Health and Medicine, an estimated 15 million American adults have used yoga at least once in their lifetime.",
            para2:"and more than 7.4 million participated in the year prior to when the research was conducted. Individuals interviewed for this research reported that they used yoga for wellness (stressreduction, quality of life), health conditions, and specific ailments like back or neck pain, and 90% felt yoga was very or somewhat helpful."
        },
        {
            id:7,
            name:"Areobics",
            info:"you must do aerobics",
            img:"https://previews.123rf.com/images/lentolo/lentolo1212/lentolo121200041/16756579-aerobics-class-in-einem-gym-italien.jpg",
            display_text:"Aerobics is a form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines with the goal of improving all elements of fitness (flexibility, muscular strength, and cardio-vascular fitness).",
            para1:"Aerobic or with oxygen exercises provide cardiovascular conditioning. The American Heart Association recommends a minimum of 30 minutes of cardiovascular exercise 5 to 7 days per week. Don't forget warm-up, cool-down and stretching exercises in your aerobic exercise session.",
            para2:"The intensity is determined by how hard you are working. The intensity of the exercise is determined by what your goals are, what limitations you have, and your current fitness level."
        },
        {
            id:8,
            name:"Exercise",
            info:"exercise is good for health",
            img:"https://familydoctor.org/wp-content/uploads/2016/11/exercise.jpg",
            display_text:"Examples include brisk walking, jogging, swimming, and biking. Strength, or resistance training, exercises make your muscles stronger. Some examples are lifting weights and using a resistance band. Balance exercises can make it easier to walk on uneven surfaces and help prevent falls.",
            para1:"Whether people engage in light exercise, such as going for a walk, or high intensity activities, for example, uphill cycling or weight training, regular exercise provides a huge range of benefits for the body and mind.",
            para2:"Taking part in exercise of any intensity every day is essential for preventing a range of diseases and other health issues."
        },{
            id:9,
            name:"Sprint",
            info:"sprint, also called dash, in athletics (track and field), a footrace over a short distance.",
            img:"https://s2.reutersmedia.net/resources/r/?m=02&d=20210806&t=2&i=1571227967&w=&fh=545&fw=810&ll=&pl=&sq=&r=2021-08-06T191713Z_41363_MRPRC2RZO9T5T55_RTRMADP_0_OLYMPICS-2020-EDITORS-CHOICE",
            display_text:"It is used in many sports that incorporate running, typically as a way of quickly reaching a target or goal, or avoiding or catching an opponent.",
            para1:"The 400m oval running track is split into eight lanes, where each lane is 4ft wide. Up to eight athletes compete in a single race. Competitions are conducted in a heats format, where athletes in groups of eight take part in a every race, with winners moving on to the next round, until the final winner is decided.",
            para2:"Sprint races can be of various distances from 50 - 400m. The three formats used for the Olympics are: 100m, 200m and 400m. The 100m and 400m races are also conducted in a relay format where a team of four each run a leg and pass a baton from one runner to the next."
        },{
            id:10,
            name:"Calisthenics",
            info:"Calisthenics are exercises that don't rely on anything but a person's own body weight.",
            img:"https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_17,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/10/15/7e250c55-e482-4db7-a575-4b5fc337f90e/man-handstand-calishenics-park-london",
            display_text:"Calisthenics or callisthenics is a form of strength training consisting of a variety of movements that exercise large muscle groups, such as standing, grasping, pushing, etc.",
            para1:"Calisthenics were developed in ancient Greece and became popular again in the early 19th century. Today, fitness training of athletes, military personnel, law enforcement officers, and people trying to keep in shape use these exercises for warming up for strenuous sports or to help build up their bodies.",
            para2:"he effects of a calisthenics training intervention on posture, strength and body composition found that calisthenics training is an effective training solution to improve posture, strength and body composition without the use of any major training equipment"
        }]
    },{
        category:"food",
        data:[{
            id:11,
            name:"VadaPav",
            info:"A vegetarian fast food dish.",
            img:"https://www.cleartrip.com/collections/wp-content/uploads/2019/03/batatavada-559x330.jpg",
            display_text:"If you are not a Mumbaikar, this is something which should not be skipped. Whether it”s for breakfast, lunch or teatime, Batata Vada can go with anything.Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
            para1:"Vada pav, alternatively spelt wada pao, is a vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle. It is generally accompanied with one or more chutneys and a green chili pepper.",
            para2:"The carbohydrate-rich snack catered to the cotton mill workers of what was then known as Girangaon. This potato dumpling (batata vada) placed inside a pav was quick to make, cheap, and much convenient over the batata bhaji and chapati combination, which couldn't be eaten in overcrowded local trains."
        },{
            id:12,
            name:"Puran poli",
            info:"Puran puri, Puran poli, Holige, Obbattu, or Bobbattu, is an Indian sweet flatbread that originates from Southern India.",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Maharashtrian_Puran_Poli.jpg/1200px-Maharashtrian_Puran_Poli.jpg",
            display_text:"Karnataka. It is a special dish served in the state of Karnataka on all occasions, especially during Yugadi/Ugadi.I have vivid memories of my grandmother, making piles of these golden soft-cooked Poli for our large extended family of uncles, aunts, and cousins. The best part of these elaborate meals was everyone helping out in the kitchen with various chores while having fun preparing the meal. The ghee-laden Poli’s are served with saffron and cardamom-infused milk along with other mouthwatering sides.",
            para1:"Holi - the festival of color, the celebration of the victory of good over evil, marks the arrival of spring. Holi, is a popular Hindu festival celebrated over 2-5 days in India. On the evening of the first day, public bonfires are made, called Holika Dahan. On the next day (or 5th day in some states) people play with colors",
            para2:"Diwali- which translates to a row of lights, is the main Hindu festival celebrated in autumn."
        },{
            id:13,
            name:"Naan",
            info:"Naan is a leavened, oven-baked flatbread. You normally serve Naan with all meals.",
            img:"https://www.blueosa.com/wp-content/uploads/2020/07/garlic-naam.jpg",
            display_text:"This bread is the perfect combination of chewy and crispy, buttery and garlicky. It’s exactly what every Indian dish needs to complement the otherwise bright and intense flavors.Its name comes from the Persian word for bread. Naan was originally made in two versions at the Imperial Court in Delhi - naan-e-tunuk (light bread) and naan-e-tanuri ",
            para1:"Its name comes from the Persian word for bread. Naan was originally made in two versions at the Imperial Court in Delhi - naan-e-tunuk (light bread) and naan-e-tanuri ",
            para2:"The form naan has a widespread distribution, having been borrowed in a range of languages spoken in Central Asia and the Indian subcontinent, where it usually refers to a kind of flatbread (tandyr nan). The spelling naan has been recorded as being first attested in 1979, but dates back at least to 1975, and has since become the normal English spelling."
        },{
            id:14,
            name:"Tandoori Chicken",
            info:"The chicken is marinated in yogurt and seasoned with the spice mixture tandoori masala.",
            img:"https://www.licious.in/blog/wp-content/uploads/2021/01/shutterstock_400329463-min-1.jpg",
            display_text:"Tandoori chicken is a popular North Indian dish consisting of roasted chicken prepared with yogurt and spices. The name comes from the type of cylindrical clay oven, a tandoor, in which the dish is traditionally prepared.Sounds unbelievable, but historians are said to have found the first evidence of a meat preparation which looked like Tandoori Chicken in the ruins of Harappa.",
            para1:"Sounds unbelievable, but historians are said to have found the first evidence of a meat preparation which looked like Tandoori Chicken in the ruins of Harappa.",
            para2:"Ancient Sanskrit treatise Sushruta Samhita mentions meat marinated with mustard powder and fragrant spices being cooked in clay ovens."
        },{
            id:15,
            name:"Momo",
            info:"Momos are made with maida (refined flour) which is the starchy part of the grain after the removal of its fibrous bran.",
            img:"https://im.indiatimes.in/media/content/2019/Aug/momos_1565010575_725x725.jpg",
            display_text:"Dumpling or Momo, as it is more popularly known has become quite a staple among the street food bandwagon of India.Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan, as well as people of the Indian regions of Darjeeling, Ladakh, Sikkim, Assam, Uttarakhand, Himachal Pradesh and Arunachal Pradesh.",
            para1: "Momo is a type of steamed dumpling with some form of filling. Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan, as well as people of the Indian regions of Darjeeling, Ladakh, Sikkim, Assam, Uttarakhand, Himachal Pradesh and Arunachal Pradesh.",
            para2:"Momos from the NortheastShillong is one place where it’s easy to get some of the most delicious dumplings as compared to the other states. Expect meaty fillings in creamy, light shells with spicy chutney to go with it"
        }]
    },{
        category:"technology",
        data:[{
            id:16,
            name:"Cyber Security",
            info:"Cyber security is the application of technologies.",
            img:"https://s3.amazonaws.com/brt.org/lock-technology-cybersecurity-header.jpg",
            display_text:"Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.It is a mistake to believe that you are of no interest to cyber attackers. Everyone who is connected to the Internet needs cyber security. This is because most cyber attacks are automated and aim to exploit common vulnerabilities rather than specific websites or organisations.",
            para1:"Privacy laws such as the GDPR (General Data Protection Regulation) and DPA (Data Protection Act) 2018 can mean significant fines for organisations that suffer cyber security breaches. There are also non-financial costs to be considered, like reputational damage.",
            para2:"New regulations and reporting requirements make cyber security risk oversight a challenge. The board needs assurance from management that its cyber risk strategies will reduce the risk of attacks and limit financial and operational impacts."
        },{
            id:17,
            name:"Web 3.0",
            info:"Web3 is an idea for a new iteration of the World Wide Web based on blockchain technology.",
            img:"https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png",
            display_text:"Web3 is distinct from Tim Berners-Lee's 1999 concept for a semantic web. In 2006, Berners-Lee described the semantic web as a component of Web 3.0, which is different than the term Web3 in crypto context.The term Web3 was coined by Polkadot founder and Ethereum co-founder Gavin Wood in 2014, referring to a decentralized online ecosystem based on blockchain. In 2021, the idea of Web3 gained popularity. Particular interest spiked toward the end of 2021, largely due to interest from cryptocurrency enthusiasts and investments from high-profile technologists and companies. Executives from venture capital firm Andreessen Horowitz traveled to Washington, D.C. in October 2021 to lobby for the idea as a potential solution to questions about regulation of the web, with which policymakers have been grappling.",
            para1:"Networks like Solana offer several hundred digit millisecond latency and transaction costs of a small fraction of a penny. Unlike the current financial system, users do not have to go through the traditional numerous, friction-filled steps to interact with and participate in the network. All they need to do is download or install a wallet, and they can start sending and receiving payments without any gatekeeping.These systems are overly complex and still do not enable true international interoperability between participants. They also require you to hand over your sensitive information and personal data in order to use them.Crypto wallets like MetaMask and Torus enable you to integrate easy, anonymous, and secure international payments and transactions into web3 applications.",
            para2:"To get the money, they take on venture capital and give away a percentage of the company. This investment immediately introduces mis-aligned incentives that will, in the long run, not align well with building out the best user experience."
        },{
            id:18,
            name:"Cryptocurrency",
            info:"A cryptocurrency is an encrypted data string that denotes a unit of currency.",
            img:"https://www.howtogeek.com/wp-content/uploads/2021/08/shutterstock_1434643079.jpg?height=200p&trim=2,2,2,2",
            display_text:"A cryptocurrency is an encrypted data string that denotes a unit of currency. It is monitored and organized by a peer-to-peer network called a blockchain, which also serves as a secure ledger of transactions, e.g., buying, selling, and transferring. Unlike physical money, cryptocurrencies are decentralized, which means they are not issued by governments or other financial institutions. Cryptocurrencies are created (and secured) through cryptographic algorithms that are maintained and confirmed in a process called mining, where a network of computers or specialized hardware such as application-specific integrated circuits (ASICs) process and validate the transactions. The process incentivizes the miners who run the network with the cryptocurrency.",
            para1:"Individual coin ownership records are stored in a digital ledger, which is a computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership. Despite their name, cryptocurrencies are not necessarily considered to be currencies in the traditional sense and while varying categorical treatments have been applied to them, including classification as commodities, securities, as well as currencies, cryptocurrencies are generally viewed as a distinct asset class in practice.",
            para2:"Some crypto schemes use validators to maintain the cryptocurrency. In a proof-of-stake model, owners put up their tokens as collateral. In return, they get authority over the token in proportion to the amount they stake. Generally, these token stakers get additional ownership in the token over time via network fees, newly minted tokens or other such reward mechanisms."
        },{
            id:19,
            name:"Artificial intelligence",
            info:"Artificial intelligence is intelligence demonstrated by machines.",
            img:"https://www.sciencenewsforstudents.org/wp-content/uploads/2021/08/LL_AI_feat-1030x580.jpg",
            display_text:"Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of intelligent agents: any system that perceives its environment and takes actions that maximize its chance of achieving its goals.Some popular accounts use the term artificial intelligence to describe machines that mimic cognitive functions that humans associate with the human mind, such as learning and problem solving, however, this definition is rejected by major AI researchers.",
            para1:"The major limitation in defining AI as simply building machines that are intelligent is that it doesn't actually explain what artificial intelligence is? What makes a machine intelligent? AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry. ",
            para2:"However, decades before this definition, the birth of the artificial intelligence conversation was denoted by Alan Turing's seminal work, Computing Machinery and Intelligence (PDF, 89.8 KB)(link resides outside of IBM), which was published in 1950. In this paper, Turing, often referred to as the father of computer science, asks the following question, Can machines think?  From there, he offers a test, now famously known as the Turing Test, where a human interrogator would try to distinguish between a computer and human text response. While this test has undergone much scrutiny since its publish, it remains an important part of the history of AI as well as an ongoing concept within philosophy as it utilizes ideas around linguistics."
        },{
            id:20,
            name:"IOT: Internet Of Things",
            info:"The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors.",
            img:"https://dmexco-lightsails-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2020/10/19091519/internet-of-things-scaled.jpeg",
            display_text:"The Internet of things (IoT) describes physical objects (or groups of such objects) that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks. Internet of Things has been considered a misnomer because devices do not need to be connected to the public internet, they only need to be connected to a network and be individually addressable.",
            para1:"The field has evolved due to the convergence of multiple technologies, including ubiquitous computing, commodity sensors, increasingly powerful embedded systems, and machine learning. Traditional fields of embedded systems, wireless sensor networks, control systems, automation (including home and building automation), independently and collectively enable the Internet of things. In the consumer market, IoT technology is most synonymous with products pertaining to the concept of the smart home, including devices and appliances (such as lighting fixtures, thermostats, home security systems and cameras, and other home appliances) that support one or more common ecosystems, and can be controlled via devices associated with that ecosystem, such as smartphones and smart speakers. IoT is also used in healthcare systems.",
            para2:"There are a number of concerns about the risks in the growth of IoT technologies and products, especially in the areas of privacy and security, and consequently, industry and governmental moves to address these concerns have begun, including the development of international and local standards, guidelines, and regulatory frameworks."
        }]
    }]

    const [data] = useState(dataObj);
    return (
        <>
        <BlogContext.Provider value = {data}>
            {props.children}
        </BlogContext.Provider>
        </>
    )
}