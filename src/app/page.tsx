"use client";
// pages/login.js

export default function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login to Chatterbox</h2>
        <form>
          <div className="user-box">
            <input type="text" name="username" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <br></br>
        Don't have an account?
        <a href="#">Signup</a>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }
        .login-box {
          position: relative;
          width: 300px;
          padding: 40px;
          background: #fff;
          text-align: center;
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
        }
        .login-box h2 {
          margin: 0 0 30px;
          padding: 0;
          color: #333;
        }
        .user-box {
          position: relative;
          margin-bottom: 30px;
        }
        .user-box input {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #333;
          margin-bottom: 30px;
          border: none;
          border-bottom: 1px solid #333;
          outline: none;
          background: transparent;
        }
        .user-box label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px 0;
          font-size: 16px;
          color: #333;
          pointer-events: none;
          transition: 0.5s;
        }
        .user-box input:focus ~ label,
        .user-box input:valid ~ label {
          top: -20px;
          left: 0;
          color: #03a9f4;
          font-size: 12px;
        }
        button {
          background: none;
          border: none;
          padding: 10px 20px;
          color: #03a9f4;
          font-size: 16px;
          cursor: pointer;
          transition: 0.5s;
        }
        button:hover {
          color: #fff;
          background: #03a9f4;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }
        .box {
          position: relative;
          width: 300px;
          padding: 40px;
          background: #fff;
          text-align: center;
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
        }
        .box h1 {
          margin: 0 0 30px;
          padding: 0;
          color: #333;
        }
        .box h2 {
          margin: 0 0 20px;
          padding: 0;
          color: #333;
        }
        .user-box {
          position: relative;
          margin-bottom: 30px;
        }
        .user-box input {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #333;
          margin-bottom: 30px;
          border: none;
          border-bottom: 1px solid #333;
          outline: none;
          background: transparent;
        }
        .user-box label {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px 0;
          font-size: 16px;
          color: #333;
          pointer-events: none;
          transition: 0.5s;
        }
        .user-box input:focus ~ label,
        .user-box input:valid ~ label {
          top: -20px;
          left: 0;
          color: #03a9f4;
          font-size: 12px;
        }
        button {
          background: none;
          border: none;
          padding: 10px 20px;
          color: #03a9f4;
          font-size: 16px;
          cursor: pointer;
          transition: 0.5s;
        }
        button:hover {
          color: #fff;
          background: #03a9f4;
        }
        p {
          color: #333;
        }
        p a {
          color: #03a9f4;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
