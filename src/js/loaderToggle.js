const loader = (info) => {
    if (info) {
        document.querySelector('.loader').classList.remove('hidden')
    } else {
        document.querySelector('.loader ').classList.add('hidden')
    }
}

export default loader