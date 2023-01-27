  const  reviews = [
        {
            name : "David",
            image : "https://cherrydeck-blog.b-cdn.net/blog/wp-content/uploads/2020/11/Klara-Waldberg.png",
            size : "11-50 employees",
            time_used : "2 years",
            stars : 4,
            pros : "The support has been great! Our ability to customize the software to fit our business needs is one of the great features of the software.",
            cons : "The interface can be a bit clunky at times and does not have the nice GUI that you would see in a Microsoft or Quickbooks product."
        },
        {
            name : "Joey",
            image : "https://cdn3.dpmag.com/2020/08/2020_08_31-A-Focal_Length_Portrait.jpg",
            size : "2-10 employees",
            time_used : "6 months",
            stars : 4.5,
            pros : "Mie Trak Pro has made the quote process go so much smoother. I liked the ease of writing the formulas for calculating run times/costing. The flow from quote to router to work order is great. The Mie Kiosk software we use on the shop floor allows for a quick, simple 'look' at where everything is on the shop floor and processes are still needed for completion. The flow between quote, sales order, work order and router! This portion of the system is very easy to work with. I really like that this system is the whole package. I hope to be using the accounting, human resources, time clock management and purchase order features in the near future.",
            cons : "Our company has not even begun to use this software package to it's full potential. Our initial start up and training should have been better, however that is our fault as we should have budgeted for the training up front."
        },
        {
            name : "Sarah",
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjAwwmWjNpONxszRl7CDvza_zp-ptxJOO7g&usqp=CAU",
            size : "2-10 employees",
            time_used : "1 year",
            stars : 3,
            pros : "ease of use and ability to work with development to tailor to our needs.",
            cons : "they have gotten real busy and i think customer service has suffered recently"
        },
        {
            name : "Armando",
            image : "https://images.squarespace-cdn.com/content/v1/566845755a566811d3f86534/1563157645553-FVKYQJ6G63X511KFJ2AO/DSC_2643b_1.jpg?format=750w",
            size : "2-10 employees",
            time_used : "1 year",
            stars : 2,
            pros : "It's extensive and covers most of what you'd need to do in an ERP system. Customer support is readily available.",
            cons : "Not intuitive, takes a long time to learn, too busy, slow. Although customer support is available my experiences have been mixed, the techs are too fast on their end and assume you know everything they're doing and talking about, didn't end up helping me."
        },
        {
            name : "Simon",
            image : "https://assets.popbuzz.com/2020/51/who-plays-simon-basset-in-bridgerton-1608719394-view-0.png",
            size : "51-200 employees",
            time_used : "3 months",
            stars : 5,
            pros : "The main reason for our choice was, as an accredited TS16949 Tier 2 Automotive supplier, we had to make sure that any new system provided the traceability and control that this standard requires and MIETrak Pro offers both. MIETrak Pro has given us the ability to take several standalone systems and incorporate them into one making it much easier to share information between employees at all levels. This has enabled us to move to totally live production bookings on the Shop Floor (via Kiosk) and live stock movements (via Barcode Scanner Server). This has improved stock accuracy as problems can be resolved at source and this leads to enhance MRP’s effectiveness. MRP is the main driver for our business and MIE Solutions were open to develop their MRP system to one that I firmly believe is now World Class, not only proposing POs / WOs to meet demand but also suggesting move proposals for existing orders as customer demand changes, either short term or long term.The system is very cost effective, especially when compared to other like for like systems on the market today, but this in no way compromises what MIETrak Pro delivers. The reporting systems are excellent via Quick View Reports and if we’ve been unsure how to create a report MIE Solutions have been more than happy to assist us. Support / training is of a very high standard, quick response, excellent problem solving and very professional. MIETrak Pro has evolved in the time that we’ve been using the system with enhancements, some that we use, some that we don’t, but it’s predominantly our choice and timescale which is very comforting. Whilst Kiyokuni Europe Limited are not a sheet metal manufacturer, MIETrak Pro has seamlessly replaced our old ERP system within our manufacturing environment where we use multi level BOMs and Cellular production units.",
            cons : "None that I can honestly think of"
        },
        {
            name : "Maya",
            image : "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            size : "51-200 employees",
            time_used : "3 months",
            stars : 2.5,
            pros : "Suspendisse in diam id velit vehicula euismod in ac risus. Aenean viverra est non mi semper, ac porttitor enim vestibulum. Integer eget eleifend urna. Vestibulum pellentesque venenatis neque, ultrices cursus nibh ullamcorper sit amet. Donec aliquam dolor non magna varius laoreet. Morbi sagittis efficitur elit ut fringilla. Integer nisi tortor, sodales sed est nec, pellentesque vulputate ex. Sed sodales, nunc vitae semper condimentum, neque dui aliquet odio, id condimentum sem sapien vel diam. Integer mauris tellus, fringilla quis laoreet vel, suscipit vel purus. Duis pellentesque tellus ac neque ultrices viverra. Morbi tempor scelerisque blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pellentesque nunc ultricies metus elementum hendrerit. Sed sagittis rutrum nisl. Morbi ac dictum neque. Aliquam id ante at est dictum porta a eget nisi.",
            cons : "None that I can honestly think of"
        },
        {
            name : "Miguel",
            image : "https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjBtYWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            size : "51-200 employees",
            time_used : "3 months",
            stars : 1,
            pros : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ante non tincidunt auctor. Cras accumsan massa enim, lacinia vestibulum orci convallis egestas. Aliquam ornare felis in dolor tempus, ac convallis magna mattis. Donec aliquam lorem quis nibh elementum maximus. Vestibulum eget massa rutrum, feugiat magna in, suscipit urna. Cras eget vehicula tortor. Mauris dolor arcu, tempor et elementum non, dictum sed leo. Etiam porttitor tincidunt nulla, quis tincidunt justo accumsan non. Etiam dolor eros, ultricies eget sapien a, tempor hendrerit odio."
        }
    ]

    export default reviews;