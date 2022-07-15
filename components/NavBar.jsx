export function NavBar(){
    return (
        <>
        <div className="navbarDiv">
            <div className="logoDiv"></div>
            <div className="menuDiv">
                <ul>
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">link 2</a></li>
                    <li><a href="#">link 3</a></li>
                    <li><a href="#">link 4</a></li>
                </ul>
            </div>
            <div className="toolsDiv">
                <div className="searchDiv">
                    <input type="text" className="searchInput" placeholder="Search any movies"/>
                </div>
                <div className="loginDiv">
                    <button className="loginButton" ></button>
                </div>
            </div>
        </div>
        <style jsx>{`
        .navbarDiv{
            display:flex;
            flex-direction:row;
            gap:10px;
            width:100%;
            height:50px;
            background-color:black;
        }
        .logoDiv{
            display:flex;
            flex-direction:column;
            flex: 0 0 10%;
        }
        .menuDiv{
            display:flex;
            flex-direction:column;
            justify-content:center;
            height:100%;
            flex:0 0 50%;
        }
        .menuDiv ul{
            display:flex;
            gap:10px;
            justify-content:space-between;
            width:100%
        }
        .menuDiv li{
            display:inline;

        }
        .menuDiv a{
            text-decoration:none;
            color:white;
        }
        .toolsDiv{
            display:flex;
            flex-direction:row;
            justify-content:flex-end;
            gap:12px;
            flex:0 0 36%;
            height:100%;
        }
        .loginButton{
            height:40px;
            width:40px;
            border:1px solid grey;
            border-radius:50%;
        }
        .searchDiv{
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }
        .loginDiv{
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
        }


        
        `}</style>
        </>
    )
}