var rows=['A','B','C','D','E','F','G','H'];
var column=[1,2,3,4,5,6,7,8];
var board = $('#board');
var spot = $('.spot');
var board = function(){
    var count = 0;
    for(var i=0;i<=8;i++)
    {
        for(var j=0;j<8;j++)
        {
            if(count%8==0)
            {
                board.append('<div class="spot" style="clear:left"><div>');
            }
            else
            {
                board.append('<div class="spot"><div>')
            }
            if(((i%2==0)&&(j%2!=0))||((i%2!=0)&&(j%2==0)))
            {
                $('.spot').eq(count).addClass("black");
            }
            else{
                $('.spot').eq(count).addClass('white');
            }
            $('.spot').eq(count) .attr("pos",row[rows.length-(i+1)]+column[j]);
              
        }
    }
}
              console.log(spot);
              
              
                $(document).ready(function(){
                    board();
                })
    
