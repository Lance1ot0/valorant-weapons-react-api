import React, { useState, useEffect  } from 'react';
import arrow from '../assets/next.png'

export default function WeaponCard(props) {

    const [skinIndex, setSkinIndex] = useState(-1);
    const [weaponImg, setWeaponImg] = useState(props.basicSkin);
    const [weaponName, setWeaponName] = useState(props.defaultName)

    const slideWeaponsSkinsRight =  () => {
        if(skinIndex < (props.skins.length) -1)
        {
            setSkinIndex(skinIndex + 1);
        }
        
    }

    const slideWeaponsSkinsLeft =  () => {
        if(skinIndex > -1)
        {
            setSkinIndex(skinIndex - 1);
        } 
    }

    useEffect(() => {
        if(skinIndex >= 0)
        {
            setWeaponImg(props.skins[skinIndex].displayIcon)
            setWeaponName(props.skins[skinIndex].displayName)
        }
        else
        {
            setWeaponName(props.defaultName)
            setWeaponImg(props.basicSkin)
        }
    }, [skinIndex]);

  return (
    <div className='weaponCard'>
        <h2>{weaponName}</h2>
        {props.shopData && <span className='category'>{props.shopData && props.shopData.category}</span>}

        <div className='weaponBlock'>
            <div className='nextSkinBtn' onClick={slideWeaponsSkinsLeft}>
                {skinIndex > -1 && <img className='arrow reverse' src={arrow} alt="left-arrow"/>}
            </div>
            <img className='weaponImg'src={weaponImg} alt="weapon-image"/>
            <div className='nextSkinBtn' onClick={slideWeaponsSkinsRight}>
            {skinIndex < (props.skins.length) -1 && <img className='arrow' src={arrow} alt="right-arrow"/>}
            </div>
        </div>
        
        <div className='statsBlock'>
            {props.shopData &&
            <div className='statsBar'>
                <div className='borderStats'></div>
                <h3>Stats</h3>
                <div className='borderStats'></div>
            </div>
            }

            {props.shopData && <div className='weaponInfos'>
                <div className='titleInfos'>
                    <p>Cost :</p>
                    <p>Rate of fire :</p>
                    <p>Magazine size :</p>
                    <p>Reload time :</p>
                </div>
                <div className='dataInfos'>
                    <p>{props.shopData.cost}</p>
                    <p>{props.weaponStats.fireRate}</p>
                    <p>{props.weaponStats.magazineSize}</p>
                    <p>{props.weaponStats.reloadTimeSeconds}s</p>
                </div>
            </div>}
            {props.shopData && <div className='skinList'>{skinIndex+2} / {props.skins.length+1}</div>}
        </div>
        

        {!props.shopData && <div className='meleeWeapon'></div>}
        {!props.shopData && <div className='skinList'>{skinIndex+2} / {props.skins.length+1}</div>}


    </div>
  )
}
