import React from 'react';
import "./InfoBox.css";
import {Card, CardContent, Typography} from "@material-ui/core";
function InfoBox({isRed, title, cases, active, total, ...props}) {
    {/*Here Props store all the remaining attributes passed to function InfoBox */}
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
            {/*Here when a particular infobox is selected, its active attribute becomes true. So, we also add attributes of infoBox--selected( from css file) to that particular box. */}
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{cases}</h2>
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
