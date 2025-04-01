import React from "react";

export const AvatarSelectModal = ()=>{
    const avatarList = [
        "src/images/male-1.jpg",
        "src/images/male-2.jpg",
        "src/images/male-3.jpg",
        "src/images/female-1.jpg",
        "src/images/female-2.jpg",
        "src/images/female-3.jpg",
    ];
    return(
        <div className="modalParent">
            <div className="modalContainer">
                <h3> Choose Avatar</h3>
                <div className="avatarsSection">
                    {avatarList.map((item, index) => {
                        return <AvatarSection item={item}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export const AvatarSection = (props)=>{
    return(
        <div className="avatarParent">
            <img src={props.item}/>
        </div>
    )
}