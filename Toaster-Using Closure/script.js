function createToaster(config) {
    return function (str) {
        let div = document.createElement('div');
        div.textContent = str;
        div.className = `inline-block ${config.theme==='dark'? 'bg-gray-800 text-white' :'bg-white text-black'} px-6 py-3 rounded shadow-lg pointer-events-none`;
        document.querySelector('.parent')
    }

    
}

let toaster = createToaster();
toaster({
    positionX:'right',
    positionY: 'top',
    theme: 'dark',
    duration: 3,

})