import { ListItem, ListItemText,List ,Button} from '@material-ui/core'
// import DeleteForeverIcon from '@material-ui/icons';
import React from 'react';
import db from "./firebase";

function Listapp(props) {
    return (

        <>

        <List>
        <ListItem>
            <ListItemText primary={props.value.todo} secondary=""/>
        </ListItem>

        <Button variant="contained" color="primary"  onClick={event=> db.collection('todos').doc(props.value.id).delete()}>
       <span style={{fontStyle:"bold"}}>♻️ Delete me</span>
        </Button>

        {/* <button onClick={event=> db.collection('todos').doc(props.value.id).delete()}>♻️ Delete me</button> */}
        </List>
        
             {/* <li>{props.value}</li> */}

            </>
        
    )
}

export default Listapp;
