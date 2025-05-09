import './ServiceBar.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import img1 from '../../../imgs/ecotact-logo.png';
import img11 from '../../../imgs/gallery/backgr-1.jpg';
import img2 from '../../../imgs/yuteco/yuteco-logo.png';
import img22 from '../../../imgs/gallery/yute.webp';
import img3 from '../../../imgs/Finca/finca-logo.png';
import img33 from '../../../imgs/gallery/finca.webp';

const ServiceBar = (tabData) => {

    const magicWordList = ['proveedor', 'servicio', 'producto'];
    const [magicWord, setMagicWord] = useState('proveedor');
    const delay = 1000;
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setMagicWord(magicWordList[index]);
            index = (index + 1) % magicWordList.length;
        }, delay);

        return () => clearInterval(interval);
    }, []);
    


    return (
        <>
            <div className='service-wrap'>
                <h2>Encuentra el </h2>
                <div className='magic-word-wrap'>
                    <h2 className='magic-word'>{magicWord}</h2>
                </div>
                <h2> que estás buscando</h2>
                <nav className='sevice-bar'>
                    <ul className='service-list'>
                        <li id='ecotact' className='service-container'>
                        <NavLink to="/ecotact" className='service-container'>
                            <div className='service-container-overlay'></div>
                            <img src={img1} className='bg-img' />
                            <div className='service-hover'>
                                <img src={img11} alt='img-1' className='service-img' />
                            </div>
                        </NavLink>
                        </li>
                        <li id='finca'>
                            <NavLink to="/finca" className='service-container'>
                            <div className='service-container-overlay'></div>
                            <img src={img3} className='bg-img-esp' />
                            <div className='service-hover'>
                                <img src={img33} alt='img-3' className='service-img' />
                            </div>
                            </NavLink>
                        </li>
                        <li id='yuteco' className='service-container'>
                        <NavLink to="/yuteco" className='service-container'>
                            <div className='service-container-overlay'></div>
                            <img src={img2} className='bg-img' />
                            <div className='service-hover'>
                                <img src={img22} alt='img-2' className='service-img' />
                            </div>
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
};

export default ServiceBar;