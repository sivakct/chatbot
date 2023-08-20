import moment from "moment"
export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hai') || text.includes('hello'))
        return 'Hi,How can i help you?'
    else if (text.includes('date'))
        return moment().format('MMM DO YYYY')
    else if (text.includes('time'))
        return moment().format('h:mm:ss a')
    else if (text.includes('google link'))
        return 'https://www.google.com'
    else if (text.includes('intrest'))
        return 'bank intrest rate is 8.7'
    else if (text.includes('thank you'))
        return'Thanks for contact me.have a nice day'
  return "i can't get you. can you rephrase the message?"
}
