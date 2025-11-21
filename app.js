const details = document.querySelectorAll('details')


details.forEach((targetDetail) =>{
    targetDetail.addEventListener('toggle', () =>{
        if(targetDetail.open){
            details.forEach((otherDetail) => {
                if(otherDetail !== targetDetail) {
                    otherDetail.open = false
                }
            })
        }
    })
})