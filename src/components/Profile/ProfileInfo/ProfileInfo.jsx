import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.bg_post}>
            <div>
                <img  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" />
            </div>
            <div className={classes.userDescription}>
                Ava + Descpipon
            </div>
        </div>
        
    )
}

export default ProfileInfo;