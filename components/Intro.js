import { SiGmail } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub, BsTwitter } from 'react-icons/bs';

const Intro = () => {
    return(
        <div className="intro">
            <h1>Yasar Arafath</h1>
            <p>full stack developer</p>
            <div className="socials">
                <SiGmail size={"2rem"}/>
                <FaLinkedinIn size={"2rem"}/>
                <BsGithub size={"2rem"}/>
                <BsTwitter size={"2rem"}/>
            </div>
            <div className="buttons">
                <button>Skills</button>
                <button>Projects</button>
                <button>Skills</button>
            </div>
            <style jsx>{`
                .intro{
                    height: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    flex-direction: column;
                    align-items: center;
                }

                .socials{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }

                .buttons{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }

                .buttons button{
                    padding: 0.5% 1%;
                    border-radius: 0.2rem;
                    background-color: rgba(255, 255,255,0.2);
                    color: white;
                    border: none;
                    outline: none;
                }

                .intro h1{
                    text-align: center;
                    font-size: 3rem;
                    width: 40%;
                }

                .intro p{
                    text-align: center;
                    font-size: 1.2rem;
                }
            `}</style>
        </div>
    )
}

export default Intro;