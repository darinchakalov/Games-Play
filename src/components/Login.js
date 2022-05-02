import { Link, useHistory } from "react-router-dom";

export default function Login({ history }) {
	let historyHook = useHistory();

	const loginSubmitHandler = (e) => {
		e.preventDefault();

		//TODO login functionality

		// history.push("/games");
		historyHook.push("/games");
	};

	return (
		<section id="login-page" className="auth">
			<form id="login" onSubmit={loginSubmitHandler}>
				<div className="container">
					<div className="brand-logo"></div>
					<h1>Login</h1>
					<label for="email">Email:</label>
					<input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

					<label for="login-pass">Password:</label>
					<input type="password" id="login-password" name="password" />
					<input type="submit" className="btn submit" value="Login" />
					<p className="field">
						<span>
							If you don't have profile click <Link to="/register">here</Link>
						</span>
					</p>
				</div>
			</form>
		</section>
	);
}
