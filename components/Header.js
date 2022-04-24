import {AiOutlineArrowRight} from 'react-icons/ai';
import { motion } from 'framer-motion';

const Header = () => {

    return (
        <div className="header">
            <div className="button">
                <p>Say Hello</p>
                <AiOutlineArrowRight/>
            </div>
            <style jsx>{`
                .header{
                    width: 100%;
                    height: 15%;
                    padding: 1%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                }

                .button{
                    width: 15%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    transition: all 0.2s ease-in-out;
                }

                .button:hover{
                    width: 20%;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}

export default Header;