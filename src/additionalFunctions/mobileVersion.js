export default function mobileVersion(callback) {
    window.addEventListener("resize", callback);

    return () => window.removeEventListener("resize", callback);
}
