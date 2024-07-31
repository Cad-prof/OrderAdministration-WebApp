
document.getElementById('ls-order').addEventListener('click', function() {

    const apiUrl = '/allorder';
    window.open(apiUrl, '_blank');
});

document.getElementById('conf-order').addEventListener('click', function() {
    
     const apiUrl = '/confirm_price';
    window.open(apiUrl, '_blank');
});

document.getElementById('del-order').addEventListener('click', function() {
    
     const apiUrl = '/delete_order';
    window.open(apiUrl, '_blank');
});

document.getElementById('sav-order').addEventListener('click', function() {
    
     const apiUrl = '/sendorder';
    window.open(apiUrl, '_blank');
});