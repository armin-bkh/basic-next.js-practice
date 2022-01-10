import Head from "next/head";
import Link from "next/link";
import getUsers from "../../Services/getUsers";
import styles from "../../styles/Users.module.scss";

export const getStaticProps = async () => {
  try {
    const { data } = await getUsers();
    return {
      props: {
        users: data,
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

const Users = ({ users, error }) => {
  return (
    <main>
      <Head>
        <title>user list | Users</title>
        <meta name="keywords" content="users" />
      </Head>
      <h1 className="title">All users</h1>
      <div>
        <ul>
          {!error && users ? (
            users.map((user) => (
              <li className={styles.userItem} key={user.id}>
                <Link href={`/users/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            ))
          ) : (
            <p>{error}</p>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Users;
