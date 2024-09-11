const news = [
    {
        title: "McDonald's and Crocs Are Reportedly Teaming Up to Bring You the Cutest Happy Meal Ever",
        author: "Marnie Shure",
        image: "pancakes.png"
    },
    {
        title: "Check Your Fridge: Eggs Recalled in 6 States Over Salmonella Fears, With 65 People Falling Ill",
        author: "Stacey Leasca",
        image: "sandwich.png"
    },
    {
        title: "DoorDash and Magnolia Are Releasing an Exclusive New Banana Pudding Flavor",
        author: "Stacey Leasca",
        image: "yogurt.png"
    }
]

const section = document.querySelector('#section1');

const title = document.querySelector('#section1boxitem2');

const author = document.querySelector('#section1boxitem1');

let index = 0

function changeNews() {
    title.textContent = news[index].title;
    author.textContent = news[index].author;
    document.getElementById('section1').style.backgroundImage = `url(Media/News/${news[index].image})`;

    index++;
    if (index === news.length) {
        index = 0;
    }
}

setInterval(changeNews, 7000);

