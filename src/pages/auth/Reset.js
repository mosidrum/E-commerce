import {useState} from 'react';
import styles from './auth.module.scss';
import resetImg from '../../assets/forgot.png';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import { auth } from '../../firebase/Config';
import { sendPasswordResetEmail } from 'firebase/auth';

const Reset = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false)
    toast.success('Reset email sent!')
    
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error('No user with that email exists')
  });
  };

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
     <img src={resetImg} alt='Register' width="500px"/>
    </div>
       
    <Card>
    <div className={styles.form}>
     <h2>Reset Password</h2>
       <form on onSubmit={resetPassword}>
         <input type='text' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
         <button className="--btn --btn-primary --btn-block" type='submit'>Reset Password</button>
         <div className={styles.links}>
            <p>
            <Link to="/login">- Login</Link>
            </p>
            <p>
              <Link to="/register">- Register</Link>
            </p>
         </div>
       </form>

    </div>
    </Card>  
 </section>
 </>
  )
}

export default Reset