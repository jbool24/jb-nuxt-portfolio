// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
// const sendMail = require('sendmail')()
const sgMail = require('@sendgrid/mail')
const { validateEmail, validateLength } = require('./validations')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = (event, context, callback) => {
  if (!process.env.CONTACT_EMAIL) {
    return callback(null, {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined'
    })
  }

  const body = JSON.parse(event.body)

  try {
    validateLength('body.contact', body.contact, 3, 50)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  try {
    validateEmail('body.email', body.email)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  try {
    validateLength('body.details', body.details, 10, 1000)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message
    })
  }

  const descriptor = {
    from: body.email,
    to: `"${process.env.CONTACT_EMAIL}" <no-reply@justinbellero.com>`,
    subject: `${body.contact} sent you a message from justinbellero.com`,
    text: body.details
  }

  sgMail.send(descriptor, (e) => {
    if (e) {
      callback(null, {
        statusCode: 500,
        body: e.message
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: ''
      })
    }
  })
}
