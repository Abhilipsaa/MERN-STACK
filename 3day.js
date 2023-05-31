const data = [
    {
        image: "https://i0.wp.com/www.dfordelhi.in/wp-content/uploads/2017/02/momo-blog.jpg?fit=1040%2C690&ssl=1",
        title: "MOMO",
        review: `😋😋😋😋😋`,
        desc: `Stuffed with veggies, Chicken, herbs & aromatic spices, Served with red sauce.[5 Pcs]`,
    },
    {
        image: "https://thefoodiequeens.com/wp-content/uploads/2022/10/jpg_20221012_111944_0000.jpg",
        title: "CHILLY CHICKEN",
        review: `😋😋😋😋`,
        desc: `An authentic asian delicacy, this delicious chicken comes served with a tangy chilli sauce.`,
    },
    {
        image: "https://www.whiskaffair.com/wp-content/uploads/2015/06/Spring-Roll-5.jpg",
        title: "SPRING ROLL",
        review: `😋😋😋`,
        desc: `They have a super thin, crispy wrapper that basically shatters when you bite into it. Inside are tender, seasoned cooked vegetables`,
    },
    {
        image: "https://myfoodstory.com/wp-content/uploads/2021/02/Instant-Pot-Chicken-Thukpa-2.jpg",
        title: "VEG THUKPA SOUP",
        review: `😋😋😋😋😋`,
        desc: `Tibetan Soup which consists of mixed Fresh Vegetables, Home Made Noodles, Indian Spices and Garnished with Coriander.`,
    },
    
    {
        image: "https://www.archanaskitchen.com/images/archanaskitchen/World_Asian/Vegetable_Manchow_Soup.jpg",
        title: "MANCHOW SOUP",
        review: `😋😋😋😋😋`,
        desc: `A hot and spicy soya based soup served with chicken, veggies and fried noodles by side.This hot and spicy veg soup is perfect to serve as an appetizer `,
    },
    {
        image: "https://myfoodstory.com/wp-content/uploads/2021/10/Veg-Manchurian-2.jpg",
        title: " VEG MANCHURIAN",
        review: `😋😋😋`,
        desc: `Vegetable Coins Made Up Of Chopped Mix Vegetables Served In Manchurian Sauce With A Dominant Flavour Of Garlic And Onion To It.`,
    },
    {
        image: "https://www.ticklingpalates.com/wp-content/uploads/2020/05/fried-rice-using-veggies.jpg",
        title: "FRIED RICE",
        review: `😋😋😋😋😋`,
        desc: `An assortment of exotic veggies and white rice tossed in a wok and spiced to perfection`,
    },
    {
        image: "https://geekrobocook.com/wp-content/uploads/2021/05/Indo-chinese-baby-corn-chilli-gravy.jpg",
        title: " CHILLY BABY CORN",
        review: `😋😋😋😋`,
        desc: `t features sweet and tender pieces of baby corn, battered and fried to crispy perfection. The corn is then tossed in a sweet and spicy sauce.`,
    },

];

const menu_box = document.getElementById("show_menu");

data.map((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const itemTitle = document.createElement("h2");
    itemTitle.innerText = el.title;
    const itemReview = document.createElement("p");
    itemReview.innerText = `Review: ${el.review}`;
    const desc = document.createElement("div");
    desc.innerText = el.desc;
    const button1 = document.createElement("button");
    button1.innerText = "Show Recipe";
    const button2 = document.createElement("button");
    button2.innerText = "Hide Recipe";
    const button3 = document.createElement("button");
    button3.innerText = "Add to cart";
    div.append(image, itemTitle, itemReview, button1, button2, button3);
    button1.addEventListener("click", () => {
        if(button1.innerText=="Show Recipe"){
            div.append(desc);
        }
    });
    button2.addEventListener("click", () => {
        if(button2.innerText=="Hide Recipe"){
            div.removeChild(desc);
        }
    });
    menu_box.append(div);

});