import { SEND_EMAIL } from './action.types'

export const sendEmail = (data) => ({
    type: SEND_EMAIL,
    payload: data,
})