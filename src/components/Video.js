import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ChannelInformation from "./ChannelInformation";
import VideoRating from "./VideoRating";
import "../style/video-container.less";
import "../style/additional-information.less";

export default function Video({ value: { preview, title, description, datePublication, channelInformation, videoStatistic } }) {
    const [showDescription, setshowDescription] = useState(false);
    const [isMobileVersion, setMobileVersion] = useState(false);
    const minDesktopWidth = 600;


    const changeDisplayOfElements = () => {
        setMobileVersion(window.innerWidth <= minDesktopWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", changeDisplayOfElements);

        return () => window.removeEventListener("resize", changeDisplayOfElements);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= minDesktopWidth) {
            setMobileVersion(true);
        }
    }, []);

    const showVideoDescription = () => {
        setshowDescription(true);
    };

    const hideVideoDescription = () => {
        setshowDescription(false);
    };

    const newDateFormat = date => {
        const newDate = new Date(date);

        return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
    };

    return (
        <div className="video-container">
            <img src={preview} alt="videoPreview" className="video-container__preview" />
            <div className="video-container__description-container">
                { (isMobileVersion && showDescription) ? (
                    null
                ) : (
                    <h1 className="video-description__title">{title}</h1>

                )}

                { isMobileVersion ? (
                    showDescription ? (
                        <>
                            <div className="video-description__description">{description}</div>
                            <div className="additional-information">
                                <ChannelInformation value={channelInformation} date={newDateFormat(datePublication)} />
                                <VideoRating value={videoStatistic} />
                            </div>
                            <button type="button" className="icon-cross video-description__close-information-button" onClick={hideVideoDescription} />
                        </>
                    ) : <button type="button" className="icon-flickr video-description__open-information-button" onClick={showVideoDescription} />

                ) : (
                    <>
                        <div className="video-description__description">{description}</div>
                        <div className="additional-information">
                            <ChannelInformation value={channelInformation} date={newDateFormat(datePublication)} />
                            <VideoRating value={videoStatistic} />
                        </div>
                    </>
                )}
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
