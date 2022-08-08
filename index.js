const ratingState = document.querySelector('.rating-state')
const thankyouState = document.querySelector('.thankyou-state')
const rateN = document.querySelector('#rate-n')

const handleSubmit = () => {
  ratingState.setAttribute('data-visible', false)
  thankyouState.setAttribute('data-visible', true)
}

const rate = (n) => rateN.innerHTML = n