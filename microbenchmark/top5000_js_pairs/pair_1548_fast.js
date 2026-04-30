const Benchmark = {
    run: function() {
        var VAR_1 = 'var str="",i=0;for(;i<1000;i+=1){str+="a";}';
        var VAR_4 = new Function(VAR_1);
        function FUNCTION_1() {
          var VAR_2 = "",
            VAR_3 = 0;
          for (; VAR_3 < 1000; VAR_3 += 1) {
            VAR_2 += "a";
          }
        }
        VAR_4();
    }
};