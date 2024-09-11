const news = [
    {
        title: "McDonald's and Crocs Are Reportedly Teaming Up to Bring You the Cutest Happy Meal Ever",
        author: "",
        image: ""
    },
    {
        title: "Check Your Fridge: Eggs Recalled in 6 States Over Salmonella Fears, With 65 People Falling Ill",
        author: "",
        image: ""
    },
    {
        title: "DoorDash and Magnolia Are Releasing an Exclusive New Banana Pudding Flavor — and It's Available Nationwide",
        author: "",
        image: ""
    }
]

const section = document.querySelector('section1');

const title = document.querySelector('#news-title');

const author = document.querySelector('#news-author');

let index = 0

function changeNews() {
    title.textContent = news[index].title;
    author.textContent = news[index].author;
    section.style.backgroundImage = `url(${news[index].image})`;

    if (index < news.length - 1) {
        index++;
    } else {
        index = 0;
    }
}

setInterval(changeNews, 3000);

