function createToaster(config) {
    return function (str) {
        let div = document.createElement('div');
        div.textContent = str;
        div.className = `inline-block ${config.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} px-6 py-3 rounded shadow-lg pointer-events-none`;
        document.querySelector('.parent').appendChild(div);

        if ( config.positionX !== 'left' || positionY !== 'top') {
           document.querySelector('.parent').className += `$config.positionX==='right' ? 'right-5' : 'left-5'} ${config.positionY==='bottom' ? 'bottom -5' : 'top-5'}   `;
        } 
        setTimeout(() => {
            document.querySelector('.parent').removeChild(div);
                
            },config.duration*3000)
        
    }

    
}

let toaster = createToaster();
toaster({
    positionX:'right',
    positionY: 'top',
    theme: 'dark',
    duration: 3,

})
toaster('This is a toast message!');