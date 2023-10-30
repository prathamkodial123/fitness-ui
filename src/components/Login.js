import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";
import { backgroundColor, logoColor } from "../constants/form";
import { Button, Card, CardContent, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}
class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();
        this.setState({
            loading: true,
        });
        if (this.state.password && this.state.username) {
            AuthService.login(this.state.username, this.state.password).then((d) => {
                if (d.data.accessToken) {
                    AuthService.getUser(this.state.username).then((dd) => {
                        localStorage.setItem("token", d.data.accessToken);
                        localStorage.setItem("id", dd.data.id);
                        window.location.replace('/home');
                    }).catch((e) => {

                    })
                }
            }).catch((d) => {
                alert('Invalid User');
            });
        } else {
            alert('Invalid data');
        }
    }
    brandStyle = {

    };
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#e9edf7' }}  >
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center pb-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <span className="navbar-brand w-100" style={{ color: logoColor }}>
                                        Fitness
                                    </span>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h4 className=" text-center pb-0 ">Login to Your Account</h4>
                                            <p className="text-center small">Enter your Username & password to login</p>
                                        </div>
                                        <form className="contact-form" method="post" onSubmit={this.handleLogin} ref={(c) => { this.form = c; }}>
                                            <div className="row">
                                                <div className="col-12 ">
                                                    <div className="form-group">
                                                        <label htmlFor="username">Username</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="username"
                                                            value={this.state.username}
                                                            onChange={this.onChangeUsername}
                                                            validations={[required]}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="password">Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="password"
                                                            value={this.state.password}
                                                            onChange={this.onChangePassword}
                                                            validations={[required]}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary btn-sm w-100" type="submit"
                                                    >Login
                                                    </button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account? <Link to="/create-account" >Create
                                                        Account</Link>
                                                    </p>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login;