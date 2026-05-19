import dummyImage from '../assets/DummyDataPostImage.png';

const dummyData = [
    { id: 0, title: "Post 1", img: dummyImage, upvotes: 20000, user: "JohnReddit", postTime: "1", community: "Community", comments: [{user:"NotJohnReddit", text: "this is a comment"}] },
    { id: 1, title: "Post 2", img: dummyImage, upvotes: 110000, user: "JaneReddit", postTime: "2", community: "All", comments: [{user: "MildTurtle8347", text: "Insane"}, {user: "WowPerson", text: "Wow"}] },
    { id: 2, title: "Post 3", img: dummyImage, upvotes: 30000, user: "JackReddit", postTime: "3", community: "InterestingAsHeck", comments: [{user: "user1234", text: "interesting"}, {user:"AlwaysLearning", text: "TIL"}] }
];

const filteredDummyData = [];

export { dummyData, filteredDummyData };