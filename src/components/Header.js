import { Auth } from "./Auth";

export const Header =()=>{
    return (<header>
        <h1>Portal de Opiniones</h1>
        <nav> 
         <Auth/>
        </nav>
    </header>
    );
};