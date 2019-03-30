


document.addEventListener('DOMContentLoaded', function(){ 
    document.querySelectorAll('.row .cell:not(:first-child):not(.disabled)').forEach(
        item => item.addEventListener('click', (item) => {
            item.target.classList.add('active');
        })
    );

    document.querySelector('button').addEventListener('click', async () => {
        document.querySelector('.root-parent').classList.add('transition-remove');
        await new Promise(resolve => setTimeout(resolve, 500));

        document.querySelector('.root2-parent').classList.add('transition-start');
    });

    document.querySelectorAll(".styled-checkbox").forEach(i => {
        i.addEventListener('change', (item) => {
            console.log(item)
            item.target.closest('.list-item').classList.add('done');
        });


    })


}, false);