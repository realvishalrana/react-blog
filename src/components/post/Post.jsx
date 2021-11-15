import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=85"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet consectetur
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        alias culpa repellendus deserunt aperiam, dolore corporis libero quas
        quia veritatis illum doloremque dolorum aspernatur! Possimus numquam sed
        nesciunt modi cum, molestiae eaque ipsam ex voluptate corporis obcaecati
        quidem, dicta minima fuga quis officiis praesentium voluptas cumque iste
        expedita mollitia non labore! Similique doloribus rerum, illo, eum earum
        consequuntur consequatur corporis dicta placeat consectetur eaque.
        Numquam ea magnam dolores porro fugit assumenda temporibus consectetur
        quod, laudantium minus earum molestiae. Reiciendis dolore asperiores
        tempore accusamus laudantium sapiente veritatis itaque culpa a numquam
        saepe, incidunt maxime ea aliquam enim commodi voluptate quis
      </p>
    </div>
  );
};

export default Post;
