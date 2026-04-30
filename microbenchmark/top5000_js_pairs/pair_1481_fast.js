const Benchmark = {
    run: function() {
        var VAR_1 = 'var str="",i=0;for(;i<1000;i+=1){str+="a";}';
        var VAR_2 = new Function(VAR_1);
        function FUNCTION_1() {
          var VAR_3 = "",
            VAR_4 = 0;
          for (; VAR_4 < 1000; VAR_4 += 1) {
            VAR_3 += "a";
          }
        }
        FUNCTION_1();
    }
};