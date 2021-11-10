import { useEffect, useState } from "react";
function BigCardContainer() {
  

  return (
    <>
      <div>
        <div className="counter_container category_name">Book Details</div>
      </div>

      <div className="big_card_container">
        <div className="card big">
          <div className="card_inner left_side big">
            <img
              className="card_image big"
              src="https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/510417754/396x396/e1986f8af6/1632395555?v=1"
              alt="big-card"
            />
          </div>
          <div className="card_details right_side big">
            <div className="card_inner right_side big header big">
              <a href="#" className="card_details right_side header big">
                The Afganisthan paper : A secret history of war.
              </a>
            </div>

            <div className="card_details right_side aurther big">
              Written By :<a href="#">Aurther Name</a>
            </div>
            <div className="card_details right_side border big"></div>
            <div className="card_details right_side details big">
              <div className="right_side details header">
                “THE BOOK CHINA DOESN'T WANT YOU TO READ.”—CNN​
              </div>
              <div className="right_side details summery">
                A riveting insider's story of how the Party and big money work
                in China today, by a man who, with his wife, Whitney Duan, rose
                to the zenith of power and wealth—and then fell out of favor.
                She was disappeared four years ago. News of this book led to a
                phone call from Whitney, proof that she's alive.
              </div>
              <div className="right_side details description">
                As Desmond Shum was growing up impoverished in China, he vowed
                his life would be different.
                <br />
                <br />
                Through hard work and sheer tenacity he earned an American
                college degree and returned to his native country to establish
                himself in business. There, he met his future wife, the highly
                intelligent and equally ambitious Whitney Duan who was
                determined to make her mark within China’s male-dominated
                society. Whitney and Desmond formed an effective team and, aided
                by relationships they formed with top members of China’s
                Communist Party, the so-called red aristocracy, he vaulted into
                China’s billionaire className. Soon they were developing the
                massive air cargo facility at Beijing International Airport, and
                they followed that feat with the creation of one of Beijing’s
                premier hotels. They were dazzlingly successful, traveling in
                private jets, funding multi-million-dollar buildings and
                endowments, and purchasing expensive homes, vehicles, and art.
                <br />
                <br />
                But in 2017, their fates diverged irrevocably when Desmond,
                while residing overseas with his son, learned that his now
                ex-wife Whitney had vanished along with three coworkers.
                <br />
                <br />
                This is both Desmond’s story and Whitney’s, because she has not
                been able to tell it herself. <br />
                <br />
              </div>
            </div>
            <div className="right_side pills">
              <a className="pill" href=" ">
                Business
              </a>
              <a className="pill" href=" ">
                Personal memories
              </a>
              <a className="pill" href=" ">
                Asia
              </a>
              <a className="pill" href=" ">
                Business
              </a>
              <a className="pill" href=" ">
                Personal
              </a>
              <a className="pill" href=" ">
                Business
              </a>
              <a className="pill" href=" ">
                Asia
              </a>
            </div>
            <div className="right_side metadata">
              <div className="metadata-left">
                <div className="publisher">
                  Publisher: <a href="">Business</a>
                </div>
                <div className="isbn">
                  Isbn: <a href="">Asia</a>
                </div>
              </div>
              <div className className="metadata-right">
                <div className="released">
                  Release:<a href="#">Personal memories</a>
                </div>
                <div className="formate">
                  Formate: <a href="#">Asia</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCardContainer;
