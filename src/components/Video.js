import React from "react";
import PropTypes from "prop-types";
import ChannelInformation from "./ChannelInformation";
import VideoRating from "./VideoRating";
import mobileVersionHelper from "../additionalFunctions/mobileVersionHelper";
import "../style/video-container.less";
import "../style/additional-information.less";

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false,
            minDesktopWidth: 600,
            isMobileVersion: window.innerWidth <= 600,
        };
    }

    componentWillMount() {
        mobileVersionHelper(this.changeDisplayOfElements);
    }

    changeDisplayOfElements = () => {
        this.setState(prevState => ({ isMobileVersion: window.innerWidth <= prevState.minDesktopWidth }));
    };

    newDateFormat = date => {
        const newDate = new Date(date);

        return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
    };

    viewVideo = () => {
        window.location = `https://www.youtube.com/watch?v=${this.props.id}`;
    };

    showVideoDescription = () => {
        this.setState(prevState => ({ showDescription: !prevState.showDescription }));
    };

    renderForDesktop = () => {
        const { title, description, datePublication, channelInformation, videoStatistic } = this.props.value;

        return (
            <>
                <h1 className="video-description__title">{title}</h1>
                <div className="video-description__description">{description}</div>
                <div className="additional-information">
                    <ChannelInformation
                        value={channelInformation}
                        date={this.newDateFormat(datePublication)}
                    />
                    <VideoRating value={videoStatistic} />
                </div>
            </>
        );
    };

    renderForMobile = showDescriptionForMobile => {
        const { title, description, datePublication, channelInformation, videoStatistic } = this.props.value;

        if (showDescriptionForMobile) {
            return (
                <>
                    <div className="video-description__description">{description}</div>
                    <div className="additional-information">
                        <ChannelInformation
                            value={channelInformation}
                            date={this.newDateFormat(datePublication)}
                        />
                        <VideoRating value={videoStatistic} />
                    </div>
                    <button
                        type="button"
                        className="icon-cross video-description__close-information-button"
                        onClick={this.showVideoDescription}
                    />
                </>
            );
        } else {
            return (
                <>
                    <h1 className="video-description__title">{title}</h1>
                    <button
                        type="button"
                        className="icon-flickr video-description__open-information-button"
                        onClick={this.showVideoDescription}
                    />
                </>
            );
        }
    };

    render() {
        const { preview } = this.props.value;
        const currentState = this.state;

        return (
            <div className="video-container">
                <img src={preview} alt="videoPreview" className="video-container__preview" onClick={this.viewVideo} />
                <div className="video-container__description-container">
                    { currentState.isMobileVersion ? this.renderForMobile(this.state.showDescription)
                        : this.renderForDesktop() }
                </div>
            </div>
        );
    }
}

Video.propTypes = {
    preview: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    datePublication: PropTypes.string,
    channelInformation: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    videoStatistic: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

Video.defaultProps = {
    preview: "../img/no_video.jpg",
    title: "Without name",
    description: "",
    datePublication: "00.00.00",
    channelInformation: PropTypes.objectOf(PropTypes.string),
    videoStatistic: PropTypes.objectOf(PropTypes.number)
};
