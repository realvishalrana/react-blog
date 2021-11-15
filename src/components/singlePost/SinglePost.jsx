import "./singlePost.css";

const Singlepost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.ctfassets.net/u0haasspfa6q/5anrKPrBjFkQOGIowyYEFu/0af93dd82909934bf5938002ebf80858/best_landscape_photography_apps"
          alt=""
        />
        <h1 className="singlePostTitle">
          Best photographer in world
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">Vishal</b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          cupiditate, dolor laudantium dolorem eum, voluptatum id totam,
          consectetur commodi facilis ea unde. Sint repudiandae nesciunt eum
          atque beatae enim vitae. Repellendus voluptate dignissimos quis
          voluptates. Quaerat reiciendis iusto quas sit similique non pariatur
          mollitia eaque illo omnis? Quos sequi eos tempore nostrum aut
          deleniti, commodi consectetur eum officia, iusto dolorem? Quidem iste
          eaque ex iusto, quos laborum. Quo dolorem quaerat quibusdam
          temporibus. Molestias ipsam quod consequatur atque hic delectus
          ducimus, sint suscipit ut non veritatis? Beatae quo fuga consequatur
          illo? Illum voluptate molestiae cupiditate maiores voluptatem natus
          consequatur reprehenderit iure atque reiciendis, eaque temporibus eum.
          Quasi accusantium cumque laudantium quia nihil quae? Laudantium minima
          labore neque, fugit fuga ea est.
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
