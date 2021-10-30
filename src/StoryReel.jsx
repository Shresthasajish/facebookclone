import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZJ4rhDuYcRLijLJgCcf6tYRArMjs9YK6O0g&usqp=CAU"
                profileSrc="https://media.comicbook.com/2020/06/naruto-kakashi-1223361.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
                title="Kakashi Hatake"
            />
            <Story
                image="https://cdn.shopify.com/s/files/1/0216/7762/products/NARUTOMAIN_2000x.jpg?v=1595885065"
                profileSrc="https://i.pinimg.com/originals/2a/df/fb/2adffbee6e939b2bd1e32ffa8c763308.jpg"
                title="Naruto Uzumaki"
            />
            <Story
                image="https://qph.fs.quoracdn.net/main-qimg-95f2dedd6d8b68a90a9f318b6f13b142.webp"
                profileSrc="https://media.comicbook.com/2020/05/boruto-naruto-jiraiya-1221598.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
                title="Jiraya"
            />
            <Story
                image="https://i.redd.it/ob4hws3j92k51.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHNQY3cAbsop4qtS0W9zYfFIXnqhUVeuV44A&usqp=CAU"
                title="Madara Uchiha"
            />

            <Story
                image="https://i.pinimg.com/564x/52/93/dc/5293dc631d61c449c6d4dfd3d949e4e7.jpg"
                profileSrc="https://ae01.alicdn.com/kf/H5848fcc90bad493a98fcaea747b18bc0r.jpg_q50.jpg"
                title="Itachi Uchiha"
            />






        </div>
    );
}

export default StoryReel;
