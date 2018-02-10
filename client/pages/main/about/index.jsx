'use strict';
const React = require('react');
const ReactHelmet = require('react-helmet');


const Helmet = ReactHelmet.Helmet;


class AboutPage extends React.Component {
    render() {

        return (
            <section className="section-about container">
                <Helmet>
                    <title>About us</title>
                </Helmet>
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">About us</h1>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Check Man</h4>
                                <p>
                                    Catchy buzzword followed by more buzzwords.  
                                    If you needed another buzzword it will be 
                                    coming soon.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Check Mate</h4>
                                <p>
                                    Runnin Wild across the galaxy. Cheers
                                    to bacon and BBQ! Have a nice day.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Wally the Dog</h4>
                                <p>
                                    Drones and good times. Frosty Paws. Naps. Don't
                                    @ me bro.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Check</h1>
                        <p className="lead">
                            The first name in Lineman verification.
                        </p>
                        <i className="fa fa-volume-up bamf"></i>
                    </div>
                </div>
            </section>
        );
    }
}


module.exports = AboutPage;
