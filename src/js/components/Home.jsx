import React from "react";

import Navbar from "./Navbar";
import Cards from "./Cards.jsx";
import Carousel from "./Carousel.jsx";

const Home = () => {
	return (
		<div className="text-center mx-auto">
			{/*  navbar */}
			<Navbar title={"AniMedia"} />
			{/*  Carousel Joseph */}
			< Carousel 
			img1={"https://assets-prd.ignimgs.com/2022/09/22/demonslayer-1663870772245.jpg"}
			img2={"https://assets-prd.ignimgs.com/2022/09/28/topanime-blogroll-1664407530748.jpg"}
			img3={"https://greenhouse.hulu.com/app/uploads/sites/11/MHA_S5_program_tile-1-792x469.jpg"}
			/>

			{/*  jumbotron */}
			
			{/*  cards */}
			<div className="d-flex mx-auto w-50 mt-5 ">
				<Cards img={"https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_.jpg"} 
				title={"Solo Leveling:Arise"} content={"From E-Rank to S+ ?!! When risking your life to pay the bills, turn you in a hunter with no ceiling. Solo Leveling is an action-packed thrill ride. IT DOES NOT DISAPPOINT!!"}
				btton={"Are you ready to level up!"}/>
				
				<Cards img={"https://m.media-amazon.com/images/M/MV5BOGRhNDQ3NTgtMmU3YS00OWI0LTgyMmUtNGQwODk0MDg2YTYzXkEyXkFqcGc@._V1_.jpg"} 
				title={"Blue-Lock"} content={"The Japan Football Union is hell-bent on creating a striker who hungers for goals and thirsts for victory, and who can be the decisive instrument in turning around a losing match... and to do so, they've gathered 300 of Japan's best and brightest youth players."}
				btton={"Ready to LOCK in?"}/>
				
				<Cards img={"https://images.squarespace-cdn.com/content/v1/5e90e8679180dd053f86571c/5258f5f7-d445-4624-859e-82b9aafa2a91/teaser_01+english+CR.png"} 
				title={"Sakomoto Days"} content={"Once the world's most feared hitman, Taro Sakamoto falls in love with Store Clerk Aoi. Leaving his violent past, he retires to live a peaceful life. But old enemies threaten to pull him back into the life he thought he'd left for good."}
				btton={"Get back to your old ways!"}/>
				
				<Cards img={"https://m.media-amazon.com/images/M/MV5BNmU3ZGFhMmYtNzczYy00NTE0LThkYjgtNWFiYTY2NzRkM2QzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"} 
				title={"Delicious in Dungeon"} content={"Can sisters be reincarnated from dragon poop? Laios and his delve into an endless dungeon in search of his fallen sister, fighting monsters, starvation, and corruption."}
				btton={"You can eat that?!"}/>
			</div>
			{/*  footer */}

			
		</div>
	);
};

export default Home;
