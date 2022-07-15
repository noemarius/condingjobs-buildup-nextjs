import Head from "next/head";
import { MainContainer } from "../components/MainContainer";
import { NavBar } from "../components/NavBar";

export default function Home() {
    return (
        <>
            <div className="container">
                <NavBar />
                <MainContainer />
            </div>
        </>
    );
}
