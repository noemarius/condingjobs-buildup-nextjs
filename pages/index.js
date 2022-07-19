import { MainContainer } from "../components/MainContainer";
import { NavBar } from "../components/NavBar";

export default function Home() {
    return (
        <>
            <div className="container">
                <NavBar />
                <MainContainer />
            </div>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
        </>
    );
}
