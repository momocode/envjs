'use strict'

module.exports = env

function env (variable, defaultValue) {
  let value = process.env[variable]
  if (value === undefined)
    value = defaultValue
  if (value === undefined)
    throw new Error(`Environment variable ${variable} must be set.`)
  return value
}
