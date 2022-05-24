import { signIn, signOut, useSession } from 'next-auth/client';
//import Page from '../components/Page';

export default function Home() {
  const [session] = useSession();

  return (
    <>
      {/* <Page title="Index Page" linkTo="/other" /> */}

      {!session && (
        <div className='register'>
          <h1 className='register__title'>Sign in with Google</h1>
          <div className="google-btn" onClick={() => signIn()}>
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            </div>
            <p className="btn-text">Sign in</p>
          </div>
        </div>
      )}

      {session && (
        <div className='register'>
          <h4 className='user-info'>You are logged as: {session.user.name}</h4>
          <h4 className='user-info'>Email: {session.user.email}</h4>
          {session.user.image && (
            <img src={session.user.image} className="user-avatar" alt={session.user.name} />
          )}

          <button className='sign-out' onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      )}
    </>
  );
}