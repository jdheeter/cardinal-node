let counted = Symbol('counted')

let methods = {
  mustHaveOutput (requiredOutput) {
    for (let output of this.to) {
      // skip outputs already counted by a different condition
      if (output[counted]) continue

      for (let key in requiredOutput) {
        if (output[key] !== requiredOutput[key]) break
      }
      for (let key in output) {
        if (output[key] !== requiredOutput[key]) break
      }

      // has all expected keys, condition is met
      output[counted] = true
      return
    }

    throw Error(`Must have output: ${requiredOutput}`)
  },

  mustPayToAddress (address, amount) {
    for (let output of this.to) {
      if (output.type !== 'accounts') continue
      if (output.address !== address) continue
      if (output.amount !== amount) continue
      if (output[counted]) continue

      // found valid output, mark it as counted
      output[counted] = true
      return
    }

    // required output not found
    throw Error(`Must have output which pays ${amount} to address "${address}"`)
  }
}

module.exports = function (state, tx) {
  // TODO: ensure there are no key collisions when attaching methods
  Object.assign(tx, methods)
}
