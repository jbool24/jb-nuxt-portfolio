// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
// const sendMail = require('sendmail')()
const sgMail = require('@sendgrid/mail')
const { validateEmail, validateLength } = require('./validations')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = (event, context, callback) => {
  if (!process.env.CONTACT_EMAIL) {
    return callback(null, {
      statusCode: 500,
      body: 'process.env.CONTACT_EMAIL must be defined'
    })
  }

  // CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers
    }
  } else if (event.httpMethod === 'POST') {
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
      validateLength('body.details', body.message, 10, 1000)
    } catch (e) {
      return callback(null, {
        statusCode: 403,
        body: e.message
      })
    }

    const descriptor = {
      to: process.env.CONTACT_EMAIL,
      from: `"${body.email}" <no-reply@justinbellero.com>`,
      subject: `${body.contact} sent you a message from justinbellero.com`,
      templateId: process.env.SENDGRID_FORM_TEMPLATE_ID,
      dynamicTemplateData: {
        phone: body.phone,
        email: body.email,
        enquery: body.enquiryType,
        message: body.message
      }
    }
    console.log(process.env.SENDGRID_FORM_TEMPLATE_ID)
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
}
