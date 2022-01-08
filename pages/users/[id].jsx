import getUser from "../../Services/getUser";
import getUsers from "../../Services/getUsers";

export const getStaticPaths = async () => {
  const { data } = await getUsers();
  const paths = data.map((user) => ({ params: { id: user.id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const { data } = await getUser(params.id);
    return {
      props: {
        user: data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

const User = ({user, error}) => {
  return (
    <div>
      <h1>Detail page</h1>
      {!error && user ? 
        <>
        <p>{user.name}</p>
        <p>{user.email}</p>
        </> :
        <p>data fetching faild</p> 
    }
    </div>
  );
};

export default User;
