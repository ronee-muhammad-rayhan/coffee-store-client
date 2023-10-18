import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        console.log("user logged in successfully");
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime || "444",
        };
        console.log(user);
        // update(patch) last logged at in the database
        fetch("http://localhost:5001/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content w-full flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
