import React from "react";

export const AvatarSelectModal = (props)=>{
    var selectedAvatarLink = null;
    const avatarList = [
        "src/images/male-1.jpg",
        "src/images/male-2.jpg",
        "src/images/male-3.jpg",
        "src/images/female-1.jpg",
        "src/images/female-2.jpg",
        "src/images/female-3.jpg",
    ];
    const onSelectAvatar = (link)=>{
        console.log(`Selected Link = ${link}`);
    }
    const onSubmitForm = ()=>{

    }
    return(
        <div className="modalParent">
            <div className="modalContainer">
                <h3> Choose Avatar</h3>
                <div className="avatarsSection">
                    {avatarList.map((item, index) => {
                        return <AvatarSection key = {index} item={item} onAvatarSelected={onSelectAvatar}/>
                    })}
                </div>

                <br/><br/>
                <div className='expanded'>
            <button className="ui button red" type="submit" onClick={props.showAvatarSelectionModal}>Cancel</button>
            <button className="ui button green" type="submit" onClick={props.showAvatarSelectionModal}>Done</button>
          </div>
            </div>
        </div>
    )
}

export const AvatarSection = (props)=>{
    const onClickAvatar = (link)=>{
        console.log(`LINK = ${link }`);
    }
    return(
        <div className="avatarParent">
            <img src={props.item} onClick={()=>props.onAvatarSelected(props.item)}/>
        </div>
    )
}