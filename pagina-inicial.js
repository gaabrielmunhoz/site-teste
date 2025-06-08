function openModal(cupcake){
    var txt1 = document.getElementById('txt1')
    var txt2 = document.getElementById('txt2')
    var txt3 = document.getElementById('txt3')
    switch(cupcake){
        case 'CupFlavor1':
            txt1.innerHTML = 'Bolo de Aniversário';
            txt2.innerHTML = 'Baunilha com creme de chocolate branco.'
            txt3.innerHTML = 'R$15,00'
            break;
        case 'CupFlavor2':
            txt1.innerHTML = 'Brownie';
            txt2.innerHTML = 'Brownie com creme de cheesecake.'
            txt3.innerHTML = 'R$15,00'
            break;
        case 'CupFlavor3':
            txt1.innerHTML = 'Framboesa';
            txt2.innerHTML = 'Baunilha com creme de framboesa'
            txt3.innerHTML = 'R$20,00'
            break;
        case 'CupFlavor4':
            txt1.innerHTML = 'Red-Velvet';
            txt2.innerHTML = 'Red-Velvet com chantilly.'
            txt3.innerHTML = 'R$15,00'
            break;
        case 'CupFlavor5':
            txt1.innerHTML = 'Tradicional';
            txt2.innerHTML = 'Baunilha com Chantilly.'
            txt3.innerHTML = 'R$15,00'
            break;
        case 'CupFlavor6':
            txt1.innerHTML = 'Red-Velvet Cheesecake';
            txt2.innerHTML = 'Redvelvet recheado com creme de Cheesecake.'
            txt3.innerHTML = 'R$20,00'
            break;
        default:
            txt1.innerHTML  = "Cookies And Cream";    
            txt2.innerHTML  = "Cookies And Cream";
            txt1.innerHTML  = "Delicioso cupkake.";
            txt3.innerHTML  = "R$15,00";
            break;

    }
    document.getElementById("knowMore").style.display = "inline-block";
}

function closeModal() {
  document.getElementById("knowMore").style.display = 'none';

}

function openSidebar(){
    document.getElementById('sidebar').classList.add('show');
}

function closeSidebar(){
    document.getElementById('sidebar').classList.remove('show')
}