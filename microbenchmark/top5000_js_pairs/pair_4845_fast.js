const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = 0;
        for (; VAR_2 < 1000; VAR_2 += 1) {
          VAR_1 += "a";
        }
        var VAR_3 = 'var str="",i=0;for(;i<1000;i+=1){str+="a";}';
        new Function(VAR_3)();
    }
};