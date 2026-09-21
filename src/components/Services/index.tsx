import {
  SocialMediaContainer,
  Title,
  PostsContainer,
  Post,
} from "./style";

import post1 from "../../assets/post1.jpeg";
import post2 from "../../assets/post2.jpeg";
import post3 from "../../assets/post3.jpeg";
import post4 from "../../assets/post4.jpeg";
import post5 from "../../assets/post5.jpeg";

export function Services() {
  const posts = [
    {
      image: post1,
      className: "post1",
    },
    {
      image: post2,
      className: "post2",
    },
    {
      image: post3,
      className: "post3",
    },
    {
      image: post4,
      className: "post4",
    },
    {
      image: post5,
      className: "post5",
    },
  ];

  return (
    <SocialMediaContainer>
      <Title>
        Social
        <br />
        Media
      </Title>

      <PostsContainer>
        {posts.map((post, index) => (
          <Post
            key={index}
            src={post.image}
            alt={`Social Media ${index + 1}`}
            className={post.className}
          />
        ))}
      </PostsContainer>
    </SocialMediaContainer>
  );
}