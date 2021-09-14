import { SEND_EMAIL } from '../action/action.types'
import Snackbar from 'react-native-snackbar';
import { sendGridEmail } from 'react-native-sendgrid'

const initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {
        case SEND_EMAIL:
            {
                const SENDGRIDAPIKEY = "YOUR_API_KEY";
                const FROMEMAIL = "afzalap153@gmail.com";
                const TOMEMAIL = "info@redpositive.in";
                const SUBJECT = "You have a new message";

                const sendRequest = sendGridEmail(SENDGRIDAPIKEY, TOMEMAIL, FROMEMAIL, SUBJECT, action.payload)
                sendRequest.then((response) => {
                    console.log("Success");
                    Snackbar.show({
                        text: 'Email sent',
                        backgroundColor: "#FF225D",
                    });
                }).catch((error) => {
                    console.log(error)
                    Snackbar.show({
                        text: error,
                        backgroundColor: "#FF225D",
                    });
                });
            }
        default:
            return state;
    }
}