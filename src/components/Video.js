import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChannelInformation from "./ChannelInformation";
import VideoRating from "./VideoRating";
import "../style/video-container.less";
import "../style/additional-information.less";
import mobileVersion from "../additionalFunctions/mobileVersion";

export default function Video({
    value: { preview, title, description, datePublication, channelInformation, videoStatistic, id } }) {
    const [showDescription, setShowDescription] = useState(false);
    const [isMobileVersion, setMobileVersion] = useState(false);
    const minDesktopWidth = 600;

    const changeDisplayOfElements = () => {
        setMobileVersion(window.innerWidth <= minDesktopWidth);
    };

    const newDateFormat = date => {
        const newDate = new Date(date);

        return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
    };

    const renderForDesctop = () => {
        return (
            <>
                <h1 className="video-description__title">{title}</h1>
                <div className="video-description__description">{description}</div>
                <div className="additional-information">
                    <ChannelInformation
                        value={channelInformation}
                        date={newDateFormat(datePublication)}
                    />
                    <VideoRating value={videoStatistic} />
                </div>
            </>
        );
    };

    const viewVideo = () => {
        window.location = `https://www.youtube.com/watch?v=${id}`;
    };

    const showVideoDescription = useCallback(() => {
        setShowDescription(!showDescription);
    }, [showDescription]);

    const renderForMobile = showDescriptionForMobile => {
        if (showDescriptionForMobile) {
            return (
                <>
                    <div className="video-description__description">{description}</div>
                    <div className="additional-information">
                        <ChannelInformation
                            value={channelInformation}
                            date={newDateFormat(datePublication)}
                        />
                        <VideoRating value={videoStatistic} />
                    </div>
                    <button
                        type="button"
                        className="icon-cross video-description__close-information-button"
                        onClick={showVideoDescription}
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
                        onClick={showVideoDescription}
                    />
                </>
            );
        }
    };

    useEffect(() => {
        mobileVersion(changeDisplayOfElements);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= minDesktopWidth) {
            setMobileVersion(true);
        }
    }, []);

    return (
        <div className="video-container">
            <img src={preview} alt="videoPreview" className="video-container__preview" onClick={viewVideo} />
            <div className="video-container__description-container">
                { isMobileVersion ? renderForMobile(showDescription) : renderForDesctop(showDescription) }
            </div>
        </div>
    );
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
