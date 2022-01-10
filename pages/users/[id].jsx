import getUser from "../../Services/getUser";
import getUsers from "../../Services/getUsers";
import styles from "../../styles/UserDetail.module.scss";

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

const User = ({ user, error }) => {
  return (
    <main>
      <h1 className="title">{user.name} Detail page</h1>
      {!error && user ? (
        <>
          <p className={styles.detailItem}>username: {user.username}</p>
          <p className={styles.detailItem}>name: {user.name}</p>
          <p className={styles.detailItem}>email: {user.email}</p>
        </>
      ) : (
        <p className="title">data fetching faild</p>
      )}
    </main>
  );
};

export default User;
