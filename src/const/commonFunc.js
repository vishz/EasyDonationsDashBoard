import { message } from "antd"

export const notifyMessage = (msg, type, duration) => {
    let msgType = "error"
    if (type === 0) {
        msgType = "error"
    } else if (type === 1) {
        msgType = "warning"
    } else if (type === 2) {
        msgType = "success"
    }

    message[msgType](msg === undefined || msg === null ? "Please enter correct details" : msg, duration === undefined ? 2 : duration)
}

