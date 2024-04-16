$(() => {
    let flag = true;
    $(".siyahi")
    .hide()
    .html(`
    <ul>
            <li><a href="">Haqqımızda</a></li>
            <li><a href="">Fəaliyyətimiz</a></li>
            <li><a href="">Partnyorlar</li>
            <li><a href="">Məhsullar</a></li>
            <li><a href="">Media</a></li>
            <li><a href="">Karyera</a></li>
            <li><a href="">Bizimlə əlaq</a></li>
    </ul>
    `);
    $("#bas")
    .click(function(){
        $(".siyahi").slideToggle();
       () => {
            if (flag) $(this).find("#bas").text("+");
            else $(this).find("#bas").text("-");
            flag = !flag;
          }
    })
    
   
})