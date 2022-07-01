
let moviesList =[
    {
        name:"Ante Sundaraniki",
        src: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ante-sundaraniki-et00323425-12-05-2022-06-56-55.jpg",
        language:"Telugu",
        censor: "U",
        genre:"Comedy,Romantic",
        picture:"2D",
        release:"10 Jun,2022",
        duration:"2 hrs 56 mins",
        crew:{
            director:["Vivek Athreya"],
            music:["Vivek sagar"]
        },
        actors:[" Nani Ghanta","Nazriya Nazim"]
    },
    {
        name:"Bhool Bhulaiyaa 2",
        src: "https://assets.gadgets360cdn.com/pricee/assets/product/202204/Bhool_Bhulaiyaa_2_1650976194.jpeg",
        language:"Hindi",
        censor: "U/A",
        genre:"Comedy,Horror",
        picture:"2D",
        release:"20 May,2022",
        duration:"2 hrs 23 mins",
        crew:{
            director:["Anees Bazmee"],
            music:[" Pritam Chakraborty, Tanishk Bagchi, Sandeep Shirodkar"]
        },
        actors:["Kartik Aaryan","Kiara Advani","Tabu","Amar Upadhyay","Karamveer Choudhary"]
    },
    {
        name:"Buddies",
        src: "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/buddies-et00326109-17-06-2022-10-32-45.jpg",
        language:"Kannada",
        censor: "U",
        genre:"Drama,Thriller",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 20 mins",
        crew:{
            director:["Gurutej Shetty"],
            music:["Judah Sandhy"]
        },
        actors:["Kiran Raj","Siri Prahlad"]
    },
    {
        name:"Charlie 777",
        src: "https://www.filmibeat.com/img/popcorn/movie_posters/777charlie-20190606104001-16433.jpg",
        language:"Kannada",
        censor: "U/A",
        genre:"Adventure, Comedy, Drama",
        picture:"2D",
        release:"10 Jun,2022",
        duration:"2 hrs 16 mins",
        crew:{
            director:["Kiranraj K"],
            music:["Nobin Paul"]
        },
        actors:["Rakshit Shetty","Sangeetha Sringeri"]
    },
    {
        name:"Doctor Strange in the Multiverse of Madness",
        src: "https://cdnb.artstation.com/p/assets/images/images/048/508/937/large/hazza-jarrar-drs22.jpg?1650236508",
        language:"English",
        censor: "U/A",
        genre:"Adventure,Fantasy",
        picture:"3D",
        release:"5 Jun,2022",
        duration:"2 hrs 06 mins",
        crew:{
            director:["Sam Raimi"],
            music:[" Danny Elfman","Michael Giacchino"]
        },
        actors:["Benedict Cumberbatch","Rachel McAdams"]
    },
    {
        name:"Elvis",
        src: "https://pbs.twimg.com/media/FS-dRmHUcAAe_o9?format=jpg&name=small",
        language:"English",
        censor: "U/A",
        genre:"Drama,Musical Biography",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 41 mins",
        crew:{
            director:["Baz Luhrmann"],
            music:["Elliot Wheeler"]
        },
        actors:["Olivia DeJonge","Tom Hanks"]
    },
    {
        name:"Gangster Gangaraju",
        src: "https://m.media-amazon.com/images/M/MV5BNTFhZmQ3ZGItOWNiNC00MDI1LWJiMjMtZTVhOTNlZWM5NDM5XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg",
        language:"Telugu",
        censor: "U/A",
        genre:"Action,Crime,Drama",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 12 mins",
        crew:{
            director:["Eeshaan Suryaah"],
            music:["Sai Karthik"]
        },
        actors:["Laksh Chadalavada","Vedieka Dutt","Vennela Kishore"]
    },
    {
        name:"Heaven",
        src: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/large/heaven-et00330842-08-06-2022-05-03-18.jpg",
        language:"Malayalam",
        censor: "U",
        genre:"Crime,Thriller",
        picture:"2D",
        release:"17 Jun,2022",
        duration:"2 hrs 10 mins",
        crew:{
            director:["Unni Govindraj"],
            music:["Gopi Sundar"]
        },
        actors:["Suraj Venjaramoodu","Alencier Ley Lopez","Jaffer Idukki","Vinaya Prasad"]
    },
    {
        name:"Janhit Mein Jaari",
        src: "https://m.media-amazon.com/images/M/MV5BOTA4YWU3ZGMtOTAwYy00MTIzLTk0YjYtMGYzMTg4YTM4Y2UxXkEyXkFqcGdeQXVyMzE4NjMwMjc@._V1_.jpg",
        language:"Hindi",
        censor: "U/A",
        genre:"Comedy,Drama,Social",
        picture:"2D",
        release:"10 Jun,2022",
        duration:"2 hrs 27 mins",
        crew:{
            director:["Jai Basantu Singh"],
            music:["Aman Pant"]
        },
        actors:["Vijay Raaz","Nushrratt Bharuccha","Anud Singh Dhaka","Tinnu Anand"]
    },
    {
        name:"Jugjugg Jeeyo",
        src: "https://cdn.bollywoodmdb.com/movies/largethumb/2021/jug-jugg-jeeyo/jug-jugg-jeeyo-poster-5.jpg",
        language:"Hindi",
        censor: "U/A",
        genre:"Comedy,Family,Romantic",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 30 mins",
        crew:{
            director:["Raj Mehta"],
            music:["Mithoon","Tanishk Bagchi"]
        },
        actors:["Varun Dhawan","Kiara Advani","Anil Kapoor","Neetu Singh","Maniesh Paul","Prajakta Koli"]
    },
    {
        name:"Jurassic World Dominion",
        src: "https://i.pinimg.com/originals/13/d2/6e/13d26e9caeca3b107a0e09625c479c20.jpg",
        language:"English",
        censor: "U/A",
        genre:"Action",
        picture:"3D",
        release:"10 Jun,2022",
        duration:"2 hrs 26 mins",
        crew:{
            director:["Colin Trevorrow"],
            music:["Michael Giacchino"]
        },
        actors:["Bryce Dallas Howard","Chris Pratt","DeWanda Wise","Laura Dern","Sam Neill"]
    },
    {
        name:"Harikathe Alla Girikathe",
        src: "https://m.media-amazon.com/images/M/MV5BMTAyY2YxZGUtZjkyOC00NmEwLTk2NWYtMTkwYjJhYWQ4OTUyXkEyXkFqcGdeQXVyMTA1NzEzOTU1._V1_.jpg",
        language:"Kannada",
        censor: "U/A",
        genre:"Comedy",
        picture:"2D",
        release:"23 Jun,2022",
        duration:"2 hrs 05 mins",
        crew:{
            director:["Karan Ananth, Anirudh Mahesh"],
            music:["Vasuki Vaibhav"]
        },
        actors:["Rishab Shetty","Rachana inder","N P Thapashwini","Honnavalli Krishna","Pramod Shetty"]
    },
    {
        name:"Kochaal",
        src: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kochaal-et00329616-26-05-2022-01-02-54.jpg",
        language:"Malayalam",
        censor: "U/A",
        genre:"Drama,Thriller",
        picture:"2D",
        release:"10 Jun,2022",
        duration:"2 hrs 27 mins",
        crew:{
            director:["Shyam Mohan"],
            music:["PS Jayhari"]
        },
        actors:["S. V. Krishnasankar","Murali Gopy","Shine Tom Chacko","Indrans","Renji Panicker"]
    },
    {
        name:"Lightyear",
        src: "https://i.pinimg.com/originals/96/20/65/9620658b4435633babe392cee1e93dc5.jpg",
        language:"English",
        censor: "U",
        genre:"Action,Adventure,Animation,Sci-Fi",
        picture:"2D,4DX,IMAX 2D,4DX 3D,IMAX 3D,3D",
        release:"17 Jun,2022",
        duration:"1 hr 45 mins",
        crew:{
            director:["Angus MacLane"],
            music:["Michael Giacchino"]
        },
        actors:["Chris Evans","Keke Palmer","Taika Waititi","Peter Sohn","Uzo Aduba","James Brolin"]
    },
    {
        name:"Maayon",
        src: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/maayon-tamil-et00315510-1655807242.jpg",
        language:"Tamil",
        censor: "U",
        genre:"Mythological, Mystery, Thriller",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 12 mins",
        crew:{
            director:["Kishore N"],
            music:["Isaignani Ilaiyaraaja"]
        },
        actors:["Sibi Sathyaraj","Tanya Ravichandran","K.S.Ravikumar","Radha Ravi"]
    },
    {
        name:"Major",
        src: "https://m.media-amazon.com/images/M/MV5BODQxZGE3NjEtMjQ4My00NTcyLTg5NGUtZjc4NGMwZmNkOWQ1XkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg",
        language:"Telugu",
        censor: "U/A",
        genre:"Drama",
        picture:"2D",
        release:"03 Jun,2022",
        duration:"2 hrs 29 mins",
        crew:{
            director:["Sashi Kiran Tikka"],
            music:["Sricharan Pakala"]
        },
        actors:["Adivi Sesh","Sobhita Dhulipala"]
    },
    {
        name:"Maamanidhan",
        src: "https://m.media-amazon.com/images/M/MV5BYTQ0MzNlNDEtMDIyMS00NTliLTgwMTktMTUyOTRmNjQzYjRjXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg",
        language:"Tamil",
        censor: "U",
        genre:"Drama",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 02 mins",
        crew:{
            director:["Seenu Ramasamy"],
            music:["Ilaiyaraaja","Karthik Raja","Yuvan Shankar Raja"]
        },
        actors:["Vijay Sethupathi","Gayathrie Shankar"]
    },
    {
        name:"Pattampoochi",
        src: "https://www.filmibeat.com/img/popcorn/movie_posters/pattampoochi-20220614171210-21057.jpg",
        language:"Tamil",
        censor: "A",
        genre:"Crime,Thriller",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 14 mins",
        crew:{
            director:[" K. Badri Narayanan"],
            music:["Navneeth Sundar"]
        },
        actors:["Sundar C","Jai"]
    },
    {
        name:"Rish",
        src: "https://static.toiimg.com/thumb/msid-91957355,width-219,height-317,imgsize-49621/91957355.jpg",
        language:"Bengali",
        censor: "U",
        genre:"Horror,Thriller",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"1 hr 55 mins",
        crew:{
            director:["Preetam Mukherjee"],
            music:["Rupam Islam"]
        },
        actors:["Saurav Das","Piyali Mukherjee","Rumki Chaterjee"]
    },
    {
        name:"7 Days 6 Nights",
        src: "https://static.toiimg.com/thumb/msid-91946914,width-219,height-317,imgsize-50520/91946914.jpg",
        language:"Telugu",
        censor: "U/A",
        genre:"Drama,Romantic",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"1 hr 41 mins",
        crew:{
            director:["M. S. Raju"],
            music:["Samarth Gollapudi"]
        },
        actors:["Sumanth Ashwin","Meher Chahal","Kritika Shetty","Rohan M"]
    },
    {
        name:"Sher Bagga",
        src: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sher-bagga-et00329584-25-05-2022-01-20-30.jpg",
        language:"Punjabi",
        censor: "U",
        genre:"Comedy,Drama,Romantic",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 26 mins",
        crew:{
            director:["Jagdeep Sidhu"],
            music:["Sandeep Saxena"]
        },
        actors:["Ammy Virk","Sonam Bajwa","Nirmal Rishi"]
    },
    {
        name:"Sherdil - The Pilibhit Saga",
        src: "https://m.media-amazon.com/images/M/MV5BYzZmYmUyNzUtNjNkZi00MjkwLWE5ZTktNDhlODYzZTY1NWY4XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        language:"Hindi",
        censor: "U/A",
        genre:"Drama",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs",
        crew:{
            director:["Srijit Mukherji"],
            music:["Shantanu Moitra"]
        },
        actors:["Pankaj Tripathi","Neeraj Kabi","Sayani Gupta"]
    },
    {
        name:"Thurthu Nirgamana",
        src: "https://static.toiimg.com/thumb/msid-92407710,width-219,height-317,imgsize-48242/92407710.jpg",
        language:"Kannada",
        censor: "U/A",
        genre:"Fantasy,Sci-Fi,Thriller",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 17 mins",
        crew:{
            director:["Hemanth Kumar L"],
            music:[" Dheerendra Doss"]
        },
        actors:["Hitha Chandrashekar","Samyuktha Hegde","Sunil Raoh"]
    },
    {
        name:"Top Gun: Maverick",
        src: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2022/04/04/top-gun-maverick-movie-New-HD-poster-.jpg?quality=80&zoom=1&ssl=1",
        language:"English",
        censor: "U/A",
        genre:"Action,Drama",
        picture:"2D",
        release:"27 May,2022",
        duration:"2 hrs 15 mins",
        crew:{
            director:["Joseph Kosinski"],
            music:["Hans Zimmer","Harold Faltermeyer"]
        },
        actors:["Tom Cruise","Jennifer Connelly"]
    },
    {
        name:"Trivikrama",
        src: "https://static.toiimg.com/thumb/msid-92249865,width-219,height-317,imgsize-12758/92249865.jpg",
        language:"Kannda",
        censor: "U/A",
        genre:"Comedy,Drama",
        picture:"2D",
        release:"24 Jun,2022",
        duration:"2 hrs 31 mins",
        crew:{
            director:["HS Sahana"],
            music:["Arjun Janya"]
        },
        actors:["Aakansha Sharma","Akshara Gowda","Vikram Ravichandran"]
    },
    {
        name:"Vaashi",
        src: "http://timesofindia.indiatimes.com/photo/80450282.cms",
        language:"Malayalam",
        censor: "U",
        genre:"Drama,Thriller",
        picture:"2D",
        release:"17 Jun,2022",
        duration:"2 hrs 08 mins",
        crew:{
            director:["Vishnu Raghav"],
            music:["Kailas Menon"]
        },
        actors:["Keerthy Suresh","Tovino Thomas"]
    },
    {
        name:"Vikram",
        src: "https://m.media-amazon.com/images/M/MV5BOTYxOWU3OWYtOGM4NC00NDhlLTlmZTYtMGUxM2YwZmFhOGFlXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        language:"Tamil",
        censor: "U/A",
        genre:"Action,Thriller",
        picture:"2D",
        release:"3 Jun,2022",
        duration:"2 hrs 53 mins",
        crew:{
            director:["Lokesh Kanagaraj"],
            music:["Anirudh Ravichander"]
        },
        actors:["Kamal Haasan","Vijay Sethupathi","Fahadh Faasil","Suriya Sivakumar","Narain","Gayathri","Kalidas Jayaram"]
    }
]

export default moviesList;