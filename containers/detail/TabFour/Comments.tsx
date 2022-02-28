import { Box } from "@chakra-ui/react";
import Comment from "../../../components/detail/tab-four/Comment";

const Comments = () => {
  const comments = [
    {
      name: "fatroshi",
      comment: "Is API not working or not?",
      time: 1,
      reply: 2,
      avatar:
        "https://api.rakuten.net/static-assets/rakuten/user-default-avatar.png",
    },
    {
      name: "annelamaravathi",
      comment: "API is not working",
      time: 2,
      reply: 2,
      avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GhZuL4-bo-kgeUEOwBqxIhb9l-PtOBGazESCqmF=s96-c",
    },
    {
      name: "info-_7g9",
      comment: "504 gateway time-out please fix",
      time: 3,
      reply: 3,
      avatar:
        "https://lh4.googleusercontent.com/-OYw384PdU6s/AAAAAAAAAAI/AAAAAAAAC-w/AMZuucngrfK0DQ2QNiPeFK6Qv-8CGW94XA/s50/photo.jpg",
    },
    {
      name: "info-_7g9",
      comment: "504 gateway time-out please fix",
      time: 3,
      reply: 3,
      avatar:
        "https://lh4.googleusercontent.com/-OYw384PdU6s/AAAAAAAAAAI/AAAAAAAAC-w/AMZuucngrfK0DQ2QNiPeFK6Qv-8CGW94XA/s50/photo.jpg",
    },
    {
      name: "info-_7g9",
      comment: "504 gateway time-out please fix",
      time: 3,
      reply: 3,
      avatar:
        "https://lh3.googleusercontent.com/a/AATXAJxmCMsZcLPh_mOqERiZTeIAE5meN9pULmsTKGte=s96-c",
    },
  ];
  return (
    <Box>
      {comments.map((item, index) => (
        <Comment item={item} key={index} />
      ))}
    </Box>
  );
};
export default Comments;
