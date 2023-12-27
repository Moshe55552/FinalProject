import { useNavigate } from "react-router-dom";


const Unauthorized = () => {
    const navigate = useNavigate();

    const goToLinkPage = () => {
        // Navigate to the login page or any other desired route
        navigate("/linkpage");
    };

    return (
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goToLinkPage}>Go to LinkPage</button>
            </div>
        </section>
    );
};

export default Unauthorized;